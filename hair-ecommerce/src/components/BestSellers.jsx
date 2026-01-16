import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import './bestsellers.css';

const BestSellers = ({ addToCart }) => {
  const bestSellers = products.filter(product => product.featured).slice(0, 3);
  const displayProducts = bestSellers.length > 0 ? bestSellers : products.slice(0, 3);

  return (
    <section className="best-sellers">
      <div className="container">
        <div className="section-header">
          <div className="title-wrapper">
            <svg className="title-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="section-title">Best Sellers</h2>
          </div>
          <p className="section-subtitle">
            Premium quality hair extensions loved by thousands of customers worldwide
          </p>
        </div>

     

        <div className="best-sellers-grid">
          {displayProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              addToCart={addToCart}
              showBadge={true}
              badgeContent={
                <svg className="badge-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="currentColor"/>
                </svg>
              }
            />
          ))}
        </div>

        <div className="view-all-container">
          <button 
            className="btn btn-secondary"
            onClick={() => window.location.href = '/products'}
            aria-label="View all products"
          >
            <span>Explore Full Collection</span>
            <svg className="view-all-icon" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;