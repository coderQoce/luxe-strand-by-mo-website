import React, { useState } from 'react';

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

    const whatsappNumber = '07035131449'; // WhatsApp number
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="checkout-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Complete Your Order</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={customerInfo.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleChange}
              placeholder="Enter your email (optional)"
            />
          </div>
          
          <div className="form-group">
            <label>Delivery Address *</label>
            <textarea
              name="address"
              value={customerInfo.address}
              onChange={handleChange}
              placeholder="Enter complete delivery address"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="notes"
              value={customerInfo.notes}
              onChange={handleChange}
              placeholder="Any special instructions or notes (optional)"
              rows="3"
            />
          </div>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <div>
                  <strong>{item.name}</strong>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                    Qty: {item.quantity} × ${item.price.toFixed(2)}
                  </div>
                </div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))}
            <div className="summary-total">
              <span>Total Amount:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            {cartTotal >= 150 && (
              <div style={{
                background: 'var(--light-purple)',
                padding: '0.75rem',
                borderRadius: '8px',
                marginTop: '1rem',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--deep-purple)'
              }}>
                
              </div>
            )}
          </div>
          
          <div className="modal-actions">
            <button className="cancel-btn" onClick={onClose}>
              Continue Shopping
            </button>
            <button className="whatsapp-btn" onClick={handleCheckout}>
              Complete Order via WhatsApp
            </button>
          </div>
          
          <div className="disclaimer">
            You'll be redirected to WhatsApp to send your order details. 
            Our team will contact you within 24 hours to confirm and arrange payment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;