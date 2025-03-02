import React from 'react';
import { Helmet } from 'react-helmet';
import OurServicesHead from './components/OurServicesHead';
import OurServicesBody from './components/OurServicesBody';
import logo from '../../assets/logos/icon_blackandwhite.jpg';

const OurServices = () => {
  return (
    <div>
      <Helmet> 
        <title>Our Services | Powerful Projects</title>
        <meta name="description" content="Explore our comprehensive range of electrical services in Melbourne, Geelong, and Torquay, including residential safety checks, commercial installations, and EV charger installations. Contact us for a free quote!" />
        <meta property="og:title" content="Our Services | Powerful Projects" />
        <meta property="og:description" content="Explore our comprehensive range of electrical services in Melbourne, Geelong, and Torquay, including residential safety checks, commercial installations, and EV charger installations. Contact us for a free quote!" />
        <meta property="og:image" content={"https://www.powerfulprojects.com.au" + logo} />
        <meta property="og:url" content="https://www.powerfulprojects.com.au/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Powerful Projects" />
        <meta name="twitter:description" content="Explore our comprehensive range of electrical services in Melbourne, Geelong, and Torquay, including residential safety checks, commercial installations, and EV charger installations. Contact us for a free quote!" />
        <meta name="twitter:image" content={"https://www.powerfulprojects.com.au" + logo} />
        <link rel="canonical" href="https://www.powerfulprojects.com.au/services" />
      </Helmet>
      <OurServicesHead />
      <OurServicesBody />
    </div>
  );
};

export default OurServices;