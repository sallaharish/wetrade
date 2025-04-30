import React, { useEffect, useState } from 'react';
import './TradingTools.css';
import image1 from "../../Assets/images/slide1.jpg";
import image2 from "../../Assets/images/slide2.jpg";
import image3 from "../../Assets/images/slide3.jpg"

const images = [
  image1,
  image2,
  image3,
];

const TradingToolsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trading-tools-section">
      <div className="trading-tools-container">
        {/* Left side - Image */}
        <div className="image-wrapper">
          <div className="image-card">
            <img
              src={images[currentIndex]}
              alt="Trading Chart"
              className="chart-image"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="content-wrapper">
          <h5 className="small-heading">Pro Toolkits</h5>
          <h2 className="main-heading">State of the art trading tools</h2>
          <p className="description">
            Automate complicated price action, get easy signals, and detect reversals by smart money.
            Our world class toolkits are the best way to level up your TradingView charts.
          </p>
          <button className="primary-button">
            Level Up Your Charts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradingToolsSection;
