import React from 'react';
import Service from './OurServicesContent';
import QuoteSection from '../../../components/QuoteSection/QuoteSection';
import Image1 from '../../../assets/images/BarwonEdge_19_websize.jpg';
import Image2 from '../../../assets/images/Pitch_AlphingtonDeck_Internal.jpg';
import Image3 from '../../../assets/images/Data-unsplash.jpg';
import Image4 from '../../../assets/images/Airconditioner_Repair.png';
import Image5 from '../../../assets/images/Security-unsplash.jpg';

const OurServicesBody = () => {  // Component name: OurServicesBody
  const services = [
    {
      anchor: 'electrical-maintenance',
      number: '01',
      title: 'ELECTRICAL MAINTENANCE',
      description: 'Powerful Projects offers comprehensive electrical maintenance solutions tailored for domestic residences. From routine inspections to emergency repairs, our skilled technicians ensure safety and efficiency in every service. With a commitment to quality and reliability, we keep homes powered and protected, offering peace of mind to our valued customers.',
      image: Image1,
    },
    {
      anchor: 'building-projects',
      number: '02',
      title: 'BUILDING PROJECTS',
      description: 'Our team delivers versatile solutions for both domestic and commercial building endeavors. Our experienced team excels in every aspect, from planning to execution, ensuring seamless project management. With a focus on quality craftsmanship and client satisfaction, we bring excellence to every construction venture, big or small.',
      image: Image2,
    },
    {
      anchor: 'data-and-phone',
      number: '03',
      title: 'DATA AND PHONE',
      description: 'Powerful Projects specializes in addressing diverse data, phone, and automation requirements. With expertise spanning from networking infrastructure to smart technology integration, we provide tailored solutions for homes and businesses alike. Trust us for seamless connectivity and efficient automation, enhancing productivity and convenience across every project.',
      image: Image3,
    },
    {
      anchor: 'heating-and-cooling',
      number: '04',
      title: 'HEATING AND COOLING',
      description: "At Powerful Projects, we handle the installation of heating and cooling units for residential and commercial properties. Our dedicated team ensures precise and efficient installations, customized to meet each project's unique requirements. Rely on us for dependable service that maintains comfort and energy efficiency throughout the year.",
      image: Image4,
    },
    {
      anchor: 'security',
      number: '05',
      title: 'SECURITY',
      description: 'We specialise in installing security systems, including access control, with precision and expertise. Our installations are designed to meet the highest standards of safety and security for residential and commercial properties. Trust our team for reliable service and advanced solutions to protect your premises effectively.',
      image: Image5,
    }
  ];

  return (
    <div>
      {services.map((service, index) => (
        <div id={service.anchor} key={index}>
          <Service
            number={service.number}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </div>
      ))}
      <QuoteSection />
    </div>
  );
};

export default OurServicesBody; // Export name: OurServicesBody