import React from 'react';
import './Guide.css';

const backgroundClasses = ['bg-img-1', 'bg-img-2', 'bg-img-3'];

const tools = [
    {
        title: 'Fully Automated Operation',
        description: 'Set it up once, and the system runs on autopilot, handling both trade execution and closure automatically, all while ensuring profitability',
        className: 'toolkit',
    },
    {
        title: 'Available on MetaTrader 4 & MetaTrader 5 ',
        description: 'Our trading robots are compatible with the most popular Forex platforms, ensuring ease of use and reliable performance.',
        className: 'screener',
    },
    {
        title: 'Automatic Trade Execution',
        description: 'The robot opens and closes trades autonomously, making precise decisions based on market data without human intervention',
        className: 'backtester',
    },
    {
        title: 'Error-Free Execution',
        description: 'Forex robots eliminate order entry mistakes, ensuring flawless trade execution every time',

    },
    {
        title: 'Emotion-Free Trading',
        description: 'The robot is free from human emotions such as fear, greed, or hesitation, allowing for consistent, rational decision-making.',

    },
    {
        title: 'Advanced Risk & Money Management',
        description: 'Equipped with sophisticated money management tools and risk controls, our EA (Expert Advisor) ensures your trading remains secure and optimized for long-term profitability',

    },
    {
        title: 'Non-Tiring, 24/5 Operation',
        description: 'The robot works tirelessly, trading the Forex market 24/5, even when youre offline. It never takes a break, ensuring you don’t miss out on potential profits',

    },
    {
        title: 'Proven Performance',
        description: 'With over three years of extensive testing and refinement, this AI-driven system has proven its reliability and effectiveness. It is now available for public use, offering you a trusted solution for Forex trading',

    },
    {
        title: 'Comprehensive Market Analysis',
        description: 'Our robot analyzes market data using 12 internal indicators to make informed and timely trading decisions, minimizing risk and maximizing returns',

    },
    {
        title: 'No Risky Strategies',
        description: 'We avoid risky strategies like Martingale. Instead, we use a Profit Average Method designed to provide steady and reliable growth',

    },
    {
        title: '24/7 Support',
        description: 'We offer round-the-clock customer support, with dedicated day and night shifts, ensuring that any issues are promptly addressed and resolved',

    },


];
const Guide = () => {
    return (
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
    );
};

export default Guide;
