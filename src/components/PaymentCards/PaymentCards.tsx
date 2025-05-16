import React from "react";
import "./PaymentCards.css";
import logo from "../../Assets/images/logo.png"; 
import UPI from "../../Assets/images/upi.png"
import STRIPE from "../../Assets/images/stripe.png"
import GPAY from "../../Assets/images/g pay.png"
import Cards from "../../Assets/images/cards.png"
import BINANCE from "../../Assets/images/binance.png"

const cards = [
  { label: "UPI", image: UPI },
  { label: "Bank Cards", image: Cards },
  { label: "GPAY", image: GPAY },
  { label: "STRIPE", image: STRIPE },
  { label: "Binance Pay", image: BINANCE },
 
];

const PaymentCards = () => {
  return (
    <div className="payment-container">

    <h1>
          local payment options
        </h1>
    <div className="cards-container">
        
      {cards.map((card, index) => (
        <div className={`card card-${index}`} key={index}>
          <img src={card.image} alt={card.label} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default PaymentCards;
