import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('hairCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('hairCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="App">
     
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                addToCart={addToCart}
                cart={cart}
                cartCount={cartCount}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
                cartTotal={cartTotal}
              />
            } 
          />
          
          <Route 
            path="/products" 
            element={
              <Products 
                addToCart={addToCart}
                cart={cart}
                cartCount={cartCount}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
                cartTotal={cartTotal}
              />
            } 
          />
          
          <Route 
            path="/product/:id" 
            element={<ProductDetail addToCart={addToCart} />} 
          />
        </Routes>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
          cartTotal={cartTotal}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;