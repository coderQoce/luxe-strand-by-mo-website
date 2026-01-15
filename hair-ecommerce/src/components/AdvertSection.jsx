import React from "react";

const AdvertSection = () => {
  return (
    <section className="advert-section">
      <div className="container">
        {/* Split Image & White Background with Middle Card */}
        <div className="advert-split-container">
          {/* Left Side - Image */}
          <div className="advert-image-side">
            <div className="advert-image-overlay"></div>
          </div>
          
          {/* Right Side - White Background */}
          <div className="advert-white-side">
            {/* Empty div for white background - content is in the middle card */}
          </div>
          
          {/* Middle Card - Overlapping Both */}
          <div className="advert-card-middle">
            <span className="advert-date">Limited Time Offer</span>
            
            <h2 className="advert-title">
              Premium <span>Hair</span>
            </h2>
            
            <p className="advert-text">
              Discover premium quality hair crafted for elegance, confidence
              and timeless beauty. Elevate your look with Luxe-By-Mo.
            </p>
            
            <div className="advert-discount">50% OFF</div>
            
            <button className="advert-btn">
              Shop Now <span className="advert-btn-icon">→</span>
            </button>
          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default AdvertSection;