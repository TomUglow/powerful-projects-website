import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ServicesSummary.css'; 
import MaintenanceLogo from '../../../assets/icons/light.png';
import BuildingLogo from '../../../assets/icons/tools.png';
import PhoneLogo from '../../../assets/icons/phone-calling.png';
import HeatingLogo from '../../../assets/icons/air-conditioner.png';
import SecurityLogo from '../../../assets/icons/wall-mount-camera.png';

const ServicesSummary = () => {
  return (
    <section className="services-summary">
      <h2>OUR SERVICES</h2>
      <h1>How can we help you?</h1>
      <div className="services-grid">
        <div className="service-box service-box-1">
          <img src={MaintenanceLogo} alt='Light bulb icon' className='services-logo'></img>
          <h3>ELECTRICAL MAINTENANCE</h3>
          <p>Powerful Projects offers comprehensive electrical maintenance solutions tailored for domestic residences.</p>
          <Link smooth to="/our-services#electrical-maintenance" className="read-more-link">
            <h2>READ MORE</h2>
          </Link>
        </div>
        <div className="service-box service-box-2">
          <img src={BuildingLogo} alt='Tools icon' className='services-logo building-logo'></img>
          <h3>BUILDING PROJECTS</h3>
          <p>Our team delivers versatile solutions for both domestic and commercial building endeavors.</p>
          <Link smooth to="/our-services#building-projects" className="read-more-link">
            <h2>READ MORE</h2>
          </Link>
        </div>
        <div className="service-box service-box-3">
          <img src={PhoneLogo} alt='Phone icon' className='services-logo'></img>
          <h3>DATA & PHONE</h3>
          <p>Powerful Projects specializes in addressing diverse data, phone, and automation requirements.</p>
          <Link smooth to="/our-services#data-and-phone" className="read-more-link">
            <h2>READ MORE</h2>
          </Link>
        </div>
        <div className="service-box service-box-4">
          <img src={HeatingLogo} alt='Air-conditioner icon' className='services-logo'></img>
          <h3>HEATING & COOLING</h3>
          <p>We handle the installation of heating and cooling units for residential and commercial properties.</p>
          <Link smooth to="/our-services#heating-and-cooling" className="read-more-link">
            <h2>READ MORE</h2>
          </Link>
        </div>
        <div className="service-box service-box-5">
          <img src={SecurityLogo} alt='Security camera icon' className='services-logo'></img>
          <h3>SECURITY</h3>
          <p>We specialise in installing security systems, including access control, with precision and expertise. </p>
          <Link smooth to="/our-services#security" className="read-more-link">
            <h2>READ MORE</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;