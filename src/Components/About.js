import React from 'react';
import './css/About.css'; // Import the custom CSS
import img1 from './Images/education.jpg'

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src = {img1} // Replace with your image URL
            alt="Innovative Way to Learn"
          />
        </div>
        <div className="about-content">
          <h3>ABOUT US</h3>
          <h1>Innovative Way To Learn</h1>
          <p>
            Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores
            amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est.
            Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
