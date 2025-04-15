import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
     
    </Router>
  );
}


export default App;
