// GridCard.tsx
import React from "react";
import "./GridCard.css";


const luxCardItems = [
  {
    className: "lux-card-assessment",
    title: "Precision",
    description: "Enhance your trading accuracy with AI-driven insights.",
   
  },
  {
    className: "lux-card-training",
    title: "Opportunity",
    description: "Seize market shifts the moment they happen.",
    bg: "url('/images/training.jpg')",
  },
  {
    className: "lux-card-seo-meetup",
    title: "Innovation",
    description: "Lead the way with state-of-the-art AI solutions.",
    bg: "url('/images/seo.jpg')",
  },
  {
    className: "lux-card-talent-hub",
    title: "Security",
    description: "AI safeguards your trades with robust security protocols.",
    bg: "url('/images/talent.jpg')",
  },
  {
    className: "lux-card-leadership",
    title: "Efficiency",
    description: "Streamline your trading process with AI automation.",
    bg: "url('/images/leadership.jpg')",
  },
  {
    className: "lux-card-communication",
    title: "Growth",
    description: "AI evolves with the market to support your ongoing success.",
    bg: "url('/images/communication.jpg')",
  },
  {
    className: "lux-card-talent-pool",
    title: "Confidence",
    description: "Trade boldly with insights powered by AI intelligence.",
    bg: "url('/images/pool.jpg')",
  },
  {
    className: "lux-card-goals",
    title: "Consistency",
    description: "AI maintains your trading strategy around the clock.",
    bg: "url('/images/goals.jpg')",
  },
  {
    className: "lux-card-progress",
    title: "Performance",
    description: "AI’s smart algorithms strive for peak trading results.",
    bg: "url('/images/progress.jpg')",
  },
  {
    className: "lux-card-churn",
    title: "Flexibility",
    description: "Adjust AI settings to perfectly match your trading style.",
    bg: "url('/images/churn.jpg')",
  },
  {
    className: "lux-card-benchmark",
    title: "Learning",
    description: "Tap into AI’s constant market monitoring and updates",
    bg: "url('/images/benchmark.jpg')",
  },
  {
    className: "lux-card-insights",
    title: "Risk Management",
    description: "AI actively works to minimize risks as they emerge.",
    bg: "url('/images/insights.jpg')",
  },
  {
    className: "lux-card-forecast",
    title: "Accessibility",
    description: "AI-powered auto trading is easy for everyone to use.",
    bg: "url('/images/forecast.jpg')",
  },
  {
    className: "lux-card-control-center",
    title: "Scalability",
    description: "AI adjusts seamlessly to different trade sizes and volumes.",
    bg: "url('/images/control.jpg')",
  },
];

const GridCard: React.FC = () => {
  return (
    <div className="lux-card-grid-wrapper">
      <h2 className="lux-card-heading">Empower Your Workforce</h2>
      <div className="lux-card-grid">
        {luxCardItems.map((item, index) => (
          <div
            key={index}
            className={`lux-card ${item.className}`}
            // style={{ backgroundImage: item.bg }}
          >
            <div className="lux-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCard;
