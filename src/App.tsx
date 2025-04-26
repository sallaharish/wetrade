import React from 'react';
  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BG from "./Assets/images/bg.webp"
import Features from './pages/Features/Features';

  function App() {
    return (
      <div className="App"  style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
      }}>
        
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
