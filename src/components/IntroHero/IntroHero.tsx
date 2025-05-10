import React, { useState } from 'react';
import './IntroHero.css';
import  logoimg from '../../Assets/images/logo.png';
import starimage from '../../Assets/images/starimage.jpg';
import searchIcon from '../../Assets/images/search icon.png';
import anothersearch from '../../Assets/images/anothersearch.png';
import searchthree from '../../Assets/images/search4.png';
import soft from '../../Assets/images/software image.png';
import one from '../../Assets/images/blog1.jpg';
import two from '../../Assets/images/blog5.jpg';
import three from '../../Assets/images/blogthree.jpg';
import four from '../../Assets/images/blog7.jpg'
import Navbar from '../Navbar/Navbar';
import { Alert, Snackbar } from '@mui/material';
import PopupModal from '../PopupModal/PopupModal';

const IntroHero = () => {
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
     <Navbar onGetStartedClick={() => setShowForm(true)}  />
    <section className="intro-hero-wrapper">
      {/* Hero Section */}
      <div className="intro-hero-content">
        <p className="intro-subtitle">ABOUT</p>
        <h1 className="intro-title">
          The leader <br />
          <span className="intro-highlight">in market analysis</span>
        </h1>
        <p className="intro-description">
          Learn about why we do what we do and how it all works.
        </p>
      </div>

      {/* Markets Illuminated Section */}
      <div className="market-section">
        <h2 className="market-heading">Markets, illuminated</h2>
        <div className="market-grid">
          <div className="market-card">
            <img src={logoimg} alt="icon1" className="market-icon" />
            <p className="market-text">
              <strong>We're We trade</strong> — The world’s largest provider of trading indicators. Whether it’s
              through our free indicators, exclusive tools, or AI assistant, our mission is to give
              clarity to traders & investors.
            </p>
          </div>
          <div className="market-card">
            <img src={starimage } alt="icon2" className="market-icon" />
            <p className="market-text">
              In an industry that’s opaque and awash with false claims, we demystify markets.
              We don’t tease, mislead, or complicate — we come at our audience with a
              genuine desire to share what we know as developers & traders.
            </p>
          </div>
          <div className="market-card">
            <img src={searchthree} alt="icon3" className="market-icon" />
            <p className="market-text">
              We aim to give you a clear read on the markets, insights at the highest level,
              and help you find your own edge.
            </p>
          </div>
          <div className="market-card">
            <img src={soft} alt="icon4" className="market-icon" />
            <p className="market-text">
              We open-source 95% of what we do; hundreds of indicators, free for anyone to
              use and improve, while saving the best for our subscribers who support our work the most.
            </p>
          </div>
        </div>
      </div>

      {/* Anomaly Section */}
      <div className="anomaly-section">
        <div className="anomaly-header">
          <h2 className="anomaly-title">Trading's biggest anomaly</h2>
          <p className="anomaly-subtitle">
            Our contributive approach is how we became the largest brand for trading software plug-ins & scripts.
          </p>
        </div>

        <div className="anomaly-grid">
          <div className="anomaly-card">
            <img src={one} alt="anomaly icon" className="anomaly-icon" />
            <p>
              Instead of promising success rates or acting like we have some magic black box,
              we took a stance against the decades old taint to the industry.
            </p>
          </div>
          <div className="anomaly-card">
            <img src={two} alt="anomaly icon" className="anomaly-icon" />
            <p>
              Since 2020, we've dedicated ourselves to providing the greatest tools possible to various charting platforms
              with our team of the most reputable script developers in the world.
            </p>
          </div>
          <div className="anomaly-card">
            <img src={three} alt="anomaly icon" className="anomaly-icon" />
            <p>
              Our efforts grew to massive achievements over the years, such as growing a following
              of 500,000+ on TradingView, the biggest on the platform.
            </p>
          </div>
          <div className="anomaly-card">
            <img src={four} alt="anomaly icon" className="anomaly-icon" />
            <p>
              We were then nominated by TradingView as Pine Script Wizard in 2024, the first & only company
              to make it into their hall of fame, honoring the consistent volume, quality, and utility of our indicators for traders.
            </p>
          </div>
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
    </section>
    </>
  );
};

export default IntroHero;
