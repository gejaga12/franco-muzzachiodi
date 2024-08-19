import { FaLinkedin, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-8 bg-gray-300 dark:bg-gray-900 text-black dark:text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  border-t-2 border-gray-400 dark:border-gray-400 pt-4">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="flex flex-col items-center justify-center justify-items-center">
          <span className="text-2xl font-serif font-bold text-gray-800 dark:text-white">Franco Muzzachiodi</span>
          <span className="text-sm tracking-widest text-center text-gray-600 dark:text-gray-300"> & ASOCIADOS</span>
        </div>
        <p className="text-gray-600 items-center justify-center dark:text-gray-300 max-w-xs text-sm mt-4">
          Ofrecemos servicios legales en la Ciudad de Corrientes y en la Ciudad Autónoma de Buenos Aires, con experiencia en ambas jurisdicciones.        </p>
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/gustavo-matias-ledesma-ab73b7268/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaLinkedin /></a>
          <a href="https://instagram.com/Abogado.caba" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaInstagram /></a>
          <a href="https://wa.me/01166959255" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-blue-700"><FaFacebook /></a>
        </div>
      </div>


      {/* Links de interés */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold mb-4">Links de interés</h3>
        <ul className="list-none p-0 m-0 flex flex-col items-center md:items-start space-y-2">
          <li className="w-full"><a href="#home" className="text-gray-800 dark:text-white hover:underline block text-sm">Inicio</a></li>
          <li className="w-full"><a href="#services" className="text-gray-800 dark:text-white hover:underline block text-sm">Servicios Legales</a></li>
          <li className="w-full"><a href="#location" className="text-gray-800 dark:text-white hover:underline block text-sm">Asesoria  Profesional</a></li>
          <li className="w-full"><a href="#contact" className="text-gray-800 dark:text-white hover:underline block text-sm">Contacto</a></li>
        </ul>
      </div>

      {/* Información de contacto */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold mb-4">Nuestra info</h3>
        <ul className="list-none p-0 m-0 flex flex-col items-center md:items-start space-y-2">
          <li className="w-full flex items-center">
            <FaPhone className="mr-2 text-yellow-500" />
            <a href="tel:+5493794555818" className="text-gray-800 dark:text-white hover:underline block text-sm">+54 9 3794 55-5818</a>
          </li>
          <li className="w-full flex items-center">
            <FaEnvelope className="mr-2 text-yellow-500" />
            <a href="mailto:ledesmagustavom@outlook.es" className="text-gray-800 dark:text-white hover:underline block text-sm">franco@outlook.es</a>
          </li>
          <li className="w-full flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-500" />
            <span className="text-gray-800 dark:text-white block text-sm">Calle Falsa 123, Corrientes, Argentina</span>
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
