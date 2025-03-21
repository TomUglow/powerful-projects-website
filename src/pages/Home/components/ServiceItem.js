import React, { useState } from 'react';

const ServiceItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle active state
  };

  return (
    <div className="service-item">
      <h3>{title}</h3>
      <button onClick={handleClick}>
        {isActive ? '-' : '+'}
      </button>
      {isActive && <p>{content}</p>}
    </div>
  );
};

export default ServiceItem;