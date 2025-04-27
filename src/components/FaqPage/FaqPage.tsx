import React, { useState } from 'react';
import './FaqPage.css'; // Reference to the CSS I’ll include below

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is LuxAlgo?",
    answer: "LuxAlgo is an advanced trading tool designed to improve your decision-making in the market using signals, indicators, and alerts."
  },
  {
    question: "How do I get started?",
    answer: "Sign up on the LuxAlgo website and connect it to your preferred trading platform to begin using its powerful analytics tools."
  },
  {
    question: "Is LuxAlgo beginner-friendly?",
    answer: "Absolutely. LuxAlgo is designed for both beginners and advanced traders with a clean UI and documentation."
  }
];

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2 className="text-center text-2xl font-bold mb-4">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'open' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className="faq-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}

      {/* Optional form at the end */}
      <form className="faq-form">
        <h3 className="text-xl font-semibold mb-3">Have another question?</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={4} placeholder="Your Question" required />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default Faqs;
