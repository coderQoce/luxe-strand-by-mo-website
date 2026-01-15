import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, showBadge = false }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Reset animation after 500ms
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const getStockStatus = (stock) => {
    if (stock > 10) return { text: 'In Stock', class: 'in-stock' };
    if (stock > 0) return { text: `Only ${stock} left`, class: 'low-stock' };
    return { text: 'Out of Stock', class: 'out-of-stock' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="product-card">
      {/* Product Badge */}
      {showBadge && (
        <div className="product-badge">
          {product.featured ? 'Featured' : 'Popular'}
        </div>
      )}
      
      {/* Low Stock Badge */}
      {product.stock > 0 && product.stock <= 10 && (
        <div className="low-stock-badge">
          Low Stock
        </div>
      )}

      {/* Product Image */}
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {/* Product Meta */}
        <div className="product-meta">
          <span className="product-length">📏 {product.length}</span>
          {product.rating && (
            <span className="product-rating">
              ⭐ {product.rating} <span style={{ opacity: 0.7, fontSize: '0.85rem' }}>({Math.floor(Math.random() * 100) + 50})</span>
            </span>
          )}
        </div>

        {/* Price and Add to Cart */}
        <div className="product-price-section">
          <div className="product-price">
            <span className="price-amount">${product.price.toFixed(2)}</span>
            <span className={`stock-status ${stockStatus.class}`}>
              {stockStatus.text}
            </span>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            aria-label={`Add ${product.name} to cart`}
            style={{
              opacity: product.stock === 0 ? 0.6 : 1,
              cursor: product.stock === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            {isAdding ? (
              <>
                <span className="spinner" style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite'
                }}></span>
                Added!
              </>
            ) : product.stock === 0 ? (
              'Out of Stock'
            ) : (
              <>
                <span>🛒</span>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Add spinner animation to global CSS
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export default ProductCard;