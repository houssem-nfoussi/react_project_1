import React from 'react';
import './Footer.css';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' }
  })
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {['Contact Us', 'Quick Links', 'Follow Us'].map((title, index) => (
          <motion.div
            key={title}
            className="footer-content"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            {index === 0 && (
              <>
                <h3>Contact Us</h3>
                <p>Email: Info@example.com</p>
                <p>Phone: +121 56556 565556</p>
                <p>Address: Your Address 123 Street</p>
              </>
            )}

            {index === 1 && (
              <>
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Products</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </>
            )}

            {index === 2 && (
              <>
                <h3>Follow Us</h3>
                <ul className="social-icons">
                  <li><a href=""><FacebookFilled /></a></li>
                  <li><a href=""><TwitterSquareFilled /></a></li>
                  <li><a href=""><InstagramFilled /></a></li>
                  <li><a href=""><LinkedinFilled /></a></li>
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bottom-bar"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2025  FoodRescue. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
