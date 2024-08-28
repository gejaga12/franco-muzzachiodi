import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { TbUrgent } from 'react-icons/tb';
import GoogleMapComponent from '../contact/GoogleMapComponent ';

const WorkInfo = () => (
  <section id='workinfo'>
    {/* Sección Blanca */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white sm:px-10 md:px-20 lg:px-28 xl:px-32 py-5 flex flex-col md:flex-row items-center justify-center">
      <GoogleMapComponent />
    </div>
    <div className='border-t-2'></div>
    {/* Sección Negra */}
    <div className="bg-gray-900 dark:bg-gray-900 text-white dark:text-gray-300 p-8 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div data-aos="zoom-in">
          <h3 className="text-xl font-bold mb-2 flex items-center text-white font-serif">
            <FaMapMarkerAlt className="mr-2" /> DIRECCIÓN
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white ">Av. 3 de Abril 1555</p>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white">Corrientes, Argentina</p>
        </div>
        <div data-aos="zoom-in">
          <h3 className="text-xl font-bold mb-2 flex items-center text-white font-serif">
            <FaPhoneAlt className="mr-2" /> CONTACTO
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white"><a href="tel:01166959255">+5493794555818</a></p>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white"><a href="mailto:ledesmagustavom@outlook.es">franco@outlook.es</a></p>
        </div>
        <div data-aos="zoom-in">
          <h3 className="text-xl font-bold mb-2 flex items-center text-white font-serif">
            <FaClock className="mr-2" /> HORARIOS
          </h3>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white">Lunes a viernes de 8:00 a 18:00 hs.</p>
          <p className="hover:text-gray-400 transition-colors duration-200 text-white">Medios de comunicación las 24hs.</p>

        </div>        
      </div>
    </div>
  </section>
);

export default WorkInfo;
