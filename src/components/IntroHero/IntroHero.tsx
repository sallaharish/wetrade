import React from 'react';
import './IntroHero.css';

const IntroHero = () => {
  return (
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
            <img src="/assets/icons/icon1.svg" alt="icon1" className="market-icon" />
            <p className="market-text">
              <strong>We're LuxAlgo</strong> — The world’s largest provider of trading indicators. Whether it’s
              through our free indicators, exclusive tools, or AI assistant, our mission is to give
              clarity to traders & investors.
            </p>
          </div>
          <div className="market-card">
            <img src="/assets/icons/icon2.svg" alt="icon2" className="market-icon" />
            <p className="market-text">
              In an industry that’s opaque and awash with false claims, we demystify markets.
              We don’t tease, mislead, or complicate — we come at our audience with a
              genuine desire to share what we know as developers & traders.
            </p>
          </div>
          <div className="market-card">
            <img src="/assets/icons/icon3.svg" alt="icon3" className="market-icon" />
            <p className="market-text">
              We aim to give you a clear read on the markets, insights at the highest level,
              and help you find your own edge.
            </p>
          </div>
          <div className="market-card">
            <img src="/assets/icons/icon4.svg" alt="icon4" className="market-icon" />
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
            <img src="/assets/icons/anomaly1.svg" alt="anomaly icon" className="anomaly-icon" />
            <p>
              Instead of promising success rates or acting like we have some magic black box,
              we took a stance against the decades old taint to the industry.
            </p>
          </div>
          <div className="anomaly-card">
            <img src="/assets/icons/anomaly2.svg" alt="anomaly icon" className="anomaly-icon" />
            <p>
              Since 2020, we've dedicated ourselves to providing the greatest tools possible to various charting platforms
              with our team of the most reputable script developers in the world.
            </p>
          </div>
          <div className="anomaly-card">
            <img src="/assets/icons/anomaly3.svg" alt="anomaly icon" className="anomaly-icon" />
            <p>
              Our efforts grew to massive achievements over the years, such as growing a following
              of 500,000+ on TradingView, the biggest on the platform.
            </p>
          </div>
          <div className="anomaly-card">
            <img src="/assets/icons/anomaly4.svg" alt="anomaly icon" className="anomaly-icon" />
            <p>
              We were then nominated by TradingView as Pine Script Wizard in 2024, the first & only company
              to make it into their hall of fame, honoring the consistent volume, quality, and utility of our indicators for traders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
