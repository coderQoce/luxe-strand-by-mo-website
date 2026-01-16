import React, { useState } from 'react';
import './CheckoutModal.css';

const CheckoutModal = ({ cart, cartTotal, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    notes: ''
  });

  const handleChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const orderSummary = cart.map(item => 
      `• ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = `*NEW ORDER - Luxe_by_MO*

* Customer Details:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}
Address: ${customerInfo.address}
${customerInfo.notes ? `Notes: ${customerInfo.notes}` : ''}

* Order Summary:*
${orderSummary}

* Total: $${cartTotal.toFixed(2)}*

* Shipping Details:*
Standard Delivery (3-5 business days)
${cartTotal >= 150 ? ' FREE SHIPPING APPLIED' : 'Shipping: $15'}

* Thank you for your order!*
We'll contact you shortly to confirm details and arrange payment.`;

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all required fields (Name, Phone, Address)');
      return;
    }

    const whatsappNumber = '07035131449';
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="checkout-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-content">
            <svg className="header-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2>Complete Your Order</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <svg className="close-icon" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="form-section">
            <h3 className="section-title">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Personal Information
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>
                  <span>Full Name</span>
                  <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>
                  <span>Phone Number</span>
                  <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22.001 20.1983 21.9431 20.4734 21.8302 20.7275C21.7173 20.9816 21.5521 21.2089 21.3454 21.3944C21.1388 21.5799 20.8953 21.7194 20.6311 21.8041C20.3669 21.8888 20.0878 21.9168 19.812 21.886C16.7422 21.4673 13.7876 20.4516 11.1 18.9C8.69686 17.5347 6.60319 15.6921 4.94 13.49C3.40998 11.1762 2.37082 8.57329 1.89 5.85C1.84822 5.57433 1.86733 5.29288 1.9459 5.02563C2.02447 4.75839 2.16051 4.51213 2.34432 4.30372C2.52813 4.09531 2.75519 3.92986 3.0094 3.81886C3.26362 3.70786 3.53874 3.65405 3.815 3.661C6.848 3.724 8.976 4.382 11 5.5C11.324 5.665 11.607 5.904 11.827 6.2L13.531 8.47C13.9649 9.04667 14.0845 9.79701 13.8523 10.4753C13.6202 11.1536 13.0667 11.672 12.376 11.85C11.39 12.1 10.556 12.659 9.961 13.438C10.3103 14.1461 10.7571 14.807 11.29 15.403C11.823 15.999 12.437 16.524 13.115 16.964C13.881 17.532 14.415 18.367 14.615 19.358C14.782 20.05 15.295 20.604 15.976 20.834C16.657 21.064 17.409 20.94 17.984 20.5L20.267 18.794C20.5616 18.5733 20.7992 18.2894 20.9628 17.9639C21.1264 17.6385 21.2115 17.2805 21.2115 16.9176C21.2115 16.5547 21.1264 16.1967 20.9628 15.8713C20.7992 15.5458 20.5616 15.2619 20.267 15.041L18.598 13.83C17.8972 13.3511 17.0632 13.1256 16.2228 13.1881C15.3825 13.2505 14.5856 13.5971 13.97 14.17" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleChange}
                  placeholder="Enter your email (optional)"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>
                <span>Delivery Address</span>
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleChange}
                  placeholder="Enter complete delivery address"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Additional Notes</label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <textarea
                  name="notes"
                  value={customerInfo.notes}
                  onChange={handleChange}
                  placeholder="Any special instructions or notes (optional)"
                  rows="3"
                />
              </div>
            </div>
          </div>
          
          <div className="order-summary-section">
            <h3 className="section-title">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Order Summary
            </h3>
            
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <strong className="item-name">{item.name}</strong>
                    <div className="item-details">
                      <span className="item-quantity">Qty: {item.quantity}</span>
                      <span className="item-price">× ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <strong className="item-total">${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="shipping">
                <span>Shipping</span>
                <span className={cartTotal >= 150 ? 'free-shipping' : ''}>
                  {cartTotal >= 150 ? 'FREE' : '$15.00'}
                </span>
              </div>
              <div className="grand-total">
                <span>Total Amount</span>
                <span className="total-amount">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            {cartTotal >= 150 && (
              <div className="free-shipping-banner">
                <svg className="shipping-badge" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13H19L22 8L19.5 2H8.5L6 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 13L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 13L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <div>
                  <strong>Congratulations!</strong>
                  <p>You've qualified for free shipping!</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="modal-actions">
            <button className="cancel-btn" onClick={onClose}>
              <svg className="action-icon" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Continue Shopping
            </button>
            <button className="whatsapp-btn" onClick={handleCheckout}>
              <svg className="whatsapp-logo" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Complete Order via WhatsApp
            </button>
          </div>
          
          <div className="disclaimer">
            <svg className="disclaimer-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>Important Note:</strong>
              <p>You'll be redirected to WhatsApp to send your order details. Our team will contact you within 24 hours to confirm and arrange payment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;