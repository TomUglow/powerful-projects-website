import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero'; 
import HeroBox from './components/HeroBox'; 
import HomeServices from './components/HomeServices'; 
import EmergencyContact from './components/EmergencyContact'; 
import PhotoGrid from './components/PhotoGrid'; 
import ServicesSummary from './components/ServicesSummary'; 
import Testimonials from './components/Testimonials'; 
import logo from '../../assets/logos/icon_blackandwhite.jpg'; 

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Powerful Projects",
    "description": "Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!",
    "url": "https://www.powerfulprojects.com.au/",
    "telephone": "+61408425907",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "PublicHolidays",
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "image": "https://www.powerfulprojects.com.au/" + logo.src, // Corrected logo URL
    "priceRange": "Contact for free quote",
    "serviceArea": [
      "Melbourne",
      "Geelong",
      "Torquay"
    ],
    "serves": "Residential Safety Checks, Commercial Installations, EV Charger Installation"
  };

  const services = [
    { id: 1, name: 'Electrical Maintenance', description: 'Reliable electrical maintenance services.' },
    { id: 2, name: 'Building Projects', description: 'Expert building project electrical installations.' },
    { id: 3, name: 'Data and Phone', description: 'Data and phone line installations.' },
    { id: 4, name: 'Heating and Cooling', description: 'Heating and cooling electrical services.' },
    { id: 5, name: 'Security', description: 'Security system installations.' },
  ];

  return (
    <div className="Home">
      <Helmet>
        <title>Powerful Projects | Electrician Melbourne, Geelong & Torquay</title>
        <meta name="description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
        <meta property="og:title" content="Powerful Projects | Electrician Melbourne, Geelong & Torquay" />
        <meta property="og:description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
        <meta property="og:image" content={"https://www.powerfulprojects.com.au/" + logo.src} />
        <meta property="og:url" content="https://www.powerfulprojects.com.au/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Powerful Projects | Electrician Melbourne, Geelong & Torquay" />
        <meta name="twitter:description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
        <meta name="twitter:image" content={"https://www.powerfulprojects.com.au/" + logo.src} />
        <link rel="canonical" href="https://www.powerfulprojects.com.au/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero />
      <HeroBox />
      <div className="hero-content">
        <HomeServices services={services} className="hero-services" /> {/* Passed services data as prop */}
        <EmergencyContact className="emergency-contact" />
      </div>
      <PhotoGrid />
      <ServicesSummary />
      <Testimonials className="testimonials" />
    </div>
  );
};

export default Home;