import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { BiUserCircle, BiMessageDetail } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineSend } from 'react-icons/ai';

interface FormValues {
  from_name: string;
  reply_to: string;
  message: string;
}

const ContactForm = () => {
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    let formErrors: Partial<FormValues> = {};
    if (!formValues.from_name) formErrors.from_name = 'El nombre es obligatorio';
    if (!formValues.reply_to) formErrors.reply_to = 'El correo electrónico es obligatorio';
    if (!formValues.message) formErrors.message = 'El mensaje es obligatorio';
    return formErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      emailjs.sendForm('service_8a99krd', 'template_69z53xo', event.target as HTMLFormElement, '3ooffi-k8RYBhaokk')
        .then((result) => {
          setIsSubmitting(false);
          Swal.fire({
            title: '¡Gracias por ponerte en contacto!',
            html: 'Tu mensaje ha sido enviado con éxito. En breve nos comunicaremos contigo.',
            confirmButtonColor: '#111827'
          });
          setFormValues({
            from_name: '',
            reply_to: '',
            message: ''
          });
        }, (error) => {
          setIsSubmitting(false);
          Swal.fire({
            title: 'Parece que hubo un Error',
            html: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
            confirmButtonColor: '#111827'
          });
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="min-h-screen p-8 bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col lg:flex-row items-center" id="contact">
      {/* Card de Diligenciar un Trámite */}
      <div className="w-full lg:w-1/2 lg:pr-8 flex justify-center mb-8 lg:mb-0">
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-8 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">TRABAJOS DE PROCURACIÓN</h3>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6">Ofrecemos asistencia personalizada para todos tus trámites en la provincia de corrientes. Ya sea para gestiones administrativas o judiciales, estamos aquí para ayudarte.</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
            <li>Asesoría en tiempo real.</li>
            <li>Servicio de videollamada disponible.</li>
            <li>Gestión integral de trámites.</li>
          </ul>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Solicitar Asistencia
          </button>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4 font-serif">CONTACTO</h2>
        <p className="text-md text-gray-800 dark:text-gray-300 mb-6">¡No dude en realizar su consulta! Estamos aquí para ayudarle y ofrecerle el mejor asesoramiento legal.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-lg text-gray-800 dark:text-white flex items-center mb-2">
              <BiUserCircle className="mr-2" size={20} /> 
              <span>Nombre</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="from_name"
                className="w-full p-2 border rounded-lg text-gray-700"
                value={formValues.from_name}
                onChange={handleInputChange}
                required
              />
            </div>
            {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name}</p>}
          </div>
          <div>
            <label className="text-lg text-gray-800 dark:text-white flex items-center mb-2">
              <AiOutlineMail className="mr-2" size={20}/> 
              <span>Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="reply_to"
                className="w-full p-2 border rounded-lg text-gray-700"
                value={formValues.reply_to}
                onChange={handleInputChange}
                required
              />
            </div>
            {errors.reply_to && <p className="text-red-500 text-sm">{errors.reply_to}</p>}
          </div>
          <div>
            <label className="text-lg text-gray-800 dark:text-white flex items-center mb-2">
              <BiMessageDetail className="mr-2" size={20}/> 
              <span>Mensaje</span>
            </label>
            <div className="relative">
              <textarea
                name="message"
                className="w-full p-2 border rounded-lg text-gray-700"
                value={formValues.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className={`flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-lg ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : (
              <>
                <AiOutlineSend className="mr-2" /> Enviar Mensaje
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
