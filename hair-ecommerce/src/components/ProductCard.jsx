import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, showBadge = false, badgeContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Reset animation after 500ms
    setTimeout(() => setIsAdding(false), 500);
  };

  const formatCategory = (category) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Effects */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          loading="lazy"
        />
        
      

        {/* Badge */}
        {showBadge && (
          <div className="product-badge">
            <div className="badge-content">
              {badgeContent || (
                <svg className="badge-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="currentColor"/>
                </svg>
              )}
              <span>Bestseller</span>
            </div>
          </div>
        )}

        {/* New Arrival Badge */}
        {product.new && (
          <div className="new-badge">
            <svg className="new-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>New</span>
          </div>
        )}

        {/* Sale Badge */}
        {product.sale && (
          <div className="sale-badge">
            <svg className="sale-icon" viewBox="0 0 24 24" fill="none">
              <path d="M14.65 8.93274L8.625 15.0673" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.977 8.93196L15.023 15.068" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 15H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Sale</span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="product-info">
        {/* Category Tag */}
        <div className="category-tag">
          <svg className="tag-icon" viewBox="0 0 24 24" fill="none">
            <path d="M7 7H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{formatCategory(product.category)}</span>
        </div>

        {/* Product Name */}
        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>

        {/* Description (Optional) */}
        {product.description && (
          <p className="product-description">
            {product.description.substring(0, 80)}...
          </p>
        )}

        {/* Rating (Optional) */}
        {product.rating && (
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="star-icon"
                  viewBox="0 0 24 24" 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
              ))}
            </div>
            <span className="rating-text">{product.rating.toFixed(1)}</span>
            {product.reviewCount && (
              <span className="review-count">({product.reviewCount} reviews)</span>
            )}
          </div>
        )}

        {/* Price & Add to Cart */}
        <div className="product-footer">
          <div className="price-container">
            <div className="current-price">
              <span className="currency">$</span>
              <span className="price">{product.price.toFixed(2)}</span>
            </div>
            {product.originalPrice && (
              <div className="original-price">
                <span className="currency">$</span>
                <span className="price">{product.originalPrice.toFixed(2)}</span>
              </div>
            )}
          </div>

          <button 
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            disabled={isAdding}
          >
            {isAdding ? (
              <>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Added!</span>
              </>
            ) : (
              <>
                <svg className="cart-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Add to Cart</span>
              </>
            )}
            {!isAdding && (
              <svg className="plus-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>100% Human Hair</span>
          </div>
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Double Drawn</span>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="hover-border"></div>
    </div>
  );
};

export default ProductCard;