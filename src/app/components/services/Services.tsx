import { FcApproval } from 'react-icons/fc';
import ServiceCard from './ServiceCard';

const Services = () => (
  <>
    <section id="services" className="min-h-screen p-8 bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">SERVICIOS LEGALES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Familia y Sucesiones"
            imageSrc="/images/img5.jpg"
            description="Asesoramiento y representación en casos de derecho de familia y sucesiones, asegurando que tus derechos y los de tu familia estén protegidos."
            additionalInfo={[
              'Divorcios y separaciones',
              'Acuerdos de custodia y visitas',
              'Sucesiones y testamentos',
              'Reclamaciones de herencias',
              'Disputas familiares'
            ]}
            link="#"
          />
          <ServiceCard 
            title="Accidentes de Tránsito y A.R.T"
            imageSrc="/images/transito.webp"
            description="Experiencia comprobable en el manejo de accidentes de tránsito y reclamaciones a A.R.T., luchando por la compensación justa para nuestros clientes."
            additionalInfo={[
              'Reclamaciones a aseguradoras',
              'Indemnización por daños y perjuicios',
              'Litigación en casos graves',
              'Negociación con compañías de seguros',
              'Representación en mediaciones'
            ]}
            link="#"
          />
          <ServiceCard 
            title="Despidos Laborales"
            imageSrc="/images/img6.jpg"
            description="Protegemos los derechos de los trabajadores frente a despidos sin justa causa, buscando compensaciones adecuadas y justicia en el ámbito laboral."
            additionalInfo={[
              'Reclamación de indemnizaciones',
              'Negociación de acuerdos',
              'Asesoramiento en derechos laborales',
              'Representación en conflictos laborales',
              'Procedimientos judiciales por despido injusto'
            ]}
            link="#"
          />
          <ServiceCard 
            title="Amparos de Salud y Prepagas"
            imageSrc="/images/img7.jpg"
            description="Asesoramiento y representación en casos de amparos de salud, asegurando que las prepagas y seguros cumplan con sus obligaciones."
            additionalInfo={[
              'Reclamos contra prepagas',
              'Amparos por tratamientos médicos',
              'Cobertura de medicamentos',
              'Defensa de derechos de pacientes',
              'Litigación contra entidades de salud'
            ]}
            link="#"
          />
          <ServiceCard 
            title="Jubilaciones y Pensiones"
            imageSrc="/images/img8.jpg"
            description="Asistencia en la tramitación de jubilaciones y pensiones, tanto por ANSES como IPS, asegurando que obtengas todos los beneficios a los que tienes derecho."
            additionalInfo={[
              'Jubilaciones ordinarias y anticipadas',
              'Pensiones por fallecimiento',
              'Reajustes de haberes',
              'Tramitación en ANSES e IPS',
              'Gestión de beneficios adicionales'
            ]}
            link="#"
          />
          <ServiceCard 
            title="Gestoría del Automotor"
            imageSrc="/images/img10.jpg"
            description="Gestión integral de trámites del automotor en la Provincia de Corrientes, Chaco y Misiones, asegurando rapidez y eficacia."
            additionalInfo={[
              'Transferencias de vehículos',
              'Altas y bajas de dominio',
              'Trámites de importación y exportación',
              'Gestión de cédulas y placas',
              'Asesoramiento en compra-venta'
            ]}
            link="#"
          />
        </div>
      </div>
    </section>
  </>
);

export default Services;
