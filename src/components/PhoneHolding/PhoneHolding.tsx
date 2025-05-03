import React from 'react';
import './PhoneHolding.css';
import video from "../../Assets/videos/hand-WTS.mp4"

const PhoneSection: React.FC = () => {
  return (
    <section className="section-phone-container">
      <div className="section-phone-heading-wrapper">
        <h1 className="section-phone-title">Modern trading platform</h1>
      </div>

      <div className="section-phone-video-wrapper">
        <video
          className="section-phone-video"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default PhoneSection;
