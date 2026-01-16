import React from "react";
import "./advert.css";
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
            {/* White background area */}
          </div>
          
          {/* Middle Card - Overlapping Both */}
          <div className="advert-card-middle">
            <div className="card-header">
              <svg className="clock-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="advert-date">Limited Time Offer</span>
            </div>
            
            <h2 className="advert-title">
              Premium <span className="highlight">Hair</span>
              <svg className="title-underline" viewBox="0 0 200 10" fill="none">
                <path d="M5 5C65 5, 135 5, 195 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </h2>
            
            <p className="advert-text">
              Discover premium quality hair crafted for elegance, confidence
              and timeless beauty. Elevate your look with Luxe-By-Mo.
            </p>

            
            <button className="advert-btn">
              <span>Shop Now</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertSection;