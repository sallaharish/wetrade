import React, { useState } from 'react';
import './Home.css';
import FeaturesGrid from '../../components/CarouselSmallCard/CarouselSmallCard';
import AITradingRobot from '../../components/AITradingRobot/AITradingRobot';
import FaqSection from '../../components/FaqSection/FaqSection';
import Navbar from '../../components/Navbar/Navbar';
import AITradingSecondRobot from '../../components/AITradingRobot/AITradingSecondRobot';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import Carousel from '../../components/Carousel/Carousel';
import CarouselSmallCard from '../../components/CarouselSmallCard/CarouselSmallCard';
import TradingToolsSection from '../../components/TradingTool/TradingTools';

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="home-wrapper">
        <section className="hero-section">
          <Navbar onGetStartedClick={() => setShowForm(true)} />
          <Carousel />

          {showForm && (
            <div className="form-container">
              <h2>Automatic Bot Download</h2>
              <form>
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="tel" placeholder="Enter Your Phone No" />
                <input type="text" placeholder="Enter Your City Name" />
                <button type="submit">Download AI Robot</button>
              </form>
            </div>
          )}
        </section>

        <section className="cards-section">
          <CarouselSmallCard/>
        </section>
        {/* <TradingToolsSection/>   */}

        <AITradingRobot />
        <AITradingSecondRobot />
        <FaqSection />
        <PricingPlans />
      </div>
    </div>
  );
}

export default Home;
