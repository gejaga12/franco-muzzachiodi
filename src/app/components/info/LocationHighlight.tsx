import { FC } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaWhatsapp, FaVideo } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';

interface LocationHighlightProps {
  buenosAiresImageSrc: string;
  corrientesImageSrc: string;
}

const LocationHighlight: FC<LocationHighlightProps> = ({ buenosAiresImageSrc, corrientesImageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-screen" id='location'>
      
      {/* Ciudad Autónoma de Buenos Aires */}
      <div className="relative bg-black w-full md:w-1/2 h-96 md:h-full">
        <Image 
          src={buenosAiresImageSrc} 
          alt="Ciudad Autónoma de Buenos Aires" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 md:p-10">
          <h2 className="text-white text-xl md:text-3xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD DE BUENOS AIRES
          </h2>
          <div className="flex mt-2 md:mt-4 space-x-2 md:space-x-4 text-white items-center">            
            <FaMapMarkerAlt size={16} md={20} />
            <h3 className='text-sm md:text-lg'>Av. Corrientes 2458</h3>            
          </div>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FiMessageSquare size={16} className="mr-2" /> CONSULTA
            </button>
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FaVideo size={16} className="mr-2" /> AGENDAR VIDEO LLAMADA
            </button>
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FaWhatsapp size={16} className="mr-2" /> WHATSAPP
            </button>
          </div>
        </div>
      </div>

      {/* Ciudad de Corrientes Capital */}
      <div className="relative bg-black w-full md:w-1/2 h-96 md:h-full">
        <Image 
          src={corrientesImageSrc} 
          alt="Ciudad de Corrientes Capital" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 md:p-10">
          <h2 className="text-white text-xl md:text-3xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD DE CORRIENTES CAPITAL
          </h2>
          <div className="flex mt-2 md:mt-4 space-x-2 md:space-x-4 text-white items-center">            
            <FaMapMarkerAlt size={16} />
            <h3 className='text-sm md:text-lg'>Av. 3 de Abril 2458</h3>            
          </div>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FiMessageSquare size={16} className="mr-2" /> CONSULTA
            </button>
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FaVideo size={16} className="mr-2" /> AGENDAR VIDEO LLAMADA
            </button>
            <button className="flex items-center justify-center border-2 bg-black bg-opacity-50 border-white text-white px-3 py-2 text-sm rounded-lg w-full md:w-auto">
              <FaWhatsapp size={16} className="mr-2" /> WHATSAPP
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default LocationHighlight;
