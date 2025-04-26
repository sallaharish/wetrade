import React from "react";
import "./FeaturesGrid.css";
import loadingAnimation from "../../Assets/Animations/Animation - 1745322777840.json";
import Lottie from "lottie-react";

type Feature = {
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
};

const features: Feature[] = [
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/one-time.png",
    title: "One Time Setup",
    description:
      "Our team will install the EA software and guide you until you're profiting.",
  },
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/smooth-device.png",
    title: "Smooth Experience on any Device",
    description:
      "Use on mobile, computer, or any device. Switch seamlessly and withdraw anytime.",
  },
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/zero-knowledge.png",
    title: "Zero Trading Knowledge Required",
    description:
      "Fully automated and beginner-friendly. No prior trading experience needed.",
  },
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/resultin24.png",
    title: "Start Trading in 24 Hours",
    description:
      "Get started quickly and begin seeing daily profits within just one day.",
  },
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/zero-mon.png",
    title: "Zero Monitoring",
    description:
      "The EA software trades automatically using a profit-focused strategy. No manual watching needed.",
    
  },
  {
    icon: "https://www.aitradingsoftware.ae/assets/img/features-icon/ded-support.png",
    title: "Dedicated Expert Support",
    description:
      "24/7 expert monitoring with live analysis and full support day and night.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="features-container">
        
      {features.map((feature, index) => (
        <div
          className="feature-card"
          key={index}
         
        >
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesGrid;
