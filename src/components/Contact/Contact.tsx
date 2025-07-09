import React, { useState } from 'react';
import './Contact.css';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import bgVideo1 from  "../../Assets/videos/background1.mp4"
import { Alert, Snackbar } from '@mui/material';
import PopupModal from '../PopupModal/PopupModal';
const ContactUs = () => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formObject: any = Object.fromEntries(formData.entries());
    const urlEncodedData = new URLSearchParams(formObject).toString();
  
    fetch("https://formspree.io/f/mrbqlvao", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlEncodedData,
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        handleFormSubmitSuccess()
        form.reset();
      })
      .catch(error => {
        console.error("Error:", error);
       handleFormSubmitError();
      });
  };
  
  return (
    <div>
          <section className="hero-section-features">
          <Navbar onGetStartedClick={() => setShowForm(true)} />
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
            <p>Support@wtstechnologies.ae</p>
          </div>
        </div>

        <div className="info-item">
          <MdPhone className="icon" />
          <div>
            <h4>Phone</h4>
            <p>+971585686784</p>
          </div>
        </div>

        <div className="info-item">
          <MdLocationOn className="icon" />
          <div>
            <h4>Location</h4>
            <p>M02,Titanium Building,Dubai UAE.</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <input type="text" placeholder="Your Name" required  name="name"/>
          <input type="email" placeholder="Your Email" required  name="email"/>
          <textarea placeholder="Your Message" rows={5} required name="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
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
  );
};

export default ContactUs;
