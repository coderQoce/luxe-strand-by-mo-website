import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AdvertSection from '../components/AdvertSection';
import BestSellers from '../components/BestSellers';
import DualImageAdvert from '../components/DualImageAdvert';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home = ({ addToCart }) => {
  return (
    <>
      <HeroSlider id="hero" />
      <AdvertSection />
      <BestSellers addToCart={addToCart} />
      <DualImageAdvert />
      <FAQSection />
   
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Additional CTA Section */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, var(--white), var(--light-purple))',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            color: 'var(--dark-purple)',
            marginBottom: '1rem'
          }}>
            Ready for a New Look?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-light)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Browse our complete collection of premium hair extensions and find your perfect match.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Shop All Products →
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;