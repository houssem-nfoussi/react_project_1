import React from 'react';
import { Layout } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const { Header } = Layout;

const items = [
  { key: '', label: 'Accueil' },
  { key: 'services', label: 'Services' },
  { key: 'login', label: 'Se déconnecter' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fadeIn = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const handleClick = (key) => {
    navigate(`/${key}`);
  };

  return (
    <Layout>
      <Header className="custom-header">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌱 Stop Gaspillage
        </motion.div>
        <ul className="custom-menu">
          {items.map((item, index) => (
            <motion.li
              key={item.key}
              className={`menu-item ${
                location.pathname.replace('/', '') === item.key ? 'active' : ''
              }`}
              onClick={() => handleClick(item.key)}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
      </Header>
    </Layout>
  );
};

export default Navbar;
