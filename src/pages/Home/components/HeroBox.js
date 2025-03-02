import React from 'react';
import whiteLogo from '../../../assets/icons/plug.png';
import './HeroBox.css';

const ColoredBox = () => {
  return (
    <div className="colored-box">
      <img src={whiteLogo} alt="Generic electrical icon" />
      <div className="content-item">
        <p>Emergency electrical services</p>
      </div>
      <img src={whiteLogo} alt="Generic electrical icon" />
      <div className="content-item">
        <p>All our technicians are trained and certified</p>
      </div>
      <img src={whiteLogo} alt="Generic electrical icon" />
      <div className="content-item">
        <p>Satisfaction guaranteed on every project</p>
      </div>
    </div>
  );
};

export default ColoredBox;
