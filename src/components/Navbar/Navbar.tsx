// Navbar.tsx
import React, { useState } from "react";
import "./Navbar.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useLocation } from "react-router-dom";
import { getCardImage, getHoverCardImage } from "../../helpers/constants";
import logo from "../../Assets/images/logo.png";


const Navbar = ({ onGetStartedClick }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    {
      label: "Features",
      submenu: [
        { label: "Fully Automated Trading Software", to: "/features" },
        { label: "Quick Strategy Guide", to: "/features" },
        { label: "Real-Time Alerts and Notifications", to: "/features" },
        { label: "Optimal Money-Management", to: "/features" },
        { label: "24/7 Quick Response Support", to: "/features" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Beginner's Guide", to: "/resources/docs" },
        { label: "Market Insights & Analysis", to: "/resources/tutorials" },
        { label: "Back test of Trading Strategy", to: "/resources/docs" },
        { label: "Blog", to: "/resources/blog" },
        { label: "About", to: "/resources/docs" },
      ],
    },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <img src={logo} alt="Logo" className="logo logo-sidebar" />
        <span className="close-icon-bg" onClick={closeMenu}>
          <CloseIcon />
        </span>

        {navLinks.map((link, index) => (
          <div className="nav-item" key={index}>
            {!link.submenu ? (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
                onMouseEnter={() => !isOpen && setHoveredDropdown(null)}
              >
                {link.label}
              </NavLink>
            ) : (
              <div
                className="dropdown"
                onMouseEnter={() => !isOpen && setHoveredDropdown(link.label)}
              >
                <span
                  className={
                    link.submenu.some((s) =>
                      location.pathname.startsWith(s.to)
                    )
                      ? "link active-link"
                      : "link"
                  }
                  onClick={() => isOpen && toggleMobileDropdown(link.label)}
                >
                  {link.label}
                  <KeyboardArrowDownIcon
                    style={{ marginLeft: "5px", fontSize: "18px" }}
                  />
                </span>

                {(hoveredDropdown === link.label ||
                  mobileDropdown === link.label) && (
                  <div
                    className={`mega-menu ${isOpen ? "mobile" : ""}`}
                    onMouseLeave={() => !isOpen && setHoveredDropdown(null)}
                  >
                    <div className="menu-items">
                      {link.submenu.map((sublink, subIndex) => (
                        
                        <NavLink key={subIndex} to={sublink.to}   id={`card-${subIndex}`} className="menu-card" style={{
                          backgroundImage: `url(${getCardImage(sublink.label)})`,
                          backgroundSize: "105%",
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                        onMouseEnter={() => console.log(getCardImage(sublink.label),"lll")}  
                        onMouseOver={() => {
                          console.log(getHoverCardImage(sublink.label)); 
                          const background = getHoverCardImage(sublink.label);
                          const element = document.getElementById(`card-${subIndex}`);
                          if (element) {
                            element.style.backgroundImage = `url(${background})`;
                            element.style.backgroundSize = '105%'; 
                            element.style.backgroundPosition = 'center'; 
                            element.style.backgroundRepeat = 'no-repeat'; 
                          }
                        }}

                        onMouseLeave={() => {
                          const originalBackground = getCardImage(sublink.label);
                          const element = document.getElementById(`card-${subIndex}`);
                          if (element) {
                            element.style.backgroundImage = `url(${originalBackground})`;
                            element.style.backgroundSize = '105%';
                            element.style.backgroundPosition = 'center';
                            element.style.backgroundRepeat = 'no-repeat';
                          }
                        }}
                      
                        >
                          <div className="card-content">
                            <h4>{sublink.label}</h4>
                          </div>
                         
                        </NavLink>
                      ))}
                    </div>
                    <NavLink to={link.to || "#"} className="explore-link">
                      Explore all {link.label.toLowerCase()}
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        <button className="get-started" onClick={onGetStartedClick}>
          GET STARTED
        </button>
      </div>

      {isOpen && <div className="backdrop" onClick={closeMenu} />}

      <div
        className={`hamburger ${isOpen ? "hide" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
