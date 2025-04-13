import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  {
    title: 'Consommation de Pain',
    image: '/images/pain.jpg',
    description: '113 000 tonnes de pain sont gaspillées chaque année en Tunisie.',
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
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="carousel-wrapper">
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
    </div>
  );
};

export default Carousel;
