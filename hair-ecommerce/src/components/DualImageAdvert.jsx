import React from 'react';
import './dual.css';

const DualImageAdvert = () => {
  const collections = [
    {
      id: 1,
      title: "Curly Hair",
      category: "curly",
      imageUrl: require("../asset/images/curly.jpeg").default || require("../asset/images/curly.jpeg"),
    },
    {
      id: 2,
      title: "Straight Hair",
      category: "straight",
      imageUrl: require("../asset/images/straight.jpeg").default || require("../asset/images/straight.jpeg"),
    }
  ];

  return (
    <section className="dual-images-section">
      <div className="container">
        <div className="section-header">
          <div className="header-line"></div>
        
          <p className="section-subtitle">
            Choose your perfect match from our premium hair collections
          </p>
        </div>

        <div className="images-grid">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="image-card"
              onClick={() => window.location.href = `/products?category=${collection.category}`}
            >
              <div className="image-wrapper">
                <img 
                  src={collection.imageUrl} 
                  alt={collection.title}
                  className="collection-image"
                  loading="lazy"
                />
                <div className="image-gradient"></div>
              </div>
              
              <div className="image-overlay">
                <div className="overlay-content">
                  <svg className="hair-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4C8 4 4 8 4 12C4 16 8 20 12 20C16 20 20 16 20 12C20 8 16 4 12 4Z" 
                          stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M8 9C9 8 10 8 11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M13 9C14 8 15 8 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 13C9 14 10 15 12 15C14 15 15 14 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <h3 className="collection-name">{collection.title}</h3>
                  <div className="view-indicator">
                    <span>View Collection</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button 
            className="view-all-btn"
            onClick={() => window.location.href = '/products'}
          >
            Browse All Textures
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DualImageAdvert;