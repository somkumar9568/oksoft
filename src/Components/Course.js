import React, { useState } from 'react';
import './css/Course.css'; // Import your CSS file
import img1 from './Images/course-1.jpg';

function Course() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredCardIndex(null);
  };

  const cards = [1, 2, 3, 4]; // Array to map over for rendering cards

  return (
    <div className="container">
      {cards.map((_, index) => (
        <div
          key={index}
          className={`card ${hoveredCardIndex === index ? 'lift' : ''}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <img
            src={img1}
            alt="Web design and development course"
            className={`course-image ${hoveredCardIndex === index ? 'zoom' : ''}`}
          />
          <div className="card-content">
            <h3>Web Design & Development Courses for Beginner</h3>
            <p>
              <span className="rating">★ 4.5 (250)</span> | <span className="duration">30m</span>
            </p>
            <p className="price">$99</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Course;
