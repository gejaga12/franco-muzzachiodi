import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoArrowForwardCircle } from 'react-icons/io5';

const CustomModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setModalIsOpen(false);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Promotional Modal"
      className="flex items-center justify-center h-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"      
    >
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl" data-aos="zoom-in">
        <button onClick={closeModal} className="absolute top-2 right-2 text-black z-50">
          <span className="text-2xl text-white cursor-pointer">
            <IoIosCloseCircleOutline className="mr-2 mt-2 text-white hover:scale-110 transition-transform duration-300" size={20} />
          </span>
        </button>
        <div className="relative w-full h-96">
          <Image
            src="/images/img3.jpg" // Ruta de la imagen cargada
            alt="Promotional Image"
            fill
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-black bg-opacity-50">
            {/* <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold mb-0">DERECHO DE FAMILIA, LABORAL, PENAL Y CIVIL</h1>
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold mb-4"></h1> */}
            <div className="flex flex-col mb-3">
              <span className="text-4xl font-serif font-bold text-white text-center">Franco Muzzachiodi</span>
              <span className="text-lg tracking-widest text-white text-center"> & ASOCIADOS</span>
            </div>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex items-center">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full" size={20} />
              Asesoramiento las 24hs
            </span>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full " size={20} />
              Sucesiones, Divorcios, Prescripciones
            </span>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full " size={20} />
              Accidentes de Tránsito y A.R.T
            </span>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full " size={20} />
              Despidos Laborales sin justa causa
            </span>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full " size={20} />
              Amparos de Salud a prepagas
            </span>
            <span className="text-sm sm:text-md lg:text-lg text-white font-light mb-2 flex">
              <IoArrowForwardCircle className="mr-2 mt-2 text-green-500 bg-white rounded-full " size={20} />
              Impuestos a las Ganancias
            </span>
            <div className='flex justify-center mb-3'>
              <button
                onClick={handleContactClick}
                className="px-6 py-2 mt-1 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 w-fit transition duration-300"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
