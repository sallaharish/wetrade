import React, { useState } from 'react';
import './Navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';    
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "FAQ", to: "/faq" },
    { label: "Pricing", to: "/pricing" },
    { label: "Registration", to: "/registration" },
    { label: "Support", to: "/support" },
    { label: "Contact", to: "/contact" },
  ];
  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.aitradingsoftware.ae/assets/img/ai-trading-logo-white.png" alt="Logo" className="logo" /> {/* Replace with your logo */}
        {/* <div className="contact-info">
            <div className='contact-header'><PhoneIcon sx={{ color: 'white' }}/> +971 50 820 0684</div>
            <div className='contact-header'><EmailIcon sx={{ color: 'white  ' }}/> support@aitradingsoftware.ae</div>
        </div> */}
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
      <img src="https://www.aitradingsoftware.ae/assets/img/ai-trading-logo-white.png" alt="Logo" className="logo logo-sidebar" />
        <span className='close-icon-bg' onClick={() => setIsOpen(!isOpen)}>
<CloseIcon/>
        </span>
        {navLinks.map((link, index) => (
  <NavLink
    key={index}
    to={link.to}
    className={({ isActive }) => isActive ? 'link active-link' : 'link'}
  >
    {link.label}
  </NavLink>
))}

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
