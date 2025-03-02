import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import InstagramLogo from '../../assets/icons/instagram_white.png';
import FooterLogo from '../../assets/logos/final logo_black_no background.jpg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="black-footer">
        <div className="black-footer-content">
          <div className="service-areas">
            <h2>Service Area</h2>
            <p>Servicing all of Melbourne including Geelong and Torquay</p>
            <Link to="/" className='footer-link'>
              <FontAwesomeIcon icon={faHouse} className='home-link'/>
            </Link>
          </div>
          <div className="contact-details">
            <h2>Contact Details</h2>
            <h3>Contact us 7 days a week <br /><br />
            0408 425 907
            </h3>
            <div className='contact-links'>
              <a href='https://www.instagram.com/powerful.projects/' className='footer-link' target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt='Instagram Logo' className='contact-logo'/>
              </a>
              <a href='mailto:Ben@powerfulprojects.com.au' className='footer-link'>
                <FontAwesomeIcon icon={faEnvelope} className='contact-logo'/>
              </a>
              <a href='tel:+0408425907' className='footer-link'>
                <FontAwesomeIcon icon={faPhone} className='contact-logo'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <Link to="/">
          <img src={FooterLogo} alt="Powerful Projects Logo" />
        </Link>
        <p>&copy; 2025 Powerful Projects | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

// Ben to create Facebook profile
// import FacebookLogo from '../../assets/icons/facebook_white.png';
// <a href='https://facebook.com' className='footer-link' target="_blank" rel="noopener noreferrer">
// <img src={FacebookLogo} alt='Facebook Logo' className='contact-logo' />
// </a>