import { FC } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaVideo } from 'react-icons/fa'; // Importa FaVideo para el ícono de videollamada
import { FiMessageSquare } from 'react-icons/fi'; // Importa FiMessageSquare para el ícono de consulta

interface LocationHighlightProps {
  buenosAiresImageSrc: string;
  corrientesImageSrc: string;
}

const LocationHighlight: FC<LocationHighlightProps> = ({ buenosAiresImageSrc, corrientesImageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      
      {/* Ciudad Autónoma de Buenos Aires */}
      <div className="relative bg-black w-full md:w-1/2 h-1/2 md:h-full">
        <Image 
          src={buenosAiresImageSrc} 
          alt="Ciudad Autónoma de Buenos Aires" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-35"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD DE BUENOS AIRES
          </h2>
          <div className="flex mt-4 space-x-4  text-white items-center">            
            <FaMapMarkerAlt size={20} />
            <h3 className='text-xl'>Av. Corrientes 2458</h3>            
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FiMessageSquare size={20} className="mr-2" /> CONSULTA
            </button>
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FaVideo size={20} className="mr-2" /> AGENDAR VIDEO LLAMADA
            </button>
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FaWhatsapp size={20} className="mr-2" /> WHATSAPP
            </button>
          </div>
        </div>
      </div>

      {/* Ciudad de Corrientes Capital */}
      <div className="relative bg-black w-full md:w-1/2 h-1/2 md:h-full">
        <Image 
          src={corrientesImageSrc} 
          alt="Ciudad de Corrientes Capital" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-35"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD DE CORRIENTES CAPITAL
          </h2>
          <div className="flex mt-4 space-x-4 text-white items-center">            
            <FaMapMarkerAlt size={20} />
            <h3 className='text-xl'>Av. 3 de Abril 2458</h3>            
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FiMessageSquare size={20} className="mr-2" /> CONSULTA
            </button>
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FaVideo size={20} className="mr-2" /> AGENDAR VIDEO LLAMADA
            </button>
            <button className="flex items-center border-2 bg-black bg-opacity-50 border-white text-white px-4 py-2 rounded-lg">
              <FaWhatsapp size={20} className="mr-2" /> WHATSAPP
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default LocationHighlight;
