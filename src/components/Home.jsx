import React from 'react';
import './Home.css';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import { motion } from 'framer-motion';
import Charts from './Charts.jsx';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div>
      <motion.div
        className="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
      >
        <div className="hero-side-text">
          <h2>c'est quoi le gaspillage allimentaire?</h2>
          <p>Le gaspillage alimentaire désigne l’ensemble des aliments destinés à la consommation humaine qui sont perdus, jetés ou non consommés.</p>
        </div>

        <div className="hero-center">
          <img src="/images/gaspillage-alimentaire.jpg" alt="Gaspillage Alimentaire" />
          <p className="hero-description">
            Le gaspillage alimentaire est un défi mondial. En Tunisie, cela représente des tonnes de nourriture
            jetée chaque année, avec des conséquences économiques, sociales et environnementales.
          </p>
        </div>

        <div className="hero-side-text">
          <h2>Notre Mission</h2>
          <p>"Sensibiliser et guider les foyers vers une consommation responsable en réduisant le gaspillage alimentaire au quotidien.</p>
        </div>
      </motion.div>
     
      
    </div>
  );
};

export default Home;
