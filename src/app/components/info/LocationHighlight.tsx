import { FC } from 'react';
import Image from 'next/image';

interface LocationHighlightProps {
  buenosAiresImageSrc: string;
  corrientesImageSrc: string;
}

const LocationHighlight: FC<LocationHighlightProps> = ({ buenosAiresImageSrc, corrientesImageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      
      {/* Ciudad Autónoma de Buenos Aires */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image 
          src={buenosAiresImageSrc} 
          alt="Ciudad Autónoma de Buenos Aires" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD AUTÓNOMA DE BUENOS AIRES
          </h2>
        </div>
      </div>

      {/* Ciudad de Corrientes Capital */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image 
          src={corrientesImageSrc} 
          alt="Ciudad de Corrientes Capital" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            ATENDEMOS EN <br /> CIUDAD DE CORRIENTES CAPITAL
          </h2>
        </div>
      </div>
      
    </section>
  );
};

export default LocationHighlight;
