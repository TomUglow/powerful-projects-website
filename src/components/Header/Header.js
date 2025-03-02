import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import logo from '../../assets/logos/icon_blackandwhite.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen, isMenuOpen]);

  return (
    <div className="header">
      <Link to="/" aria-label="Go to Home page">
        <img src={logo} alt="Company Logo" />
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul className="nav-dropdown">
            <li>
              <Link to="/" tabIndex="0">Home</Link>
            </li>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <Link
                to="/our-services"
                className="dropbtn"
                onClick={handleDropdownToggle}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                tabIndex="0"
              >
                Our Services
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                  className="chevron-icon"
                />
              </Link>
              <div className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                <Link smooth to="/our-services#electrical-maintenance" onClick={handleDropdownLinkClick} tabIndex="0">Electrical Maintenance</Link>
                <Link smooth to="/our-services#building-projects" onClick={handleDropdownLinkClick} tabIndex="0">Building Projects</Link>
                <Link smooth to="/our-services#data-and-phone" onClick={handleDropdownLinkClick} tabIndex="0">Data and Phone</Link>
                <Link smooth to="/our-services#heating-and-cooling" onClick={handleDropdownLinkClick} tabIndex="0">Heating and Cooling</Link>
                <Link smooth to="/our-services#security" onClick={handleDropdownLinkClick} tabIndex="0">Security</Link>
              </div>
            </li>
            <li>
              <Link to="/projects" onClick={handleDropdownLinkClick} tabIndex="0">Projects</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleDropdownLinkClick} tabIndex="0">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`burger-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={handleMenuToggle}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        tabIndex="0"
      >
        <FontAwesomeIcon icon={faBars} className="bars" />
        <FontAwesomeIcon icon={faTimes} className="times" />
      </div>
    </div>
  );
}

export default Header;