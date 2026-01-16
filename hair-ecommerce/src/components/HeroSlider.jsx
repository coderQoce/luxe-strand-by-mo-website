import React, { useState, useEffect } from 'react';
import './hero.css';
import Navbar from './Navbar';

const HeroSlider = ({ cartCount, onCartClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image:  require("../asset/images/slide1.jpeg").default || require("../asset/images/slide1.jpeg"),
      title: 'Premium Hair Extensions',
      subtitle: 'Discover our collection of 100% human hair extensions',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      image:  require("../asset/images/slide2.jpeg").default || require("../asset/images/slide2.jpeg"),
      title: 'Summer Collection 2024',
      subtitle: 'Get 20% off on all Brazilian hair extensions',
      buttonText: 'Explore Sale'
    },
    {
      id: 3,
      image:  require("../asset/images/slide3.jpeg").default || require("../asset/images/slide3.jpeg"),
      title: 'Luxury Hair Care',
      subtitle: 'Premium quality hair with natural shine and texture',
      buttonText: 'View Products'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="hero-slider">
      {/* Transparent Navbar inside Hero Slider */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={onCartClick}
        isHeroNav={true}
      />

      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-item ${index === currentSlide ? 'active' : ''} ${
              index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
            }`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${slide.image})` }}
          >
            <div className="slider-content">
              <div className={`content-wrapper ${index === currentSlide ? 'active' : ''}`}>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button 
                  className="btn btn-primary slide-btn"
                  onClick={() => window.location.href = '/products'}
                >
                  <span>{slide.buttonText}</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Custom Dots with Progress Indicators */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <svg className="dot-icon" viewBox="0 0 24 24" fill="none">
                <circle 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  fill="none"
                />
                {index === currentSlide && (
                  <circle 
                    className="progress-ring"
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="62.83"
                    strokeDashoffset="0"
                  />
                )}
              </svg>
              <span className="dot-number">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;