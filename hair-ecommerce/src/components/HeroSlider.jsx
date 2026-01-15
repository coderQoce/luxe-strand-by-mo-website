import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Premium Hair Extensions',
      subtitle: 'Discover our collection of 100% human hair extensions',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Summer Collection 2024',
      subtitle: 'Get 20% off on all Brazilian hair extensions',
      buttonText: 'Explore Sale'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Luxury Hair Care',
      subtitle: 'Premium quality hair with natural shine and texture',
      buttonText: 'View Products'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-item ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slider-overlay"></div>
          {index === currentSlide && (
            <div className="slider-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="btn btn-primary">
                {slide.buttonText} →
              </button>
            </div>
          )}
        </div>
      ))}

      <button className="slider-nav slider-prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-nav slider-next" onClick={nextSlide}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;