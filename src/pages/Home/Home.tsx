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
import { Snackbar, Alert } from '@mui/material';
function Home() {
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
}

export default Home;
