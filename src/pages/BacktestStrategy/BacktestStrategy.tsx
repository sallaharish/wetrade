import React, { useState } from "react";
import "./BacktestStrategy.css";
import backtestImage from "../../Assets/images/backset.png";
import strategyVideo from "../../Assets/videos/strategy.mp4"
import Navbar from "../../components/Navbar/Navbar";
import { Alert, Snackbar } from "@mui/material";
import PopupModal from "../../components/PopupModal/PopupModal";

const BacktestStrategy = () => {
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
    <div className="backtest-container">
      <div className="header">
        <h1 className="main-title">📊 Backtest of Trading Strategy</h1>
        <p className="subtitle">Validate Before You Trade</p>
      </div>

      <div className="section">
        <div className="text-block">
          <p>
            Before deploying any strategy in live markets, it’s essential to understand how it would have performed under real historical conditions. Our Auto Trading Software includes a robust backtesting engine—empowering traders to optimize and refine strategies with confidence.
          </p>
        </div>
        <img src={backtestImage} alt="Backtest Illustration" className="image-block" />
      </div>

      <div className="section">
        <h2 className="section-title">What Is Backtesting?</h2>
        <p className="description">
          Backtesting is the process of testing a trading strategy using historical market data to evaluate its effectiveness. It allows traders to simulate performance over past conditions without risking actual capital.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Key Benefits</h2>
        <ul className="benefits-list">
          <li>📈 Data-Driven Confidence</li>
          <li>⚙️ Strategy Optimisation</li>
          <li>📊 Performance Metrics</li>
          <li>💡 Avoid Overfitting</li>
          <li>🧪 Test Before You Deploy</li>
        </ul>
      </div>

      <div className="video-section">
        <video className="demo-video" autoPlay muted loop playsInline poster="/assets/demo-thumb.jpg">
          <source src={strategyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">Test Smarter. Trade Better.<br />🎯 Validate strategies with precision | ⚡ Simulate with speed | 📈 Maximise your edge</p>
        <button className="demo-button">👉 View Demo Results</button>
      </div>

      <div className="section">
        <h2 className="section-title">Supported Markets for Backtesting</h2>
        <ul className="markets-list">
          <li>Cryptocurrencies (24/7 trading data)</li>
          <li>Forex Pairs (high liquidity & volatility)</li>
          <li>Stocks & ETFs</li>
          <li>Indices & Commodities</li>
        </ul>
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

export default BacktestStrategy;
