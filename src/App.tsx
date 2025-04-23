import React from 'react';
  import './App.css';
  import { Route, Routes } from 'react-router-dom';
  import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

  function App() {
    return (
      <div className="App">
        
        <Routes>
          
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
