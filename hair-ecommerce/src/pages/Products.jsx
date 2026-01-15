import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Products = ({ addToCart }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && ['straight', 'curly', 'body-wave', 'deep-wave', 'kinky-straight'].includes(category)) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'straight', name: 'Straight Hair', count: products.filter(p => p.category === 'straight').length },
    { id: 'curly', name: 'Curly Hair', count: products.filter(p => p.category === 'curly').length },
    { id: 'body-wave', name: 'Body Wave', count: products.filter(p => p.category === 'body-wave').length },
    { id: 'deep-wave', name: 'Deep Wave', count: products.filter(p => p.category === 'deep-wave').length },
    { id: 'kinky-straight', name: 'Kinky Straight', count: products.filter(p => p.category === 'kinky-straight').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '3rem',
            color: 'var(--dark-purple)',
            marginBottom: '0.5rem'
          }}>
            {selectedCategory === 'all' ? 'Our Hair Collection' : 
             selectedCategory === 'straight' ? 'Straight Hair' :
             selectedCategory === 'curly' ? 'Curly Hair' :
             selectedCategory === 'body-wave' ? 'Body Wave Hair' :
             selectedCategory === 'deep-wave' ? 'Deep Wave Hair' : 'Kinky Straight Hair'}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>
            {selectedCategory === 'all' ? 'Premium quality human hair extensions' :
             `Premium ${selectedCategory.replace('-', ' ')} hair extensions - ${filteredProducts.length} products available`}
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter-scroll">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.name} <span style={{ marginLeft: '0.25rem', opacity: 0.8 }}>({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid - 3 columns */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              showBadge={product.featured}
            />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem',
            background: 'var(--light-purple)',
            borderRadius: 'var(--border-radius)',
            marginTop: '2rem'
          }}>
            <h3 style={{ color: 'var(--dark-purple)', marginBottom: '1rem' }}>
              No products found in this category
            </h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Try selecting a different category or check back soon for new arrivals.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn btn-primary"
            >
              View All Products
            </button>
          </div>
        )}

        {/* View All Products Button (only shows when filtered) */}
        {selectedCategory !== 'all' && filteredProducts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn btn-secondary"
            >
              View All Categories
            </button>
          </div>
        )}
      </div>
      
    
    </div>
        
  );
};

export default Products;