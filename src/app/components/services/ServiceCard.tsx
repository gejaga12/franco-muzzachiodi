import { useState, FC } from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  description: string;
  additionalInfo: string[];
  link: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, imageSrc, description, additionalInfo, link }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative bg-black dark:bg-black rounded-lg shadow-lg hover:shadow-gray-600 overflow-hidden flex flex-col md:flex-row transition-transform transform hover:scale-105" data-aos="fade-up">
      <div className="absolute inset-0">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="opacity-25"
        />
      </div>
      <div className="relative p-6 flex flex-col justify-between md:w-full text-white">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm font-light mt-2">{description}</p>
        </div>
        {showMore && (
          <div className="mt-4">
            {additionalInfo.map((info, index) => (
              <p key={index} className="mb-2 text-sm flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 bg-white rounded-full" size={15} /> {info}
              </p>
            ))}
          </div>
        )}
        <button
          onClick={toggleShowMore}
          className="mt-4 text-white text-center hover:text-blue-500 flex items-center justify-center"
        >
          {showMore ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
