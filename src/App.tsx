import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import BG from "./Assets/images/bg.webp";
import Features from "./pages/Features/Features";
import Faqs from "./components/FaqPage/FaqPage";
import ContactUs from "./components/Contact/Contact";
import { FaWhatsapp } from "react-icons/fa6";
import WhatsAppAndScrollToTop from "./components/WhatsApp/WhatApp";
import Blogs from "./components/Blog/Blog";
import MarketingInsights from "./pages/MarketingInsights/MarketingInsights";
import BacktestStrategy from "./pages/BacktestStrategy/BacktestStrategy";
import Guide from "./components/Guide/Guide";
import IntroHero from "./components/IntroHero/IntroHero";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

import ScrollToTop from "./components/ScrollTop";
import RefundPolicy from "./pages/Home/RefundPolicy/RefundPolicy";

function App() {
  return (
    <div
      className="App"
      style={{
        // backgroundImage: `url(${BG})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        backgroundColor: "black",
      }}
    >
      <WhatsAppAndScrollToTop />
      <ScrollToTop/>

      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/refund-policy" element={<RefundPolicy/>}/>
        <Route path="/resources/blog" element={<Blogs />} />
        <Route
          path="/resources/marketing-insights"
          element={<MarketingInsights />}
        />
        <Route
          path="/resources/backtest-strategy"
          element={<BacktestStrategy />}
        />
         <Route
          path="/resources/docs"
          element={<Guide />}
        />
        <Route 
        path="/resources/about"
        element={ <IntroHero/> }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
