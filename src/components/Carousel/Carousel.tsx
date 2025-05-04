import React, { useState, useEffect } from "react";
import "./Carousel.css";
import mainslide1 from "../../Assets/images/Main Slide 1.mp4";
import mainslide2 from "../../Assets/images/Main Slide 2.jpg";
import mainslide3 from "../../Assets/images/Main Slide 3.mp4";
import mainslide4 from "../../Assets/images/Main Slide 4.jpg";
import mainslide5 from "../../Assets/images/Main Slide 5.mp4";
import { Button } from "@mui/material";

const slides = [
  
  {
    type: "image",
    src: mainslide2,
    content: "Automated Intelligence. Consistent Results.",
  },
  { type: "video", src: mainslide1, content: "Smart Trading, Powered by AI." },
  {
    type: "video",
    src: mainslide3,
    content: "Let the AI Work While You Sleep.",
  },
  { type: "image", src: mainslide4, content: "Profit on Autopilot." },
  {
    type: "video",
    src: mainslide5,
    content: "Master the Market—Let AI Trade Crypto for You.",
  },
];

const Carousel = ({ setShowForm }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % length);
  //     }, 5000);
  //     return () => clearInterval(timer);
  //   }, [length]);

  const goToSlide = (index: number) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? "active" : ""}`}
          key={index}
        >
          <div className="carousel-content">
            <h2 style={{ textAlign: "start" }}>{slide.content}</h2>

            <Button
              variant="contained"
              color="primary"
            
              className="carousel-btn" 
              onClick={() => setShowForm(true)}
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                padding: "10px 24px",
                fontWeight: "600",
                fontSize: "16px",
                height:"50px",
                width:"250px",
                backgroundColor: "#1976d2", // Customize as needed
                "&:hover": {
                  backgroundColor: "#115293",
                },
              }}
            >
              Download AI Bot
            </Button>
          </div>
          {slide.type === "video" ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              className="carousel-media"
            />
          ) : (
            <img
              src={slide.src}
              alt={`slide-${index}`}
              className="carousel-media"
            />
          )}
        </div>
      ))}

      <div className="carousel-controls">
        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
          &#10095;
        </span>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
