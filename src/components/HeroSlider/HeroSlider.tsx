import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

import image1 from "../../Assets/images/stock-market-forex-trading-graph-candlestick-chart-financial-investment-economy.jpg";
import image2 from "../../Assets/images/image-is-candlestick-chart-stock-market-chart-shows-prices-stock-time.jpg";
import image3 from "../../Assets/images/forex-graph-showing-triple-bottom-pattern.jpg";
import image4 from "../../Assets/images/financial-chart-candlestick-pattern.jpg";

const images = [image1, image2, image3, image4];

const HeroSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        // After fade-out, change image and fade back in
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300); // fade-out duration
    }, 3000); // image change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lux-hero-container">
      <div className="lux-hero-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Chart"
          className={`lux-hero-image ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>
      <div className="lux-hero-content">
        <p className="lux-subtitle">Pro Toolkits</p>
        <h1 className="lux-title">State of the art trading tools</h1>
        <p className="lux-description">
          Automate complicated price action, get easy signals, and detect
          reversals by smart money. Our world class toolkits are the best way
          to level up your TradingView charts.
        </p>
        <button className="lux-cta">Level Up Your Charts →</button>
      </div>
    </div>
  );
};

export default HeroSlideshow;
