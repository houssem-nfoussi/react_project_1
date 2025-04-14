import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';

// This component wraps your layout conditionally
const LayoutWrapper = () => {
  const location = useLocation();

  // Check if current path is "/login"
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
