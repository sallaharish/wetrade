import React from 'react';
import './Experience.css'; // Import the CSS file
import bgImage from "../../Assets/images/8.jpg"

const Experience = () => {
  return (
    <div className="hero-container">
  <img src={bgImage}alt="Hero" className="hero-image" />
  <div className="hero-content">
    <h1>Trusted Auto Trading <br/>Solutions for Over 8 Years</h1>
    <p>With over 8 years of experience in the financial markets, our company has been at the forefront of automated trading solutions. We specialize in providing reliable, profit-driven trading systems powered by advanced algorithms and expert oversight. Whether you're new to trading or looking to simplify your investment strategy, our proven platform offers a seamless, hands-free experience backed by a solid track record of performance and client satisfaction</p>
    <div className="links">
      <a href="#">Learn more »</a>
      <a href="#">Read news »</a>
    </div>
  </div>
</div>

  );
};

export default Experience;
