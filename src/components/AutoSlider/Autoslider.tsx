import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Autoslider.css";

const testimonials = [
  {
    id: 1,
    text: "Honestly speaking this is the best forex program I have met so far...",
    name: "Hameedullah",
    location: "Dubai",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    text: "This program changed the way I trade completely. It's amazing!",
    name: "Rahul",
    location: "India",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 3,
    text: "I have tried many trading bots, but this one really delivers results.",
    name: "Sarah",
    location: "UK",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 4,
    text: "This platform is user-friendly and has helped me make smart trades.",
    name: "James",
    location: "USA",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 5,
    text: "A must-have for any serious trader!",
    name: "Linda",
    location: "Canada",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 6,
    text: "The results speak for themselves. I've made consistent profits.",
    name: "Ali",
    location: "Pakistan",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 7,
    text: "Simple interface with powerful tools. Highly recommend it.",
    name: "Tom",
    location: "Germany",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 8,
    text: "Customer support is very responsive and helpful.",
    name: "Julia",
    location: "Australia",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 9,
    text: "Their signals have increased my win rate tremendously.",
    name: "Victor",
    location: "Nigeria",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 10,
    text: "Real-time data and performance tracking – everything I need.",
    name: "Emily",
    location: "South Africa",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: 11,
    text: "Professional layout, and it works great on mobile too.",
    name: "Ahmed",
    location: "Egypt",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    id: 12,
    text: "I’ve never felt more confident placing trades.",
    name: "Grace",
    location: "Ireland",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 13,
    text: "Clean UI and excellent performance. Great job!",
    name: "Carlos",
    location: "Spain",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    id: 14,
    text: "This tool has helped me make smarter, data-driven decisions.",
    name: "Nina",
    location: "Brazil",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 15,
    text: "Perfect for beginners and pros alike.",
    name: "Daniel",
    location: "Mexico",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

const AutoSlider: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left"),
    onSwipedRight: () => console.log("Swiped right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="autoslider-container">
      <h2 className="slider-heading">Client Testimonials</h2>
      <p className="slider-subheading">What people are saying</p>

      <div
        className="slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...handlers}
      >
        <div className={`slider-track ${isPaused ? "paused" : ""}`}>
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-user">
                <img src={item.image} alt={item.name} className="user-img" />
                <div>
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-location">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
