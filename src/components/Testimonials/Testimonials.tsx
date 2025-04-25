import React, { useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  text: string;
  name: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Honestly speaking this is the best forex program I have met so far. I have more than happy to be using this guide because for sure it provides exactly what I was expecting and even more.",
    name: "Hameedullah",
    location: "Dubai",
    image: "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
  },
  {
    text: "This program changed the way I trade. The guidance and the tools provided are top-notch and easy to follow.",
    name: "Rahul",
    location: "India",
    image: "https://media.istockphoto.com/id/671353048/photo/were-making-some-huge-strides-in-the-corporate-world.jpg?s=612x612&w=0&k=20&c=FOLFZO2V5ZqcTMcbxh9Pd8y6ykdlkqirxh713KmTL-M=",
  },
  {
    text: "I have tried many trading bots, but this one stands out due to its consistency and reliable support.",
    name: "Sarah",
    location: "UK",
    image: "https://img.freepik.com/free-photo/man-having-video-call-with-his-family_23-2149120895.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <h2 className="heading">Clients Testimonials</h2>
      <p className="subheading">What People Are Saying.</p>
      <div className="indicator"></div>

      <div className="testimonial-box">
        {/* <div className="quote-icon"></div> */}
        <p className="testimonial-text">{current.text}</p>
        <div className="user-info">
          <img src={current.image} alt={current.name} className="user-img" />
          <div>
            <h4 className="user-name">{current.name}</h4>
            <p className="user-location">{current.location}</p>
          </div>
        </div>
        <div className="pagination">
          <button className="arrow" onClick={handlePrev}>←</button>
          <div className="avatars">
            {testimonials.map((t, index) => (
              <img
                key={index}
                src={t.image}
                className={`avatar ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="arrow" onClick={handleNext}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
