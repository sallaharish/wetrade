import React, { useState } from 'react';
import './FaqPage.css'; // Reference to the CSS I’ll include below
import Navbar from '../Navbar/Navbar';
import bgVideo1 from  "../../Assets/videos/background1.mp4"
import PopupModal from '../PopupModal/PopupModal';
import { Alert, Snackbar } from '@mui/material';
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is AI Auto Trading Software?",
    answer: "AI Auto Trading Software uses artificial intelligence and machine learning to analyze market data, identify patterns, and automatically execute trades based on predefined strategies—without manual intervention."
  },
  {
    question: "How is AI different from regular automated trading?",
    answer: "Traditional auto trading uses fixed rules, while AI-based systems can learn from market behavior, adapt over time, and make smarter decisions based on historical and real-time data."
  },
  {
    question: "Do I need trading experience to use this software?",
    answer: "No. Our platform is designed for both beginners and experienced traders. You can choose from prebuilt strategies, run simulations, and access tutorials to get started easily."
  },
  {
    question: "Can I create my own trading strategy?",
    answer: "Yes. Users can fully customize trading strategies or use the built-in strategy builder to define parameters such as entry/exit points, risk levels, and asset classes—without any coding."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is a top priority. We use encrypted connections, two-factor authentication (2FA), and broker-level integration to protect your data and funds."
  },
  {
    question: "Can I test strategies before trading with real money?",
    answer: "Absolutely. The platform includes a backtesting feature to simulate performance using historical data, as well as a demo trading mode to practice with virtual funds."
  },
  {
    question: "Does the software work 24/7?",
    answer: "Yes. Once activated, your trading bot runs continuously—even when you're offline—ensuring you never miss a market opportunity."
  },
  {
    question: "Can I control risk levels?",
    answer: "Yes. You can set risk management tools such as stop-loss, take-profit, daily limits, and capital exposure to protect your investment."
  },
  {
    question: "Which brokers are supported?",
    answer: "We support integration with leading global brokers. A full list is available on the platform’s settings page or upon request."
  },
  {
    question: "How much does the software cost?",
    answer: "We offer several pricing plans to suit different trader profiles—from free demo accounts to premium packages with advanced features. [View Pricing Plans]"
  },
  {
    question: "Is customer support available?",
    answer: "Yes. Our expert support team is available 24/7 via live chat, email, and phone to assist you with setup, strategy creation, or troubleshooting."
  },
 
];

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const handleFormSubmitSuccess = () => {
      setSnackbarMessage('Form submitted successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    };
  
    const handleFormSubmitError = () => {
      setSnackbarMessage('There was an issue submitting the form.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    };
  
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      const form = e.currentTarget;
      const formData = new FormData(form);
      const formObject: any = Object.fromEntries(formData.entries());
      const urlEncodedData = new URLSearchParams(formObject).toString();
    
      fetch("https://formspree.io/f/meogawpp", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlEncodedData,
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          handleFormSubmitSuccess()
          form.reset();
        })
        .catch(error => {
          console.error("Error:", error);
         handleFormSubmitError();
        });
    };
    

  return (
    <div>
       <section className="hero-section-features">
                <Navbar />
                <video autoPlay muted loop className="background-video-features">
                  <source src={bgVideo1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
      
                {/* Floating Form */}
                
              </section>
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
      <form className="faq-form" onSubmit={handleSubmit}>
        <h3 className="text-xl font-semibold mb-3">Have another question?</h3>
        <input type="text" placeholder="Your Name" required  name='name'/>
        <input type="email" placeholder="Your Email" required  name='email'/>
        <textarea rows={4} placeholder="Your Question" required  name='question'/>
        <button type="submit">Submit Question</button>
      </form>
    </div>
    {showForm && <PopupModal open={showForm} setOpen={setShowForm} onSubmitSuccess={handleFormSubmitSuccess} onSubmitError={handleFormSubmitError} />}
      <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: 'top',   
              horizontal: 'right',
            }}
          >
            <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
    </div>
  );
};

export default Faqs;
