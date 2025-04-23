import React from "react";
import { CheckCircle2 } from "lucide-react";
import "./AITradingRobot.css";
import loadingAnimation from "../../Assets/Animations/Animation - 1745423708508.json";
import Lottie from "lottie-react";
const features = [
  "Fully Automatic , Setup once and the rest on Autopilot",
  "The most popular forex robots are offered via the MetaTrade 4 platform.",
  "Open and Close trade Automatically",
  "Forex robots do not make order entry errors",
  "Eliminates Human Emotions such as fear and greed",
  "Our EA are coming with money management features and risk management",
  "Forex robots do not get tired",
  "3 Years on testing (recently decided to sale for public)",
  "Analysis of market data with 12 inner indicators",
  "No Risky Strategies - No Martingale",
  "Profit Average Method",
  "Trades the Forex Market 24/5 (day and night)",
  "24 Hours Support with Day & Night Shift",
];

const AITradingRobot: React.FC = () => {
  return (
    <div className="ai-container">
      <div className="ai-image">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="lottie-animation"
        />
      </div>
      <div className="ai-content">
        <h1 className="ai-title">
          Robot will analyze the Chart automatically & take Trade.
        </h1>
        <p className="ai-description">
          Buy using the AI Trading Software automatic Robot Software
        </p>

        <div className="ai-feature-wrapper">
          <ul className="ai-features">
            {features.map((feature, index) => (
              <div key={index} className="ai-feature-box">
                <CheckCircle2 className="ai-icon" />
                <span className="ai-feature-text">{feature}</span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AITradingRobot;
