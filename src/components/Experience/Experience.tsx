import React from 'react';
import './Experience.css'; // Import the CSS file
import bgImage from "../../Assets/images/8.jpg"

const Experience = () => {
  return (
    <div className="hero-container">
  <img src={bgImage}alt="Hero" className="hero-image" />
  <div className="hero-content">
    <h1>8 years of empowering traders, <br /> and it's just a beginning.</h1>
    <p>Discover Olymptrade's transformed and enhanced trading experience.<br /> Feel care that counts.</p>
    <div className="links">
      <a href="#">Learn more »</a>
      <a href="#">Read news »</a>
    </div>
  </div>
</div>

  );
};

export default Experience;
