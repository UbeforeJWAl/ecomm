import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import AddSales from './components/Addsales';
import TopFiveSales from './components/TopFiveSales';
import TodaysTotalRevenue from './components/TodaysTotalRevenue';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<p>Welcome to Sales App!</p>} />
        <Route path="/add-sales" element={<AddSales />} />
        <Route path="/top-5-sales" element={<TopFiveSales />} />
        <Route path="/todays-total-revenue" element={<TodaysTotalRevenue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;