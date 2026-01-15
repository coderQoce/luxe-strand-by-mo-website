import React, { useState, useEffect } from 'react';
import CheckoutModal from './CheckoutModal';

const Cart = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, clearCart, cartTotal }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
    
    return () => {
      document.body.classList.remove('cart-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Add some beautiful hair extensions to get started!
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue Shopping →
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <span>×</span>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total Amount:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button 
                  className="clear-btn"
                  onClick={clearCart}
                >
                   Clear All
                </button>
                <button 
                  className="checkout-btn"
                  onClick={() => setShowCheckout(true)}
                >
                   Checkout via WhatsApp
                </button>
              </div>
              {/* <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-light)',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                Free shipping on orders over $150
              </p> */}
            </div>
          </>
        )}
      </div>

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
};

export default Cart;