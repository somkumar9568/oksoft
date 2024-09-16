import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css"; // Import your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h3>Get In Touch</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Near Seasons Garden, Opp.
            Hotel K.R Plaza, Delhi Road, Saharanpur
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> 9759820700
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@oksoftsolution.com
          </p>
          <div className="social-icons">
            <Link to=""><i className="fab fa-twitter"></i></Link>
            <Link to="/facebook"><i className="fab fa-facebook-f"></i></Link>
            <Link to="/linkedin"><i className="fab fa-linkedin-in"></i></Link>
            <Link to="/instagram"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>

        <div className="footer-section courses">
          <h3>Our Courses</h3>
          <ul>
            <li><Link to="/web-design">Web Design</Link></li>
            <li><Link to="/apps-design">Apps Design</Link></li>
            <li><Link to="/marketing">Marketing</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/seo">SEO</Link></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>
            Rebuma labore lorem dolores kasd est, et ipsum amet et kasd, ipsum
            sea tempor magna tempor.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your Email Address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Domain Name. All Rights Reserved. Designed by <Link to="/designer-profile">React Js Coder Som</Link>
        </p>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
