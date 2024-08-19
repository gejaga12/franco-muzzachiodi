import Image from 'next/image';
import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCreditCard } from 'react-icons/fa';
import { TbUrgent } from 'react-icons/tb';

const WorkInfo = () => (
  <section id='workinfo'>
    {/* Sección Blanca */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 flex flex-col md:flex-row items-center">      
    </div>

    {/* Sección Negra */}
    <div className="bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-300 p-8 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div data-aos="zoom-in" className='bg-gray-300 p-2 rounded-lg'>
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
            <FaMapMarkerAlt className="mr-2" /> DIRECCIÓN
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800">Av. 3 de Abril 1555</p>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800">Corrientes, Argentina</p>
        </div>
        <div data-aos="zoom-in" className='bg-gray-300 p-2 rounded-lg'>
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
            <FaPhoneAlt className="mr-2" /> CONTACTO
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800"><a href="tel:01166959255">+5493794555818</a></p>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800"><a href="mailto:ledesmagustavom@outlook.es">franco@outlook.es</a></p>
        </div>
        <div data-aos="zoom-in" className='bg-gray-300 p-2 rounded-lg'>
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
            <FaClock className="mr-2" /> HORARIOS
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800">Lunes a viernes de 8:00 a 18:00 hs.</p>
        </div>
        <div data-aos="zoom-in" className='bg-gray-300 p-2 rounded-lg'>
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
            <TbUrgent  className="mr-2" /> URGENCIAS
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-gray-800">Medios de comunicación disponibles las 24hs.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WorkInfo;
