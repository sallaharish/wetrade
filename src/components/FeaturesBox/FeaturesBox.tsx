import React from "react";
import "./FeaturesBox.css";

import featureImg from "../../Assets/images/Zero Monitoring.jpg";

const cards = [
  {
    title: "Wake Up and Smell the Coffee",
    category: "FOOD",
    price: "$0.99",
    image: featureImg,
    className: "wide",
  },
  {
    title: "The Brand New NASA Office",
    category: "ARCHITECTURE",
    price: "$1.99",
    image: featureImg,
    className: "tall",
  },
  {
    title: "Experience the Saharan Sands",
    category: "TRAVEL",
    price: "$2.25",
    image: featureImg,
    className: "",
  },
  {
    title: "9 Air-Cleaning Plants Your Home Needs",
    category: "INTERIOR",
    price: "$0.49",
    image: featureImg,
    className: "wide",
  },
  {
    title: "One Month Sugar Detox",
    category: "HEALTH",
    price: "$0.99",
    image: featureImg,
    className: "",
  },
  {
    title: "Shooting Minimal Instagram Photos",
    category: "PHOTOGRAPHY",
    price: "$2.25",
    image: featureImg,
    className: "tall",
  },
  {
    title: "Tech Trends 2025",
    category: "TECH",
    price: "$1.99",
    image: featureImg,
    className: "",
  },
  {
    title: "Ultimate Guide to Freelancing",
    category: "BUSINESS",
    price: "$1.49",
    image: featureImg,
    className: "wide",
  },
  {
    title: "Explore Nordic Cuisine",
    category: "FOOD",
    price: "$1.75",
    image: featureImg,
    className: "",
  },
  {
    title: "Designing Calm Interiors",
    category: "INTERIOR",
    price: "$2.00",
    image: featureImg,
    className: "",
  },
  {
    title: "Deep Dive into CSS Grid",
    category: "DEVELOPMENT",
    price: "$0.89",
    image: featureImg,
    className: "wide",
  },
  {
    title: "Photowalk in Tokyo",
    category: "TRAVEL",
    price: "$2.99",
    image: featureImg,
    className: "",
  },
  {
    title: "Wellness at Work",
    category: "HEALTH",
    price: "$0.59",
    image: featureImg,
    className: "",
  },
  {
    title: "Meditation for Beginners",
    category: "WELLNESS",
    price: "$0.99",
    image: featureImg,
    className: "",
  },
];

const FeaturesBox = () => {
  return (
    <div className="grid-container">
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-body">
            <div className="card-category">{card.category}</div>
            <div className="card-title">{card.title}</div>
            <button className="card-button">Read for {card.price}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesBox;
