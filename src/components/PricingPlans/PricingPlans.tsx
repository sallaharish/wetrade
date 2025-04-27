import React from "react";
import "./PricingPlans.css";
import CheckIcon from "../../Icons/CheckIcon";

const plans = [
  {
    title: "Essential",
    price: "$24.99",
    yearly: "$299.88 / yr",
    save: "You save 35% a year",
    features: [
      "Price Action Concepts toolkit + screener",
      "Community access w/ price action alerts",
      "Custom Alert Creator for PAC toolkit",
      "Alert Scripting for Price Action Concepts",
      "24/7 support & active toolkit updates",
    ],
    colorClass: "essential",
  },
  {
    title: "Premium",
    price: "$39.99",
    yearly: "$479.88 / yr",
    save: "You save 40% a year",
    features: [
      "All features from Essential, plus:",
      "Signals & Overlays toolkit + screener",
      "Oscillator Matrix toolkit + screener",
      "Full scanner alerts & user strategies",
      "Custom Alert Creator for all 3 toolkits",
      "Alert Scripting functionality for all 3 toolkits",
    ],
    colorClass: "premium",
  },
  {
    title: "Ultimate",
    price: "$59.99",
    yearly: "$719.88 / yr",
    save: "You save 50% a year",
    features: [
      "All features from Premium, plus:",
      "AI Backtesting Assistant platform access",
      "Full suite w/ 3 Backtesters on TradingView",
      "Deep optimization engine for signal settings",
      "Scanners, bots, & backtests shared weekly",
      "Priority 24/7 support & active product updates",
    ],
    colorClass: "ultimate",
  },
];

const PricingPlans = () => {
  return (
    <div>
      <h1 className="pricing-heading">Plans for every style of trading</h1>
    <div className="pricing-container">
     
      {plans.map((plan, index) => (
        <div key={index} className={`card ${plan.colorClass}`}>
          <div className="plan-top">
            <h2>{plan.title}</h2>
            <p className="price">
              {plan.price} <span>/ mo</span>
            </p>
            <p className="yearly">{plan.yearly}</p>
            <p className="save">{plan.save}</p>
          </div>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="subscribe-btn">Subscribe →</button>
          <p className="guarantee">30-day money-back guarantee</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PricingPlans;
