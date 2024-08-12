import { FaLinkedin, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-8 bg-gray-300 dark:bg-gray-900 text-black dark:text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Suscripción al Newsletter */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-lg font-bold mb-4">Subscribe Our Newsletters</h3>
        <p className="text-sm mb-4">
          This sounded a very good reason, and Alice was quite pleased to know it. I never thought of that before! she said.
        </p>
        <form className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full p-2 rounded-lg text-black"
          />
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </form>
      </div>

      {/* Logo y descripción */}
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-gray-800 dark:text-white">Franco Muzzachiodi</span>
          <span className="text-sm tracking-widest text-gray-600 dark:text-gray-300"> & ASOCIADOS</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-xs text-sm mt-4">
          Somos abogados independientes con experiencia en el ejercicio de la profesión en el ámbito de Capital Federal.
        </p>
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/gustavo-matias-ledesma-ab73b7268/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaLinkedin /></a>
          <a href="https://instagram.com/Abogado.caba" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaInstagram /></a>
          <a href="https://wa.me/01166959255" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaFacebook /></a>
        </div>
      </div>

    </div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t-2 border-gray-400 dark:border-gray-400 pt-4">
      
      {/* Links de interés */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold mb-4">Links de interés</h3>
        <ul className="list-none p-0 m-0 flex flex-col items-center md:items-start space-y-2">
          <li className="w-full"><a href="#home" className="text-gray-800 dark:text-white hover:underline block text-sm">Inicio</a></li>
          <li className="w-full"><a href="#services" className="text-gray-800 dark:text-white hover:underline block text-sm">Servicios</a></li>
          <li className="w-full"><a href="#telegramas" className="text-gray-800 dark:text-white hover:underline block text-sm">Telegramas</a></li>
          <li className="w-full"><a href="#contact" className="text-gray-800 dark:text-white hover:underline block text-sm">Contacto</a></li>
        </ul>
      </div>

      {/* Información de contacto */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold mb-4">Nuestra info</h3>
        <ul className="list-none p-0 m-0 flex flex-col items-center md:items-start space-y-2">
          <li className="w-full flex items-center">
            <FaPhone className="mr-2 text-yellow-500" />
            <a href="tel:+01166959255" className="text-gray-800 dark:text-white hover:underline block text-sm">+54 011 6695-9255</a>
          </li>
          <li className="w-full flex items-center">
            <FaEnvelope className="mr-2 text-yellow-500" />
            <a href="mailto:ledesmagustavom@outlook.es" className="text-gray-800 dark:text-white hover:underline block text-sm">ledesmagustavom@outlook.es</a>
          </li>
          <li className="w-full flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-500" />
            <span className="text-gray-800 dark:text-white block text-sm">Jorge Newbery y Cabildo, Buenos Aires, Argentina</span>
          </li>
        </ul>
      </div>

    </div>

    <div className="container mx-auto mt-8 text-center text-xs text-gray-600 dark:text-gray-400 pt-4">
      &copy; {new Date().getFullYear()}. Franco Muzzachiodi & Asociados | Todos los derechos reservados.       
      <div>Developed by <a target='_blank' href="https://wa.me/+543772542429" className='font-semibold text-xs'>GG</a>. </div>
    </div>
  </footer>
);

export default Footer;
