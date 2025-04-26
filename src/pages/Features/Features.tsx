import React from "react";
import "./Features.css";
import { FaCog, FaChartLine, FaBook, FaCheckCircle } from "react-icons/fa";
import Grid from "@mui/joy/Grid";
import Navbar from "../../components/Navbar/Navbar";

import bgVideo1 from  "../../Assets/videos/background1.mp4"
const features = [
  {
    icon: <FaCog size={32} color="#4caf50" />,
    title: "Fully Automated Trading Software",
    description:
      "Trade 24/7, effortlessly. The complete Automated Trading Software is ready for quick-installation. Just double-click the wizard and let it do the rest!",
  },
  {
    icon: <FaBook size={32} color="#ba68c8" />,
    title: "Quick Strategy Guide",
    description:
      "A detailed guide to walk you through setup and techniques to maximize AI Trading Software performance.",
  },
  {
    icon: <FaCheckCircle size={32} color="#ba68c8" />,
    title: "Real-Time Alerts and Notifications",
    description:
      "Stay updated daily on your portfolio's performance with real-time alerts.",
  },
  {
    icon: <FaChartLine size={32} color="#4caf50" />,
    title: "Optimal Money-Management",
    description:
      "Tracks your trading positions and closes them at optimal profit levels.",
  },
  {
    icon: <FaChartLine size={32} color="#4caf50" />,
    title: "24/7 Quick Response Support",
    description:
      "Support desk is available 24/7, often responding within one business day.",
  },
];

const Features = () => {
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

    <section className="features-section">
      <h2 className="section-title">Features Of AI Trading Software</h2>
      <Grid container columns={12} spacing={2}>
        {features.map((feature, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={6} // Two cards per row at >= md breakpoint
          >
            <div className="featurecard">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
    </div>
  );
};

export default Features;
