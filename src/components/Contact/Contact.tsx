import React from 'react';
import './Contact.css';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import bgVideo1 from  "../../Assets/videos/background1.mp4"
const ContactUs = () => {
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
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We're happy to hear from you. Reach out anytime!</p>

        <div className="info-item">
          <MdEmail className="icon" />
          <div>
            <h4>Email</h4>
            <p>support@example.com</p>
          </div>
        </div>

        <div className="info-item">
          <MdPhone className="icon" />
          <div>
            <h4>Phone</h4>
            <p>+1 234 567 890</p>
          </div>
        </div>

        <div className="info-item">
          <MdLocationOn className="icon" />
          <div>
            <h4>Location</h4>
            <p>123 React Street, JS City, Webland</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
