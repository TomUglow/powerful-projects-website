import React from 'react';
import './HomeServices.css'
import ServicesImage from '../../../assets/images/Ben_and_Jake.jpg'
import ServiceItem from './ServiceItem';


const SplitSection = () => {
  return (
    <div className="split-section">
      <div className="left-side">
        <img src={ServicesImage} alt="Company Expertise" className='split-image'/>
        <div className="overlay-box">
          <h1>15+</h1>
          <p>Years of experience</p>
        </div>
      </div>

    <div className="right-side">
        <div className='about-us-section'>
            <h2>ABOUT US</h2>
            <h1>Safety & service first. Always.</h1>
            <p>We treat every project with the respect it deserves, and don't stop until you are satisfied. You can rest assured, knowing you're in expert hands.</p>
        </div>
        <ServiceItem
        title="RESIDENTIAL MAINTENANCE"
        content="For 15 years, Powerful Projects has been a trusted name in electrical maintenance. With expert technicians and a commitment to excellence, we provide tailored solutions for commercial, industrial, and residential clients. Our focus on efficiency and reliability ensures smooth operation and customer satisfaction."
        />
        <ServiceItem
            title="EMERGENCY SERVICES"
            content="Powerful Projects delivers 24/7 emergency electrical services tailored for domestic and real estate needs. Our skilled technicians provide swift, expert solutions to urgent electrical issues, ensuring safety and functionality for homes and properties. Count on us for reliable assistance to safeguard your domestic and real estate investments."
        />
        <ServiceItem 
            title="IS YOUR HOUSE SAFE?" 
            content="Powerful Projects offers thorough electrical inspections for your home at competitive rates, ensuring protection against potential electrical fires. Our expert checks guarantee safety and peace of mind, preserving the integrity of your house. Trust us to keep your home secure with our professional and affordable services." 
        />
    </div>
    </div>
  );
}

export default SplitSection;
