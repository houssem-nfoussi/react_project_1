import React from 'react';
import './Footer.css';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: Info@example.com</p>
          <p>Phone: +121 56556 565556</p>
          <p>Address: Your Address 123 Street</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href=""><FacebookFilled /></a></li>
            <li><a href=""><TwitterSquareFilled /></a></li>
            <li><a href=""><InstagramFilled /></a></li>
            <li><a href=""><LinkedinFilled /></a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
