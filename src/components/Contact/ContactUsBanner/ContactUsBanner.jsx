import React from 'react';
import './ContactUsBanner.css'; 


const ContactUsBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>Contact Us</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Contact Us</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUsBanner;
