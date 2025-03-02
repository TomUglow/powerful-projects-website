import React from 'react';
import { Helmet } from 'react-helmet'; 
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <Helmet> 
        <title>Thank You | Powerful Projects</title>
        <meta name="description" content="Thank you for contacting Powerful Projects! We will get back to you shortly." /> {/* Add a description */}
        <meta property="og:title" content="Thank You | Powerful Projects" />
        <meta property="og:description" content="Thank you for contacting Powerful Projects! We will get back to you shortly." />
        <meta property="og:url" content="https://www.powerfulprojects.com.au/thank-you" /> {/* Update URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You | Powerful Projects" />
        <meta name="twitter:description" content="Thank you for contacting Powerful Projects! We will get back to you shortly." />
        <link rel="canonical" href="https://www.powerfulprojects.com.au/thank-you" /> {/* Update canonical link */}
      </Helmet>
      <div className="overlay"></div>
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your message has been successfully sent. We will get back to you shortly.</p>
        <p>For anything urgent, please contact Ben directly on: <br/>
        0408 425 907
        </p>
        <p></p>
        <Link to="/">
          <button className='thank-you-button'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;