import React from 'react';
import './css/TeacherCards.css'; 
import img1 from './Images/course-1.jpg';
import img2 from './Images/course-2.jpg';
import img3 from './Images/course-3.jpg';

const teachers = [
  {
    name: 'Jhon Doe',
    jobTitle: 'Web Designer',
    imageUrl: img1, // Replace with actual image URL
  },
  {
    name: 'Jhon Doe',
    jobTitle: 'Web Designer',
    imageUrl: img2, // Replace with actual image URL
  },
  {
    name: 'Jhon Doe',
    jobTitle: 'Web Designer',
    imageUrl: img3, // Replace with actual image URL
  },
  {
    name: 'Jhon Doe',
    jobTitle: 'Web Designer',
    imageUrl: img1, // Replace with actual image URL
  },
];

const TeacherCards = () => {
  return (
    <section className="teacher-section">
      <h2 className="section-title">Meet Our Teachers</h2>
      <div className="teacher-cards">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <div className="card-img-wrapper">
              <img src={teacher.imageUrl} alt={teacher.name} className="card-img" />
            </div>
            <div className="card-info">
              <h3>{teacher.name}</h3>
              <p>{teacher.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherCards;
