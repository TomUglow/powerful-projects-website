import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Hero.css';
import heroLogo from '../../../assets/logos/white_no background.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroLogo} alt="Company Logo" className="hero-logo" />
      <h1>Melbourne's Electrical Experts</h1>
      <p>
        Our electricians provide exceptional service and assistance at competitive rates. Every project we undertake is backed by our guarantee and meets the most stringent industry regulations.
      </p>
      <Link to="/our-services" aria-label="View our Electrical Services">
        <button aria-label="View our Electrical Services">
          View Our Services
        </button>
      </Link>
    </section>
  );
};

export default Hero;