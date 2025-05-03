// GridCard.tsx
import React from "react";
import "./GridCard.css";


const luxCardItems = [
  {
    className: "lux-card-assessment",
    title: "Assessment",
    description: "Evaluate skills and performance.",
   
  },
  {
    className: "lux-card-training",
    title: "Training",
    description: "Upskill with personalized modules.",
    bg: "url('/images/training.jpg')",
  },
  {
    className: "lux-card-seo-meetup",
    title: "SEO Meetup",
    description: "Collaborate and grow visibility.",
    bg: "url('/images/seo.jpg')",
  },
  {
    className: "lux-card-talent-hub",
    title: "Talent Hub",
    description: "Find and manage top talent.",
    bg: "url('/images/talent.jpg')",
  },
  {
    className: "lux-card-leadership",
    title: "Leadership",
    description: "Develop leadership skills.",
    bg: "url('/images/leadership.jpg')",
  },
  {
    className: "lux-card-communication",
    title: "Communication",
    description: "Enhance internal communication.",
    bg: "url('/images/communication.jpg')",
  },
  {
    className: "lux-card-talent-pool",
    title: "Talent Pool",
    description: "Nurture future talent.",
    bg: "url('/images/pool.jpg')",
  },
  {
    className: "lux-card-goals",
    title: "Goals",
    description: "Define and track goals.",
    bg: "url('/images/goals.jpg')",
  },
  {
    className: "lux-card-progress",
    title: "Progress",
    description: "Monitor ongoing performance.",
    bg: "url('/images/progress.jpg')",
  },
  {
    className: "lux-card-churn",
    title: "Churn",
    description: "Reduce employee turnover.",
    bg: "url('/images/churn.jpg')",
  },
  {
    className: "lux-card-benchmark",
    title: "Benchmark",
    description: "Compare industry standards.",
    bg: "url('/images/benchmark.jpg')",
  },
  {
    className: "lux-card-insights",
    title: "Insights",
    description: "Get actionable insights.",
    bg: "url('/images/insights.jpg')",
  },
  {
    className: "lux-card-forecast",
    title: "Forecast",
    description: "Predict future trends.",
    bg: "url('/images/forecast.jpg')",
  },
  {
    className: "lux-card-control-center",
    title: "Control Center",
    description: "Centralized admin dashboard.",
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
