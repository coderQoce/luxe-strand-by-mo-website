import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

const BestSellers = ({ addToCart }) => {
  // Filter featured products or show first 3 as best sellers
  const bestSellers = products.filter(product => product.featured).slice(0, 3);
  
  // If no featured products, show first 3
  const displayProducts = bestSellers.length > 0 ? bestSellers : products.slice(0, 3);

  return (
    <section className="best-sellers">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>
        <p className="section-subtitle">
          Our most loved hair extensions chosen by thousands of customers
        </p>
        
        <div className="best-sellers-grid">
          {displayProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              addToCart={addToCart}
              showBadge={true}
            />
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => window.location.href = '/products'}
          >
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;