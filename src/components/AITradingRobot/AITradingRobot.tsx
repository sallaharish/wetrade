  import React from "react";
  import { CheckCircle2 } from "lucide-react";
  import "./AITradingRobot.css";
  import loadingAnimation from "../../Assets/Animations/Animation - 1745321324517.json"
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
    "24 Hours Support with Day & Night Shift"
  ];

  const AITradingRobot: React.FC = () => {
    return (
      <div className="ai-container">
        <div className="ai-content">
          <h1 className="ai-title">How Does AI Trading Software Robot Work?</h1>
          <p className="ai-description">
            A Forex Auto Trading Robot that works as a fully Automated Forex Trading
            System that executes both Buy, Sell Trade Automatically & Close the Trade
            in Profit. AI Trading Software is programmed to adapt to the current
            market conditions as it executes trades on both sides of the market 24/7.
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

        <div className="ai-image">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="lottie-animation"
          />
        </div>
      </div>
    );
  };

  export default AITradingRobot;
