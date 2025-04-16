import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services.jsx';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
