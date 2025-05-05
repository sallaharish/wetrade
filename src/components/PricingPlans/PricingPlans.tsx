import React, { useState } from "react";
import "./PricingPlans.css";
import CheckIcon from "../../Icons/CheckIcon";
import ChooseUsModal from "../ChooseUsModal/ChooseUsModal";

// Add image class names for the cards
const imageClasses = ["img-top-right-1", "img-top-right-2", "img-top-right-3"];

// Pricing plans data
const plans = [
  {
    title: "Currency Trading Software",
    price: "$24.99",
    yearly: "$299.88 / yr",
    save: "You save 35% a year",
    features: [
      "Real-Time Market Analysis",
      "Auto Buy/Sell Signals ",
      "News Filter Integration ",
      "Support for MT4/MT5 Platforms ",
      "24/7 Trading Capabilities ",
      "Customizable Risk Management ",
      "Backtesting Feature ",
      "User-Friendly Dashboard ",
      "Low Latency Execution ",
    ],
    colorClass: "essential",
  },
  {
    title: "Gold Trading Software ",
    price: "$39.99",
    yearly: "$479.88 / yr",
    save: "You save 40% a year",
    features: [
      "Optimized for Volatile Markets ",
      "Real-Time Price Tracking ",
      "Smart Trading Bot ",
      "Advanced Risk Control ",
      "Multi-Timeframe Strategy Support ",
      "MT4/MT5 Integration ",
      "News and Event Alert Filters ",
      "Live Support and Updates ",
      "Minimal Drawdown Strategy ",
      "One-Time Payment, Lifetime Use ",
    ],
    colorClass: "premium",
  },
  {
    title: "Crypto Trading Software ",
    price: "$59.99",
    yearly: "$719.88 / yr",
    save: "You save 50% a year",
    features: [
      "24/7 Crypto Market Coverage ",
      "Volatility-Optimized Signals ",
      "AI-Based Trade Logic",
      "Auto-Recovery Feature ",
      "Supports All Major Coins ",
      "No Coding Required ",
      "Cold Wallet Trade Alerts ",
      "Low Fees & High Returns ",
      "Secure and Encrypted ",
      "Daily Strategy Updates ",
    ],
    colorClass: "ultimate",
  },
];

// Reasons for "Why Choose Us?" per plan
const chooseUs = [
  {
    id: 1,
    text: "Because our system blends AI-driven precision with market fundamentals, helping both new and experienced traders make confident currency trades.",
  },
  {
    id: 2,
    text: "Because we offer a specialized gold-focused engine with tailored algorithms that outperform generic bots.",
  },
  {
    id: 3,
    text: "Because we deliver high-tech, safe, and performance-tuned crypto tools that outperform manual trading 90% of the time.",
  },
];

const PricingPlans = ({ setShowForm }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentReason, setCurrentReason] = useState(0); // Track the index

  const handleWhyChooseUsClick = (index: number) => {
    setCurrentReason(index);
    setOpenModal(true);
  };

  return (
    <div>
      <h1 className="pricing-heading">Plans for every style of trading</h1>
      <div className="pricing-container">
        {plans.map((plan, index) => {
          const imageClass = imageClasses[index % imageClasses.length];
          return (
            <div key={index} className={`card ${plan.colorClass}`}>
              {/* Top-right image */}
              <div className={`top-right-image ${imageClass}`}></div>

              <h3>{plan.title}</h3>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="subscribe-btn" onClick={() => setShowForm(true)}>
                Subscribe →
              </button>
              <p
                className="guarantee"
                onClick={() => handleWhyChooseUsClick(index)}
                style={{ cursor: "pointer" }}
              >
                Why Choose Us?
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal with dynamic reason */}
      {openModal && (
        <ChooseUsModal
          open={openModal}
          setOpen={setOpenModal}
          reason={chooseUs[currentReason]?.text}
        />
      )}
    </div>
  );
};

export default PricingPlans;
