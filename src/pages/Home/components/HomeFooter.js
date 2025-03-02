import React from 'react';
import '../../../stylesheets/HomeFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FacebookLogo from '../../../assets/icons/facebook_white.png'
import InstagramLogo from '../../../assets/icons/instagram_white.png'

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <div className="home-footer-content">
        <div className="service-areas">
          <h2>Service Area</h2>
          <p>Servicing all of Melbourne including Geelong and Torquay</p>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <h3>Contact us 7 days a week <br /><br />
          0408 425 907
          </h3>
          <div className='contact-links'>
          <img src={FacebookLogo} alt='Facebook Logo' className='contact-logo' />
          <img src={InstagramLogo} alt='Instagram Logo' className='contact-logo'/>
          <FontAwesomeIcon icon={faEnvelope} className='contact-logo'/>
          <FontAwesomeIcon icon={faPhone} className='contact-logo'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
