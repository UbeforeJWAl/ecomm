import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Slider />
      <Routes>
        <Route path="/" element={ <p>.</p>} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Footer" element={<Footer />}/>
    
      </Routes>
    </Router>
  );
};

export default App;