const Home = () => (
  <section className="relative h-screen flex flex-col items-center justify-center">


    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/media/fondo2.mp4" type="video/mp4" />
    </video>

    {/* Capa de opacidad sobre el video */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
          DERECHO DE FAMILIA <br />ACCIDENTES LABORALES <br />A.R.T Y DE TRÁNSITO
        </h1>
        <p className="text-xl text-white font-semibold mb-6">
          ¡Entrevistas personales o videollamada!
        </p>
        <a href="#contact" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full mb-4">
          Contacto
        </a>
        <a href="https://wa.me/1234567890" className="text-3xl text-green-500">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div> */}
    
  </section>
);

export default Home;
