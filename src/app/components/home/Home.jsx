import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Merriweather } from 'next/font/google';

// Importamos la fuente Merriweather de Google Fonts
const merriweather = Merriweather({
  weight: ['300', '400', '700'], // Incluimos los pesos necesarios para tu texto
  subsets: ['latin'],
  variable: '--font-merriweather', // Variable CSS personalizada
});

const Home = () => (
  <section className={`relative h-screen flex items-center justify-center px-4 md:px-20 ${merriweather.variable} font-merriweather`}>
    {/* Video de fondo */}
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/media/fondo2.mp4" type="video/mp4" />
    </video>

    {/* Capa de opacidad sobre el video */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Contenido del lado izquierdo */}
    <div className="relative flex flex-col justify-center items-center md:items-start text-white z-10 space-y-4 sm:space-y-6 text-center md:text-left">
      {/* Texto pequeño "TU SOLUCIÓN LEGAL" con font-light */}
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-light uppercase">
        TU SOLUCIÓN LEGAL
      </h2>
      
      {/* Texto grande "Asesoría Legal Inmediata" */}
      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
        Asesoría Legal Inmediata
      </h1>
      
      {/* Efecto de escritura */}
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-normal mb-4 min-w-[300px]">
        <Typewriter
          words={[
            'Derecho de Familia y Sucesiones', 
            'Derecho Penal, Civil y Comercial', 
            'Derecho Laboral, Jubilaciones y Pensiones', 
            'Gestoría del Automotor', 
            'Amparos de Salud y Prepagas'
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Botón de contacto */}
      <a
        href="#contact"
        className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-bold rounded-lg mb-4 hover:bg-green-600 transition-colors"
      >
        Contáctanos
      </a>
    </div>
  </section>
);

export default Home;
