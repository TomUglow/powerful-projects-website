import React from 'react';
import { Helmet } from 'react-helmet';
import OurServicesHead from './components/OurServicesHead';
import OurServicesBody from './components/OurServicesBody';
import logo from '../../assets/logos/icon_blackandwhite.jpg';

const OurServices = () => {
  return (
    <div>
      <Helmet>
        <title>Our Electrical Services in Melbourne | Powerful Projects</title>
        <meta
          name="description"
          content="Explore our comprehensive range of electrical services in Melbourne, including residential and commercial installations, EV charger setups, electrical rewiring, switchboard upgrades, and security system installations. Contact us for a free quote!"
        />
        <meta property="og:title" content="Our Electrical Services in Melbourne | Powerful Projects" />
        <meta
          property="og:description"
          content="Explore our comprehensive range of electrical services in Melbourne, including residential and commercial installations, EV charger setups, electrical rewiring, switchboard upgrades, and security system installations. Contact us for a free quote!"
        />
        <meta property="og:image" content={"https://www.powerfulprojects.com.au" + logo.src} />
        <meta property="og:url" content="https://www.powerfulprojects.com.au/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Our Electrical Services in Melbourne | Powerful Projects" />
        <meta
          name="twitter:description"
          content="Explore our comprehensive range of electrical services in Melbourne, including residential and commercial installations, EV charger setups, electrical rewiring, switchboard upgrades, and security system installations. Contact us for a free quote!"
        />
        <meta property="twitter:image" content={"https://www.powerfulprojects.com.au" + logo.src} />
        <link rel="canonical" href="https://www.powerfulprojects.com.au/services" />
      </Helmet>
      <OurServicesHead />
      <OurServicesBody />
    </div>
  );
};

export default OurServices;