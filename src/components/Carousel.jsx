import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Carousel.css';

const slides = [
  {
    title: 'diminuer le gaspillage alimentaire',
    image: '/images/gasp.jpg',
    description: 'L’ampleur du gaspillage alimentaire est une source de grave préoccupation, exigeant une action immédiate en raison de ses conséquences importantes et potentiellement dommageables.',
  },
  {
    title: 'Coût pour les Ménages',
    image: '/images/dinar.jpg',
    description: 'Une famille tunisienne gaspille en moyenne 240 dinars par an en nourriture.',
  },
  {
    title: 'Quantité par Habitant',
    image: '/images/food.jpg',
    description: 'Le gaspillage alimentaire est estimé à 172 kg par personne par an.',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '2rem', color: '#388E3C' }}
      >
        Notre objectif
      </motion.h2>

      <motion.div
        className="carousel-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <button className="nav prev" onClick={prevSlide}>
          &#8592;
        </button>

        <div className="carousel-container">
          <div
            className="slides-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <h2>{slide.title}</h2>
                <img src={slide.image} alt={slide.title} />
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="nav next" onClick={nextSlide}>
          &#8594;
        </button>
      </motion.div>
    </div>
  );
};

export default Carousel;
