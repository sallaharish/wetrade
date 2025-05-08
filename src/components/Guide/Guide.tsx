import React, { useState } from 'react';
import './Guide.css';
import StepGuide from '../Step/StepGuide';
import Navbar from '../Navbar/Navbar';

const backgroundClasses = ['bg-img-1', 'bg-img-2', 'bg-img-3'];

const tools = [
    {
        title: 'Fully Automated ',
        description: 'Set your strategy and let the system trade 24/7.',
        className: 'toolkit',
    },
    {
        title: 'Fast Execution ',
        description: 'Capture opportunities instantly, without delay.',
        className: 'screener',
    },
    {
        title: 'Data-Driven Insights',
        description: 'Backtest your strategy with historical data.',
        className: 'backtester',
    },
    {
        title: 'Custom or Pre-Built Strategies ',
        description: 'Use professional templates or create your own.',

    },
    {
        title: 'Robust Risk Controls',
        description: 'Apply stop-loss, take-profit, and capital protection settings.',

    }

];
const Guide = () => {
    const [showForm, setShowForm] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const handleFormSubmitSuccess = () => {
        setSnackbarMessage('Form submitted successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
    };

    const handleFormSubmitError = () => {
        setSnackbarMessage('There was an issue submitting the form.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
    };
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (

        <div>
            <Navbar onGetStartedClick={() => setShowForm(true)} />
            <div className="trading-container">
                <div className="heading-section">
                    <h1 className="headline">Get Started with Auto Trading </h1>
                    <p className="subheading">

                        Your Step-by-Step Guide to Smarter, Automated Investing

                    </p>
                    <p className='subheading'>What Is Auto Trading?</p>
                    <p className='subheading'>Auto Trading Software executes trades on your behalf using advanced algorithms and real-time market data. It reduces emotional decision-making, increases efficiency, and allows you to capitalise on market movements—automatically.</p>
                </div>

                <div className="tools-wrapper">
                    {tools.map((tool, index) => {
                        const bgClass = backgroundClasses[index % backgroundClasses.length];
                        return (
                            <div
                                key={index}
                                className={`tool-card ${bgClass}`}
                            >
                                <div className="tool-content">
                                    <h2>{tool.title}</h2>
                                    <p>{tool.description}</p>
                                </div>
                                <div className="arrow">→</div>
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className='bottom'>
                <StepGuide />

            </div>

        </div>
    );
};

export default Guide;
