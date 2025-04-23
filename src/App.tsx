import React from 'react';
  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Home from './pages/Home/Home';
  import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

  function App() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
