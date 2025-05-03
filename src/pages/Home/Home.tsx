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
import Experience from '../../components/Experience/Experience';
import PopupModal from '../../components/PopupModal/PopupModal';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import PhoneSection from '../../components/PhoneHolding/PhoneHolding';
import Testimonials from '../../components/Testimonials/Testimonials';
import AutoSlider from '../../components/AutoSlider/Autoslider';
import TradingTools from '../../components/TradingTool/TradingTools';
import SoftwareWorks from '../../components/SoftwareWorks/SoftwareWorks';
import GridCard from '../../components/GridCard/GridCard';

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="home-wrapper">
        <section className="hero-section">
          <Navbar onGetStartedClick={() => setShowForm(true)} />
          <Carousel setShowForm={setShowForm}/>

         
        </section>

        <section className="cards-section">
          <CarouselSmallCard/>
        </section>
        {/* <TradingToolsSection/>   */}
        <Experience/>
        <HeroSlider/>
        <GridCard/>
        <PhoneSection/>
        {/* <Testimonials/> */}
      
        {/* <TradingTools/> */}
        <SoftwareWorks/>
      
        

        {/* <AITradingRobot />
        <AITradingSecondRobot /> */}
        
        <PricingPlans setShowForm={setShowForm}/>
        <FaqSection />
        <AutoSlider/>
      </div>
      {showForm && <PopupModal open={showForm} setOpen={setShowForm}/>}
    </div>
  );
}

export default Home;
