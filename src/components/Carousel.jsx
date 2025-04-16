import React, { useState } from 'react';
import { Carousel } from 'antd';
import './Carousel.css';
import { motion } from 'framer-motion';

const autoplaySpeed = 6000;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'FoodRescue',
      image: '/images/HD1.jpg',
      description: 'Help us feed the world by reducing food waste',
    },
    {
      title: 'Spead awereness',
      image: '/images/HD2.jpg',
      description: 'let those around you know the dangers of wasting food.',
    },
    {
      title: 'Help those in need',
      image: '/images/HD3.jpg',
      description: 'Use your surplus to make a difference — feed those who need it most.',
    },
    {
      title: 'Help those in need',
      image: '/images/HD4.jpg',
      description: 'Use your surplus to make a difference — feed those who need it most.',
    },
  ];

  const afterChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel
        afterChange={afterChange}
        autoplay
        autoplaySpeed={autoplaySpeed}
        arrows={false}
        dots={false}
        pauseOnHover={false}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="carousel-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="carousel-overlay"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="carousel-title">{slide.title}</h3>
              <p className="carousel-description">{slide.description}</p>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
