import React from 'react';
import './css/Top.css'; // Custom CSS file

const Top = () => {
  return (
    <div className="contact-info-container">
      <div className="logo">
        <span className="logo-part1">OK</span><span className="logo-part2">SOFT</span><span className="logo-part3">SOLUTION</span>
      </div>
      
      <div className="contact-details">
        <div className="contact-item">
           <i class="fa fa-2x fa-map-marker-alt  mr-3"></i>
          <div className="contact-text">
            <h4>Our Office</h4>
            <p>Near Seasons Garden, Opp. Hotel K.R<br />
            Plaza, Delhi Road, Saharanpur</p>
          </div>
        </div>

        <div className="contact-item">
           <i class="fa fa-2x fa-envelope  mr-3"></i>
          <div className="contact-text">
            <h4>Email Us</h4>
            <p>info@oksoftsolution.com<br />oksoftsolution@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <i class="fa fa-2x fa-phone  mr-3"></i>
          <div className="contact-text">
            <h4>Call Us</h4>
            <p>+91 9759820700</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
