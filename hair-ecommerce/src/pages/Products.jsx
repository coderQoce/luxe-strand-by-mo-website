import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import './product.css';

const Products = ({ 
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
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && ['straight', 'curly', 'body-wave', 'deep-wave', 'kinky-straight'].includes(category)) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const categories = [
    { id: 'all', name: 'All Products', icon: 'M4 6H20M4 12H20M4 18H20', count: products.length },
    { id: 'straight', name: 'Straight Hair', icon: 'M5 12H19', count: products.filter(p => p.category === 'straight').length },
    { id: 'curly', name: 'Curly Hair', icon: 'M9 12C9 12 11 16 12 16C13 16 15 12 15 12M3 12C3 12 5 16 6 16C7 16 9 12 9 12M15 12C15 12 17 16 18 16C19 16 21 12 21 12', count: products.filter(p => p.category === 'curly').length },
    { id: 'body-wave', name: 'Body Wave', icon: 'M4 12C4 12 8 8 12 8C16 8 20 12 20 12M4 12C4 12 8 16 12 16C16 16 20 12 20 12', count: products.filter(p => p.category === 'body-wave').length },
    { id: 'deep-wave', name: 'Deep Wave', icon: 'M4 12C4 12 6 8 12 8C18 8 20 12 20 12M4 12C4 12 6 16 12 16C18 16 20 12 20 12', count: products.filter(p => p.category === 'deep-wave').length },
    { id: 'kinky-straight', name: 'Kinky Straight', icon: 'M5 12H19M8 8V16M16 8V16', count: products.filter(p => p.category === 'kinky-straight').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryTitle = (category) => {
    const titles = {
      'all': 'Our Hair Collection',
      'straight': 'Straight Hair',
      'curly': 'Curly Hair',
      'body-wave': 'Body Wave Hair',
      'deep-wave': 'Deep Wave Hair',
      'kinky-straight': 'Kinky Straight Hair'
    };
    return titles[category] || 'Hair Collection';
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      'all': 'Premium quality human hair extensions for every style',
      'straight': 'Sleek, smooth, and effortlessly straight hair extensions',
      'curly': 'Bouncy, defined curls for voluminous hairstyles',
      'body-wave': 'Natural-looking waves for added volume and movement',
      'deep-wave': 'Luxurious deep waves for maximum texture and volume',
      'kinky-straight': 'The perfect blend of texture and manageability'
    };
    return descriptions[category] || 'Premium hair extensions';
  };

  return (
    <>
      {/* Navbar - Fixed at the top */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        isFixed={true}
      />

      {/* Cart Modal */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        cartTotal={cartTotal}
      />

      <div className="products-page">
        <div className="container">
          {/* Page Header */}
          <div className="page-header">
            <div className="header-content">
              <svg className="header-icon" viewBox="0 0 24 24" fill="none">
                <path d="M8 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1>{getCategoryTitle(selectedCategory)}</h1>
              <p>{getCategoryDescription(selectedCategory)}</p>
            </div>
            <div className="product-count">
              <svg className="count-icon" viewBox="0 0 24 24" fill="none">
                <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{filteredProducts.length} Products</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filter-container">
            <div className="filter-header">
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none">
                <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Filter by Category</h3>
            </div>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                    <path d={category.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid-container">
            {filteredProducts.length > 0 ? (
              <>
                <div className="products-grid">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                      showBadge={product.featured}
                      badgeContent={
                        <svg className="featured-icon" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                            fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      }
                    />
                  ))}
                </div>
                
                {/* View All Categories Button */}
                {selectedCategory !== 'all' && (
                  <div className="view-all-container">
                    <svg className="divider-icon" viewBox="0 0 200 10" fill="none">
                      <path d="M0 5C50 5, 150 5, 200 5" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" strokeLinecap="round"/>
                    </svg>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="view-all-btn"
                    >
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>View All Categories</span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* No Products Found */
              <div className="no-products">
                <svg className="no-products-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8L12 12M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3>No Products Found</h3>
                <p>We couldn't find any products in this category. Try selecting a different category or check back soon for new arrivals.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="btn-primary"
                >
                  <svg className="shop-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7H4V5L6 3H18L20 5V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V7" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;