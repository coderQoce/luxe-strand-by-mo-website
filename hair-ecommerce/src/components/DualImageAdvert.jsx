import React from 'react';

const DualImageAdvert = () => {
  return (
    <section className="dual-image-advert">
      <div className="container">
        <h2 className="section-title">Explore Collections</h2>
        <p className="section-subtitle">
          Discover different textures and styles for every occasion
        </p>
        
        <div className="dual-image-content">
          <div className="image-container">
            <img 
              src={require("../asset/images/curly.jpeg").default || require("../asset/images/curly.jpeg")}
              alt="Curly Hair Collection" 
            />
            <div className="image-overlay">
              <h3>Curly Collection</h3>
              <p>Natural curls for vibrant looks</p>
              <button className="btn btn-white">
                Shop Curly Hair →
              </button>
            </div>
          </div>
          
          <div className="image-container">
            <img 
                 src={require("../asset/images/straight5.jpeg").default || require("../asset/images/straight.jpeg")}
              alt="Straight Hair Collection" 
            />
            <div className="image-overlay">
              <h3>Straight Collection</h3>
              <p>Sleek and smooth for elegant styles</p>
              <button className="btn btn-white">
                Shop Straight Hair →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualImageAdvert;