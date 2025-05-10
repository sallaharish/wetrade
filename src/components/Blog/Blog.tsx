import React, { useState } from 'react';
import './Blog.css';
import blog1 from "../../Assets/images/blog1.jpg";
import blog2 from "../../Assets/images/blogtwo.jpg";
import blog3 from "../../Assets/images/blogthree.jpg";
import blog4 from "../../Assets/images/blogfour.jpg";
import blog5 from "../../Assets/images/blog5.jpg";

import ArticleSection from '../ArticleSection/ArticleSection';
import h1 from "../../Assets/images/h1.jpg";
import h2 from "../../Assets/images/h2.jpg";
import h3 from "../../Assets/images/h3.jpg";
import h4 from "../../Assets/images/h4.jpg";
import h5 from "../../Assets/images/h5.jpg";
import h6 from "../../Assets/images/h6.jpg";
import h7 from "../../Assets/images/h7.jpg";
import h8 from "../../Assets/images/h8.jpg";
import h9 from "../../Assets/images/h9.jpg";
import h10 from "../../Assets/images/h10.jpg";
import Navbar from '../Navbar/Navbar';
import PopupModal from '../PopupModal/PopupModal';
import { Alert, Snackbar } from '@mui/material';


interface Article {
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
}

const articles: Article[] = [
    {
        category: 'Strategies & Tips',
        title: 'Unlocking the Future of Trading with WTS Technologies Auto Trading Software',
        author: 'Brady Young',
        date: 'May 02, 2025',
        image: blog1,
    },
    {
        category: 'Strategies & Tips',
        title: 'What Is Auto Trading Software?',
        author: 'Brady Young',
        date: 'May 06, 2025',
        image: blog2,
    },
    {
        category: 'Strategies & Tips',
        title: 'Inverse Head & Shoulders: Reversal Signal Guide',
        author: 'Christopher Downie',
        date: 'May 06, 2025',
        image: blog3,
    },
    {
        category: 'Investing Tips',
        title: 'Penny Stocks 101: High Risk or Pitfall?',
        author: 'Jacob Denbrock',
        date: 'May 06, 2025',
        image: blog4,
    },
    {
        category: 'Investing Tips',
        title: 'High-Yield Savings: Maximize Returns',
        author: 'Brady Young',
        date: 'May 06, 2025',
        image: blog5,
    },
];
const strategiesTips = [
    {
        id: 1,
        category: 'Strategies & Tips',
        title: 'John Paulson: Methods and Trade Insights',
        author: 'Brady Young',
        date: 'May 06, 2025',
        imageUrl: h1,
    },
    {
        id: 2,
        category: 'Strategies & Tips',
        title: 'Inverse Head & Shoulders: Reversal Signal Guide',
        author: 'Christopher Downie',
        date: 'May 06, 2025',
        imageUrl: h2,
    },
    {
        id: 3,
        category: 'Strategies & Tips',
        title: 'Market Makers 101: Liquidity & Influence',
        author: 'Brady Young',
        date: 'May 02, 2025',
        imageUrl: h3,
    },
    {
        id: 4,
        category: 'Strategies & Tips',
        title: 'Level 1 vs Level 2: What Traders Need to Know',
        author: 'Christopher Downie',
        date: 'May 01, 2025',
        imageUrl: h10,
    },
];

const technicalAnalysis = [
    {
        id: 5,
        category: 'Technical Analysis',
        title: 'Cryptocurrency Explained: Understand Digital Assets',
        author: 'Christopher Downie',
        date: 'May 05, 2025',
        imageUrl: h5,
    },
    {
        id: 6,
        category: 'Technical Analysis',
        title: 'Hammer Pattern: Essential Candlestick Signal',
        author: 'Sean Mackey',
        date: 'May 05, 2025',
        imageUrl: h6,
    },
    {
        id: 7,
        category: 'Technical Analysis',
        title: 'Directional Filters: Enhance Your Trade Setup',
        author: 'Christopher Downie',
        date: 'May 02, 2025',
        imageUrl: h7,
    },
    {
        id: 8,
        category: 'Technical Analysis',
        title: 'Forex Trading Essentials: A Beginner’s Guide to Currency Markets',
        author: 'Brady Young',
        date: 'May 02, 2025',
        imageUrl: h8,
    },
];

const Blogs: React.FC = () => {
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
        <div>
        

            <div className="articles-container">
                <div className="main-article">
                    <img src={articles[0].image} alt={articles[0].title} />
                    <br />
                    <p className="category">{articles[0].category}</p>
                    <h2>{articles[0].title}</h2>
                    <p>
                        In today’s rapidly evolving financial landscape, technology is transforming the way we trade. At WTS Technologies, we are proud to be at the forefront of this transformation—offering intelligent, user-friendly, and performance-driven Auto Trading Software that empowers traders to take control of their financial future.
                    </p>
                    <h3>What Is Auto Trading Software?</h3>
                    <p>Auto trading software is a powerful tool that uses algorithmic strategies to execute trades automatically, based on predefined parameters such as market conditions, indicators, risk levels, and more. This means faster execution, greater consistency, and a hands-free trading experience for users.
                        Whether you're trading crypto, forex, stocks, or commodities, automation reduces the time, emotion, and guesswork often involved in manual trading.
                    </p>
                    <h3> Why Choose WTS Technologies?</h3>
                    <p>At WTS Technologies, we understand that every trader has unique goals and risk tolerances. That’s why our Auto Trading Software is designed to be:</p>
                    <ul>
                        <li>
                            Our software uses real-time market analysis and integrated technical indicators to find the most relevant trading opportunities.
                        </li>
                        <li>
                            Users can select from a library of prebuilt strategies or create their own with our intuitive strategy builder—no coding required.
                        </li>
                        <li>
                            Built with stability and performance in mind, our platform runs 24/7, ensuring trades are executed without delay—even when markets move fast.
                        </li>
                        <li>
                            With our advanced analytics and backtesting engine, traders can evaluate strategy performance and refine their approach using real historical data.
                        </li>
                        <li>
                            We prioritise data privacy and platform security, using encrypted connections and industry-standard security protocols.
                        </li>
                    </ul>

                    <p className="author">By {articles[0].author} • {articles[0].date}</p>
                </div>


                <div className="side-articles">
                    {articles.slice(1).map((article, index) => (
                        <div className="side-article" key={index}>
                            <img src={article.image} alt={article.title} />
                            <p className="category">{article.category}</p>
                            <h3>{article.title}</h3>
                            <p className="author">By {article.author} • {article.date}</p>
                        </div>
                    ))}
                </div>

            </div>
            <ArticleSection heading="Strategies & Tips" articles={strategiesTips} />
            <ArticleSection heading="Technical Analysis" articles={technicalAnalysis} />
        </div>
         {showForm && <PopupModal open={showForm} setOpen={setShowForm} onSubmitSuccess={handleFormSubmitSuccess} onSubmitError={handleFormSubmitError} />}
              <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{
                      vertical: 'top',   
                      horizontal: 'right',
                    }}
                  >
                    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                      {snackbarMessage}
                    </Alert>
                  </Snackbar>
        </div>
    );
};

export default Blogs;
