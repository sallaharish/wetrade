import React, { useState, useEffect } from 'react';
import './Carousel.css';
import video1 from '../../Assets/videos/background1.mp4';
import video2 from '../../Assets/videos/background2.mp4';
import image1 from '../../Assets/images/slide1.jpg';
import image2 from '../../Assets/images/slide2.jpg';
import image3 from '../../Assets/images/slide3.jpg';

const slides = [
  { type: 'image', src: image1, content: 'Trade smarter, not harder – seize the market opportunities with confidence and precision' },
  { type: 'video', src: video1, content: 'Slide 2 Content' },
  { type: 'image', src: image2, content: 'Slide 3 Content' },
  { type: 'video', src: video2, content: 'Slide 4 Content' },
  { type: 'image', src: image3, content: 'Slide 5 Content' },
];

const Carousel = () => {
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
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <div className="carousel-content">
            <h2 style={{textAlign:"start"}}>{slide.content}</h2>
            {index === 0 && (  // Show button only on the first slide
              <button className="carousel-btn" onClick={() => alert('Button clicked!')}>
                Show More
              </button>)}
          </div>
          {slide.type === 'video' ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              className="carousel-media"
            />
          ) : (
            <img src={slide.src} alt={`slide-${index}`} className="carousel-media" />
          )}
        </div>
      ))}

      <div className="carousel-controls">
        <span className="prev" onClick={prevSlide}>&#10094;</span>
        <span className="next" onClick={nextSlide}>&#10095;</span>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
