import React from "react";
import "./FeaturesBox.css";

import feature1 from "../../Assets/images/Zero Monitoring.jpg";
import feature2 from "../../Assets/images/Zero Monitoring.jpg";
import feature3 from "../../Assets/images/Zero Monitoring.jpg";
import feature4 from "../../Assets/images/Zero Monitoring.jpg";
import feature5 from"../../Assets/images/Zero Monitoring.jpg";
import feature6 from "../../Assets/images/Zero Monitoring.jpg";
import feature7 from "../../Assets/images/Zero Monitoring.jpg";
import feature8 from "../../Assets/images/Zero Monitoring.jpg";
import feature9 from "../../Assets/images/Zero Monitoring.jpg";
import feature10 from "../../Assets/images/Zero Monitoring.jpg";
import feature11 from "../../Assets/images/Zero Monitoring.jpg";
import feature12 from "../../Assets/images/Zero Monitoring.jpg";
import feature13 from "../../Assets/images/Zero Monitoring.jpg";
import feature14 from "../../Assets/images/Zero Monitoring.jpg";

type FeatureCard = {
  title: string;
  subtitle: string;
  image: string;
  size: any;
};

const features: FeatureCard[] = [
  { title: "Risk-free trades", subtitle: "Trade confidently", image: feature1, size: "one" },
  { title: "Insured deposits", subtitle: "Peace of mind", image: feature2, size: "two" },
  { title: "Negative balance protection", subtitle: "Only risk trade amount", image: feature3, size: "three" },
  { title: "Smart Stop Loss", subtitle: "Protect profits", image: feature4, size: "four" },
  { title: "Fast Withdrawals", subtitle: "Get paid quickly", image: feature5, size: "five" },
  { title: "Smart Money Alerts", subtitle: "Catch big moves", image: feature6, size: "six" },
  { title: "Real-Time News", subtitle: "Stay ahead", image: feature7, size: "seven" },
  { title: "Multi-Asset Support", subtitle: "Forex, Crypto & more", image: feature8, size: "eight" },
  { title: "24/7 Support", subtitle: "We’ve got your back", image: feature9, size: "nine" },
  { title: "Custom Indicators", subtitle: "Tailor your charts", image: feature10, size: "ten" },
  { title: "Auto Charting", subtitle: "Save time", image: feature11, size: "eleven" },
  { title: "One-Click Trading", subtitle: "Speed matters", image: feature12, size: "twelve" },
  { title: "Trade Assistant", subtitle: "AI powered help", image: feature13, size: "thirteen" },
  { title: "Dark Mode UI", subtitle: "Eyes love it", image: feature14, size: "fourteen" },
];

const FeaturesBox: React.FC = () => {
  return (
    <div className="features-wrapper">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card ${feature.size}`}>
            <img src={feature.image} alt={feature.title} />
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBox;
