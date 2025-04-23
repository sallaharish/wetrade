import React from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'Do I need trading knowledge?',
    answer: 'No. The bot handles everything. You just check your earnings!',
    color: '#00ffa2',
  },
  {
    question: 'How do I know my trading amount is growing?',
    answer: 'Login with your credentials to check real-time growth insights.',
    color: '#57d6ff',
  },
  {
    question: 'Can I trade from my phone?',
    answer: 'Yes. You only need a smartphone with internet to manage your account.',
    color: '#ff66c4',
  },
  {
    question: 'Does the robot trade every day?',
    answer: 'It acts only under profitable conditions — buy/sell when the market is right.',
    color: '#ffa94d',
  },
  {
    question: 'Is customer support available?',
    answer: 'Yes, 24/7 multilingual support to assist you.',
    color: '#ffda6b',
  },
  {
    question: 'What are the fees involved?',
    answer: 'There are no hidden charges. Transparent commission structure applies.',
    color: '#82f3ff',
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-underline" />
      </div>
      <div className="faq-grid">
        {faqs.map((faq, idx) => (
          <div className="faq-card" key={idx}>
            <h4 style={{ color: faq.color }}>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="view-more-wrapper">
        <button className="view-more-btn">View More FAQs</button>
      </div>
    </section>
  );
};

export default FaqSection;
