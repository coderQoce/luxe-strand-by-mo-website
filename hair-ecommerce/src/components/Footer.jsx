import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Luxe_by_MO</div>
            <p className="footer-description">
              Premium quality hair extensions and wigs. 
              We provide 100% human hair with natural texture 
              and shine for the perfect look.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for exclusive offers and hair care tips.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Luxe_by_MO. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Premium Hair Extensions | WhatsApp Orders: +(234)70 4496 6950
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;