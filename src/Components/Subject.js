import React, { useState } from "react";
import img1 from './Images/course-1.jpg';
import img2 from './Images/course-2.jpg';
import img3 from './Images/course-3.jpg';
import img4 from './Images/course-4.jpg';
import img5 from './Images/course-5.jpg';
import './css/TopSubject.css';

const CourseCard = ({ image, title, price, rating, students }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const zoomScale = isImageHovered ? 1.2 : 1;
  const cardStyle = isHovered
    ? {
        transform: "translateY(-10px)",
        transition: "transform 0.3s ease-in-out",
      }
    : {};

  const imageStyle = {
    transform: `scale(${zoomScale})`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      className="course-card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className="course-image"
        style={imageStyle}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      />
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-price">${price}</p>
        <div className="course-rating">
          <span className="rating-star">★</span>
          <span className="rating-value">{rating}</span>
          <span className="rating-count">({students})</span>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      image: img1,
      title: "Web Design for Beginners",
      price: 99,
      rating: 4.5,
      students: 250,
    },
    {
      image: img2,
      title: "JavaScript Essentials",
      price: 120,
      rating: 4.7,
      students: 300,
    },
    {
      image: img3,
      title: "Advanced CSS Techniques",
      price: 110,
      rating: 4.6,
      students: 200,
    },
    {
      image: img4,
      title: "React Development Bootcamp",
      price: 130,
      rating: 4.8,
      students: 350,
    },
    {
      image: img5,
      title: "Full-Stack Web Development",
      price: 150,
      rating: 4.9,
      students: 400,
    },
    {
      image: img1,
      title: "Web Design for Beginners",
      price: 99,
      rating: 4.5,
      students: 250,
    },
    {
      image: img2,
      title: "JavaScript Essentials",
      price: 120,
      rating: 4.7,
      students: 300,
    },
    {
      image: img3,
      title: "Advanced CSS Techniques",
      price: 110,
      rating: 4.6,
      students: 200,
    },
    {
      image: img4,
      title: "React Development Bootcamp",
      price: 130,
      rating: 4.8,
      students: 350,
    },
    {
      image: img5,
      title: "Full-Stack Web Development",
      price: 150,
      rating: 4.9,
      students: 400,
    },
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Popular Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            image={course.image}
            title={course.title}
            price={course.price}
            rating={course.rating}
            students={course.students}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
