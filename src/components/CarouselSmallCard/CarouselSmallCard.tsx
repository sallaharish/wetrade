import React, { useState, useEffect } from "react";
import "./CarouselSmallCard.css";

import easyaceesses from "../../Assets/images/Easy Access on any Device.jpg";
import dedicated from "../../Assets/images/Dedicated Expert Support.jpg";
import zerotrading from "../../Assets/images/Zero Trading Knowledge Required.jpg";
import zeromonitoring from "../../Assets/images/Zero Monitoring.jpg";
import start24 from "../../Assets/images/Start Trading in 24 Hours.jpg";
import onetiome from "../../Assets/images/One Time Setup.jpg";
import { useMediaQuery, useTheme } from "@mui/material";


type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: onetiome,
    title: "One Time Setup",
    description: "Upon subscribing to our software, our technical team will carry out a full installation of the EA (Expert Advisor) system for automated trading, either on your personal device or a secure VPS. We provide comprehensive guidance throughout the setup process and ongoing support to ensure smooth operation until you begin achieving consistent trading profits.",
  },
  {
    icon: easyaceesses,
    title: "Seamless Trading Across All Devices",
    description: "Our custom-built trading Software is optimised for a flawless experience on any device you choose — whether it’s a mobile phone, tablet, or computer. Effortlessly switch between devices at your convenience, with the added flexibility of easy withdrawals anytime, from anywhere.",
  },
  {
    icon: zerotrading,
    title: "No Prior Trading Knowledge Required",
    description: "Our custom-built trading platform is designed with simplicity in mind, making it ideal for beginners and seasoned traders alike. Fully optimized for all devices—including smartphones, tablets, and computers—you can seamlessly switch between platforms without losing progress or functionality. Enjoy fast, secure withdrawals at any time, from any device, with just a few clicks.",
  },
  {
    icon: start24,
    title: "Start Trading Within 24 Hours",
    description: "Once your account setup is complete, trading begins automatically—allowing you to start seeing potential daily profits right away. Our streamlined onboarding process ensures that you’re up and running within 24 hours, with real-time access to your trading dashboard, performance insights, and earnings updates. No delays, no hassle—just fast, efficient entry into the world of trading.",
  },
  {
    icon: zeromonitoring,
    title: "Hands-Free Trading with Zero Monitoring Required",
    description: "As a valued client, you don’t need to spend time watching the markets or analyzing trends. Our advanced Expert Advisor (EA) software is fully automated and trades on your behalf using a carefully optimized, profit-focused strategy. Built with precision and efficiency, the system continuously scans the market to identify the best trading opportunities—so you can enjoy consistent results without lifting a finger.",
  },
  {
    icon: dedicated,
    title: "24/7 Expert Support",
    description: "Our team of trading experts monitors your automated trades day and night to ensure everything runs smoothly. With round-the-clock supervision, we make sure your account stays on track and performs at its best—giving you peace of mind while the system works for you.",
  },

];

const ITEMS_PER_VIEW = 3;





const CarouselSmallCard: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // every 5 seconds
  
    return () => clearInterval(interval);
  }, []);
  


  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
const VISIBLE_CARDS = isMobile ? 0.95 : isTablet ? 2 : 3.3;
  // Get rotated items with cloned cards at the end to simulate infinite scroll
  const getRotatedItems = () => {
    const items = [...features];

    // Add the first `ITEMS_PER_VIEW` cards again at the end
    const clones = features.slice(0, ITEMS_PER_VIEW);
    return items.concat(clones);
  };

  const handleNext = () => {
    setStartIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : features.length - VISIBLE_CARDS));
  };

  const handleTransitionEnd = () => {
    if (startIndex >= features.length) {
      // Instant reset to 0 without animation (cloning behavior)
      setIsTransitioning(false);
      setStartIndex(0);
    }
  };

  // Re-enable smooth transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50); // Small delay for smoothness
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const visibleItems = getRotatedItems();

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn left" onClick={handlePrev}>
        &lt;
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${startIndex * (100 / VISIBLE_CARDS)}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none", // No animation while resetting
          }}
        >
          {visibleItems.map((feature, index) => (
            <div className="carousel-card" key={index}>
              <img src={feature.icon} alt={feature.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="bottom-view">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <button className="nav-btn right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default CarouselSmallCard;
