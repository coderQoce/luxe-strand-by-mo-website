import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartClick }) => {
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💇‍♀️</span>
          Luxe_by_MO
        </Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>

          <button 
            onClick={() => scrollToSection('faq')}
            className="nav-link-btn"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link-btn"
          >
            Contact
          </button>
          <button className="cart-btn" onClick={onCartClick}>
            <span>🛒 Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;