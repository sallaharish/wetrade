import React, { useState } from 'react';
import './Navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';    
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.aitradingsoftware.ae/assets/img/ai-trading-logo-white.png" alt="Logo" className="logo" /> {/* Replace with your logo */}
        <div className="contact-info">
            <div className='contact-header'><PhoneIcon sx={{ color: 'white' }}/> +971 50 820 0684</div>
            <div className='contact-header'><EmailIcon sx={{ color: 'white  ' }}/> support@aitradingsoftware.ae</div>
        </div>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
      <img src="https://www.aitradingsoftware.ae/assets/img/ai-trading-logo-white.png" alt="Logo" className="logo logo-sidebar" />
        <span className='close-icon-bg' onClick={() => setIsOpen(!isOpen)}>
<CloseIcon/>
        </span>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">FAQ</a>
        <a href="#">Pricing</a>
        <a href="#">Registration</a>
        <a href="#">Support</a>
        <a href="#">Contact</a>
        <button className="get-started">GET STARTED</button>
      </div>
      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}
      <div className={`hamburger ${isOpen ? 'hide' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
