import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';
// This component wraps your layout conditionally
const LayoutWrapper = () => {
  const location = useLocation();

  const isLoginOrMainPage = location.pathname === '/login' || location.pathname === '/';

  return (
    <>
      {!isLoginOrMainPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
      {!isLoginOrMainPage && <Footer />}
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
