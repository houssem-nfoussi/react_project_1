import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import './Carousel.css';
import { motion } from 'framer-motion';

const lightBackground = '#d9ead3'; // Light green background
const borderRadius = '0px';
const autoplaySpeed = 3000; // Time in milliseconds to switch slides (e.g., 5 seconds)

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState('700px'); // Increased height

  const titleFadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const imageFadeIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const descriptionFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  const contentStyle = {
    color: '#333',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'space-between', // Space out text and image
    height: carouselHeight,
    backgroundColor: 'transparent', // Content background is transparent
    borderRadius: borderRadius,
    flexDirection: 'row', // Arrange items horizontally
  };

  const textContainerStyle = {
    textAlign: 'left', // Align text to the left
    maxWidth: '40%', // Limit text width
    display: 'flex',
    flexDirection: 'column', // Arrange title and description vertically
    alignItems: 'flex-start', // Align items to the left within the container
  };

  const titleStyle = {
    fontSize: '2.5rem', // Increased title size
    marginBottom: '10px',
    color: '#2e7d32',
  };

  const descriptionStyle = {
    fontSize: '1.3rem', // Increased description size
    marginTop: '0',
    color: '#555',
  };

  const imageStyle = {
    maxWidth: '50%', // Limit image width
    maxHeight: '80%', // Limit image height
    objectFit: 'contain',
    borderRadius: '0px',
    alignSelf: 'center', // Vertically center the image
  };

  const carouselFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const carouselStyle = {
    width: '100vw',
    margin: '0',
    backgroundColor: lightBackground, // Set the light green background for the carousel
    borderRadius: borderRadius,
    overflow: 'hidden',
  };

  const slides = [
    {
      title: 'Focus on Reducing Waste',
      image: '/images/gasp.jpg',
      description: 'Taking immediate action against the significant consequences of food waste.',
    },
    {
      title: 'Household Cost Awareness',
      image: '/images/dinar.jpg',
      description: 'Highlighting the average annual food waste cost for a Tunisian family.',
    },
    {
      title: 'Per Capita Waste Volume',
      image: '/images/food.jpg',
      description: 'Emphasizing the substantial amount of food wasted per person annually.',
    },
  ];

  const afterChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div style={carouselStyle}>
      <Carousel
        afterChange={afterChange}
        autoplay={true} // Enable autoplay
        autoplaySpeed={autoplaySpeed} // Set the speed
        arrows={false} // Hide the arrows
        dots={false} // Hide the dots
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: 'row',
            }}
            initial="hidden"
            animate={currentSlide === index ? 'visible' : 'hidden'}
            variants={carouselFadeIn} // Add animation transition
          >
            <div style={contentStyle}>
              <div style={textContainerStyle}>
                {slide.title && (
                  <motion.h3
                    style={titleStyle}
                    variants={titleFadeIn}
                    initial="hidden"
                    animate={currentSlide === index ? 'visible' : 'hidden'}
                  >
                    {slide.title}
                  </motion.h3>
                )}
                {slide.description && (
                  <motion.p
                    style={descriptionStyle}
                    variants={descriptionFadeIn}
                    initial="hidden"
                    animate={currentSlide === index ? 'visible' : 'hidden'}
                  >
                    {slide.description}
                  </motion.p>
                )}
              </div>
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
                style={imageStyle}
                variants={imageFadeIn}
                initial="hidden"
                animate={currentSlide === index ? 'visible' : 'hidden'}
              />
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
