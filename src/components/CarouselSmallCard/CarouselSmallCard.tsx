import React, { useState, useEffect } from "react";
import "./CarouselSmallCard.css";

import image1 from "../../Assets/images/c1.jpg";
import image2 from "../../Assets/images/c2.jpg";
import image3 from "../../Assets/images/c3.jpg";
import image4 from "../../Assets/images/c4.jpg";
import image5 from "../../Assets/images/c5.jpg";
import image6 from "../../Assets/images/c6.jpg";
import image7 from "../../Assets/images/c7.jpg";
import image8 from "../../Assets/images/c8.jpg";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: image1,
    title: "One Time Setup",
    description: "Our team will install the EA software and guide you until you're profiting.",
  },
  {
    icon: image2,
    title: "Smooth Experience on any Device",
    description: "Use on mobile, computer, or any device. Switch seamlessly and withdraw anytime.",
  },
  {
    icon: image3,
    title: "Zero Trading Knowledge Required",
    description: "Fully automated and beginner-friendly. No prior trading experience needed.",
  },
  {
    icon: image4,
    title: "Start Trading in 24 Hours",
    description: "Get started quickly and begin seeing daily profits within just one day.",
  },
  {
    icon: image5,
    title: "Dedicated Expert Support",
    description: "24/7 expert monitoring with live analysis and full support day and night.",
  },
  {
    icon: image6,
    title: "Global Access",
    description: "Trade anytime, anywhere with our worldwide platform.",
  },
  {
    icon: image7,
    title: "Advanced AI",
    description: "Our AI makes data-driven trades for optimal performance.",
  },
  {
    icon: image8,
    title: "Secure Platform",
    description: "Bank-level security to protect your investments.",
  },
];

const ITEMS_PER_VIEW = 3;
const VISIBLE_CARDS = 3.3; // 3 full cards and 30% of the next

const CarouselSmallCard: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
            <div
              className="carousel-card"
              key={index}
              style={{ backgroundImage: `url(${feature.icon})` }}
            >
              <div className="card-overlay">
                <h3>{feature.title}</h3>
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
