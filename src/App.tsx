import React from 'react';
  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BG from "./Assets/images/bg.webp"
import Features from './pages/Features/Features';
import Faqs from './components/FaqPage/FaqPage';
import ContactUs from './components/Contact/Contact';
import { FaWhatsapp } from "react-icons/fa6";
import WhatsAppAndScrollToTop from './components/WhatsApp/WhatApp';

  function App() {
    return (
      <div className="App"  style={{
        // backgroundImage: `url(${BG})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        backgroundColor:"black"
        
      }}>
        <WhatsAppAndScrollToTop/>

        
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/faq' element={<Faqs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
