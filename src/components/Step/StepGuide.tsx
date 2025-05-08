import React from 'react';
import './StepGuide.css';

const steps = [
  { title: 'Register Your Account', description: 'Fast, secure sign-up process.' },
  { title: 'Connect Your Broker ', description: 'Works with major trading platforms.' },
  { title: 'Choose Your Strategy ', description: 'Pick from expert-built or customise one yourself.' },
  { title: 'Go Live or Simulate ', description: 'Practice in demo mode or trade live.' },
  { title: 'Track & Optimise ', description: 'Monitor performance and fine-tune settings anytime.' }
];

const StepGuide: React.FC = () => {
  return (
    <div className="step-guide-container">
      <h2 className='head'>How It Works – Simple 5-Step Setup</h2>
      <div className="step-card">
        {steps.map((step, index) => (
          <div key={index} className={`step-item ${index === 1 ? 'active' : ''} ${index < 3 ? 'completed' : ''}`}>
            <div className="step-icon">
              <div className="circle">{index + 1}</div>
              {index !== steps.length - 1 && <div className="line" />}
            </div>
            <div className="step-text">
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepGuide;
