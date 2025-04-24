import React, { useState } from "react";
import "./Navbar.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { getCardImage, getDescription } from "../../helpers/constants";
import logo from "../../Assets/images/logo.png"
const Navbar = ({ onGetStartedClick }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const navLinks = [
    { label: "Home", to: "/" },
    {
      label: "Features",
      submenu: [
        { label: "Fully Automated Trading Software", to: "/features/toolkits" },
        { label: "Quick Strategy Guide", to: "/features/screeners" },
        {
          label: "Real-Time Alerts and Notifications",
          to: "/features/backtesters",
        },
        { label: "Optimal Money-Management", to: "/features/ai-backtesting" },
        {
          label: "24/7 Quick Response Support",
          to: "/features/ai-backtesting",
        },
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

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <img
          src={logo}
          alt="Logo"
          className="logo logo-sidebar"
        />
        <span className="close-icon-bg" onClick={() => setIsOpen(!isOpen)}>
          <CloseIcon />
        </span>

        {navLinks.map((link: any, index: number) => (
          <div className="nav-item" key={index}>
            {!link.submenu ? (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <div
                className="dropdown"
                onMouseEnter={() => setHoveredDropdown(link.label)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <span className="link dropdown-toggle">
                  {link.label}
                  <KeyboardArrowDownIcon
                    style={{ marginLeft: "5px", fontSize: "18px" }}
                  />
                </span>

                {hoveredDropdown === link.label && (
                  <div className="mega-menu">
                    <div className="menu-items">
                      {link.submenu.map((sublink: any, subIndex: any) => (
                        <NavLink
                          key={subIndex}
                          to={sublink.to}
                          className="menu-card"
                        >
                          <div className="card-content">
                            <h4>{sublink.label}</h4>
                            <p>
                              {getDescription(sublink.label)
                                .split(" ")
                                .slice(0, 15)
                                .join(" ")}
                              {getDescription(sublink.label).split(" ").length >
                                25 && "..."}
                            </p>
                          </div>
                          <div
                            className="card-bg"
                            style={{
                              backgroundImage: `url(${getCardImage(
                                sublink.label
                              )})`,
                            }}
                          />
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

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}

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
