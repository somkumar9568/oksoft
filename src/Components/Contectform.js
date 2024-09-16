import React from 'react';
import './css/Contectform.css'; // Create this CSS file for better styling

const PromoSignup = () => {
  return (
    <div className="promo-signup-container">
      <div className="promo-section">
        <h3 className="promo-title">NEED ANY COURSES</h3>
        <h1 className="promo-offer">30% Off For New Students</h1>
        <p className="promo-text">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd et. 
        </p>
        <ul className="promo-list">
          <li>Labore eos amet dolor amet diam</li>
          <li>Etsea et sit dolor amet ipsum</li>
          <li>Diam dolor diam elitripsum vero</li>
        </ul>
      </div>
      <div className="signup-section">
        <h2>Sign Up Now</h2>
        <form className="signup-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <select required>
            <option value="" disabled selected>Select a course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
          <button type="submit">Sign Up Now</button>
        </form>
      </div>
    </div>
  );
};

export default PromoSignup;
