import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AdvertSection from '../components/AdvertSection';
import BestSellers from '../components/BestSellers';
import DualImageAdvert from '../components/DualImageAdvert';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import BrandLogos from '../components/BrandLogos';
import Cart from '../components/Cart';

const Home = ({ 
  addToCart, 
  cart,
  cartCount,
  isCartOpen,
  setIsCartOpen,
  removeFromCart,
  updateQuantity,
  clearCart,
  cartTotal 
}) => {
  return (
    <>
    
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        cartTotal={cartTotal}
      />
    
      <HeroSlider 
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <AdvertSection />
      <BestSellers addToCart={addToCart} />
      <DualImageAdvert />
      <BrandLogos />
      <FAQSection />
      <ContactSection />
      
   
      <section className="cta-section">
        <div className="cta-container">
       
          <div className="cta-bg-pattern">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="rgba(138, 75, 175, 0.05)" strokeWidth="1"/>
              <path d="M200 50V350M50 200H350" stroke="rgba(138, 75, 175, 0.05)" strokeWidth="1"/>
              <circle cx="200" cy="200" r="100" stroke="rgba(138, 75, 175, 0.05)" strokeWidth="1"/>
            </svg>
          </div>

         
          <div className="cta-content">
            <div className="cta-header">
              <span className="cta-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                        stroke="#8a4baf" strokeWidth="1.5"/>
                </svg>
                Premium Collection
              </span>
              
              <h2 className="cta-title">
                Transform Your Look with<br />
                <span className="highlight">Luxe_by_MO</span>
              </h2>
              
              <p className="cta-description">
                Discover our complete collection of premium hair extensions, 
                meticulously crafted to enhance your natural beauty and elevate your confidence.
              </p>
            </div>

          
            <div className="cta-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality</div>
              </div>
            </div>
            <button 
              className="cta-button"
              onClick={() => window.location.href = '/products'}
            >
              <span className="button-text">Explore Full Collection</span>
              <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/*Badges Wey dey ground */}
            <div className="trust-badges">
              <div className="trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="#00b894" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#00b894" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Free Shipping Worldwide</span>
              </div>
              
              <div className="trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="#00b894" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#00b894" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;