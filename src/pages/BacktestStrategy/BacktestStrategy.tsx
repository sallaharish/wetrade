import React, { useState } from "react";
import { Card, CardContent, Button, Snackbar, Alert } from "@mui/material";
import "./BacktestStrategy.css"
import { BarChart, Computer, Timeline, CheckCircle, PlayCircle } from "@mui/icons-material"; // MUI icons
import PopupModal from "../../components/PopupModal/PopupModal";
import Navbar from "../../components/Navbar/Navbar";

export default function BacktestStrategy() {
  const [showForm, setShowForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<any>("success");

  const handleFormSubmitSuccess = () => {
    setSnackbarMessage("Form submitted successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleFormSubmitError = () => {
    setSnackbarMessage("There was an issue submitting the form.");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
     <Navbar onGetStartedClick={() => setShowForm(true)} />

    <div className="backtesting-container">
      <header className="backtesting-header">
        <h1 className="backtesting-title">
          Backtest Your Trading Strategy
        </h1>
        <p className="backtesting-subtitle">
          Validate Before You Trade
        </p>
        <p className="backtesting-description">
          Before deploying any strategy in live markets, it’s essential to
          understand how it would have performed under real historical
          conditions. Our Auto Trading Software includes a robust backtesting
          engine—empowering traders to optimize and refine strategies with
          confidence.
        </p>
      </header>

      <section className="backtesting-section">
        <Card className="backtesting-card">
          <CardContent className="backtesting-card-content">
            <h2 className="backtesting-card-title">What Is Backtesting?</h2>
            <p className="backtesting-text">
              Backtesting is the process of testing a trading strategy using
              historical market data to evaluate its effectiveness. It allows
              traders to simulate performance over past conditions without
              risking actual capital.
            </p>
          </CardContent>
        </Card>

        <Card className="backtesting-card">
          <CardContent className="backtesting-card-content">
            <h2 className="backtesting-card-title">Key Benefits</h2>
            <ul className="backtesting-list">
              <li className="backtesting-list-item">
                Data-Driven Confidence: Evaluate
                profitability, risk, and consistency before live execution.
              </li>
              <li className="backtesting-list-item">
                Strategy Optimisation: Fine-tune
                parameters to improve performance based on measurable outcomes.
              </li>
              <li className="backtesting-list-item">
                Performance Metrics: Analyse
                ROI, win/loss ratio, drawdowns, Sharpe ratio, and more.
              </li>
              <li className="backtesting-list-item">
               Avoid Overfitting: Test across
                different market conditions to ensure strategy robustness.
              </li>
              <li className="backtesting-list-item">
               Test Before You Deploy: Mitigate
                risk by identifying potential flaws or weaknesses early.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="backtesting-section">
        <Card className="backtesting-card">
          <CardContent className="backtesting-card-content">
            <h2 className="backtesting-card-title">
              Supported Markets for Backtesting
            </h2>
            <ul className="backtesting-market-list">
              <li className="market-item">
                Cryptocurrencies (24/7 trading data)
              </li>
              <li className="market-item">Forex Pairs (high liquidity & volatility)</li>
              <li className="market-item">Stocks & ETFs</li>
              <li className="market-item">Indices & Commodities</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="backtesting-footer">
        <h2 className="backtesting-footer-title">Test Smarter. Trade Better.</h2>
        <p className="backtesting-footer-text">
          Validate strategies with precision | Simulate with speed | Maximise
          your edge
        </p>
        <Button variant="contained" color="primary" className="start-button">
          Start Backtesting
        </Button>
      </section>
      {showForm && (
        <PopupModal
          open={showForm}
          setOpen={setShowForm}
          onSubmitSuccess={handleFormSubmitSuccess}
          onSubmitError={handleFormSubmitError}
        />
      )}

<Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
    </div>
    </>
  );
}
