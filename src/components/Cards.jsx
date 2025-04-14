import React from 'react';
import './Cards.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  
};

const Cards = () => {
  return (
    
    <div id="card-area">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#388E3C' }}>
                Problemes d'aujourdhui
            </h2>
      <div className="wrapper">
        <div className="box-area">
          {[
            {
              src: '/images/pain.jpg',
              title: 'Consommation de Pain',
              text: '113 000 tonnes de pain sont gaspillées chaque année en Tunisie.',
            },
            {
              src: '/images/dinar.jpg',
              title: 'Coût pour les Ménages',
              text: 'Une famille tunisienne gaspille en moyenne 240 dinars par an en nourriture.',
            },
            {
              src: '/images/food.jpg',
              title: 'Quantité par Habitant',
              text: 'Le gaspillage alimentaire est estimé à 172 kg par personne par an.',
            },
          ].map((card, index) => (
            <motion.div
              className="box"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={card.src} alt={card.title} />
              <div className="overlay">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
