import React from 'react';
import Slider from 'react-slick';
import './css/TestimonialsSlider.css';
import img1 from './Images/course-1.jpg';
import img2 from './Images/course-2.jpg';
import img3 from './Images/course-3.jpg';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company XYZ',
    image: img1,
    message: 'This is an amazing product! It helped my business grow exponentially.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company ABC',
    image: img2,
    message: 'Outstanding experience, and I would highly recommend it to anyone!',
  },
  {
    name: 'Alice Johnson',
    role: 'Designer, Freelance',
    image: img3,
    message: 'Great design and smooth performance. I love it!',
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-message">"{testimonial.message}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
