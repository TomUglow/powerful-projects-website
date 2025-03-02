import React from 'react';
import './OurServicesContent.css';

const Service = ({ anchor, number, title, description, image }) => {
  return (
    <div className="service" id={anchor}>
      <div className="service-details">
        <div className="decorative-line"></div>
        <div className="service-info">
          <h3>{number}.<br/></h3>
          <h1>{title} </h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Service;
