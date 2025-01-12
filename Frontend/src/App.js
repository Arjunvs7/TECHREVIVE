// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Make sure Navbar is rendered */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
