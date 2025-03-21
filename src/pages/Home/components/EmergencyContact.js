import React from 'react';
import WarningIcon from '../../../assets/icons/warning-triangle.png';
import './EmergencyContact.css';

const EmergencyContact = () => {
  return (
    <div className="emergency-contact">
      <img src={WarningIcon} alt="Emergency Warning" className="warning-icon" />
      <h1>Have an emergency?</h1>
      <div className='emergency-text'>
      <p>Need help right away? Call us today for affordable emergency services.</p>
      </div>
      <button type="button" className="emergency-call">
        0408 425 907
      </button>
    </div>
  );
};

export default EmergencyContact;