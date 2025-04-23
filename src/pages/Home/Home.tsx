  import React from 'react'
  import FeaturesGrid from '../../components/FeaturesGrid/FeaturesGrid'
  import AITradingRobot from '../../components/AITradingRobot/AITradingRobot'
  import FaqSection from '../../components/FaqSection/FaqSection'
  import bgVideo1 from  "../../Assets/videos/backround1.mp4"
  import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import AITradingSecondRobot from '../../components/AITradingRobot/AITradingSecondRobot'

  function  Home() {
    return (
      <div>
      
      <div className="home-wrapper">
        {/* Video Section */}
        <section className="hero-section">
          <Navbar/>
          <video autoPlay muted loop className="background-video">
            <source src={bgVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Floating Form */}
          <div className="form-container">
            <h2>Automatic Bot Download</h2>
            <form>
              <input type="text" placeholder="Enter Your Name" />
              <input type="email" placeholder="Enter Your Email" />
              <input type="tel" placeholder="Enter Your Phone No" />
              <input type="text" placeholder="Enter Your City Name" />
              {/* <div className="recaptcha-placeholder">[reCAPTCHA]</div>   */}
              <button type="submit">Download AI Robot</button>
            </form>
          </div>
        </section>

        {/* Cards Section */}
        <section className="cards-section">
        <FeaturesGrid/>  
        </section>
      </div>


    
          <AITradingRobot/>
          <AITradingSecondRobot/>
        <FaqSection/>
      
      
      </div>
    ) 
  }

  export default Home
