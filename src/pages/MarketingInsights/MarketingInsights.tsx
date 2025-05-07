import React, { useState } from "react";
import "./MarketingInsights.css";
import { BarChart3, TrendingUp, Search, Globe } from "lucide-react";
import mainslide1 from "../../Assets/images/Main Slide 1.mp4";
import Navbar from "../../components/Navbar/Navbar";
import { Alert, Snackbar } from "@mui/material";
import PopupModal from "../../components/PopupModal/PopupModal";
const features = [
  {
    icon: <TrendingUp className="icon green" />,
    title: "Why Automated Trading Is Gaining Momentum",
    points: [
      "Increased Market Volatility",
      "Rise of Retail Investors",
      "Demand for Passive Income Streams",
      "Algorithmic Dominance",
      "24/7 Markets (e.g., Crypto)"
    ]
  },
  {
    icon: <Search className="icon blue" />,
    title: "How Our Software Delivers Smart Analysis",
    points: [
      "Real-Time Market Scanning",
      "Built-In Technical Indicators",
      "Risk & Trend Analysis",
      "Performance Analytics Dashboard"
    ]
  },
  {
    icon: <Globe className="icon purple" />,
    title: "Insights Across Markets",
    points: [
      "Crypto",
      "Forex",
      "Stocks & Indices",
      "Commodities"
    ]
  }
];

const MarketingInsights = () => {
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
    
  return (
    <>
    <div>
    <Navbar onGetStartedClick={() => setShowForm(true)}  />
    <div className="marketing-container">
      <div className="header">
        <h1 className="main-title">📈 Market Insights & Analysis</h1>
        <p className="subtitle">
          Stay Ahead of the Curve with Smart, Data-Driven Trading
        </p>
      </div>

      <div className="content-wrapper">
        <div className="video-section">
          <video className="video-player" autoPlay muted loop playsInline poster="/assets/market-thumb.jpg">
            <source src={mainslide1}  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-caption">
            <p>Experience real-time market scanning and strategy-based automation in action.</p>
            <p className="video-summary-text">
              Our Auto Trading Software doesn’t just execute trades—it helps you make informed decisions backed by real-time data and trend analysis.
            </p>
            <button className="cta-button">Ready to Trade Smarter?</button>
          </div>
        </div>

        <div className="features-section">
          {features.map((section, index) => (
            <div key={index} className="feature-card">
              <div className="feature-header">
                {section.icon}
                <h3 className="feature-title">{section.title}</h3>
              </div>
              <ul className="feature-list">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Smart Trading Technologies. All rights reserved.
        </p>
      </div>
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
    </>
  );
};

export default MarketingInsights;
