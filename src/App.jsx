import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plain from './component/Plain';
import Home from './component/Home';
import LikedItems from './component/LikedItems';
import Login from './component/Login';
import Cart from './component/Cart'; // Import Cart component

function App() {
  const [likedItems, setLikedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleLikeToggle = (item) => {
    // Toggle liked items
    setLikedItems(prevLikedItems => {
      if (prevLikedItems.some(likedItem => likedItem.id === item.id)) {
        return prevLikedItems.filter(likedItem => likedItem.id !== item.id);
      } else {
        return [...prevLikedItems, item];
      }
    });
  };

  const handleCartToggle = (item) => {
    // Toggle cart items
    setCartItems(prevCartItems => {
      if (prevCartItems.some(cartItem => cartItem.id === item.id)) {
        return prevCartItems.filter(cartItem => cartItem.id !== item.id);
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home likedItems={likedItems} onLikeToggle={handleLikeToggle} onCartToggle={handleCartToggle} />} />
        <Route path="/plain-tshirt" element={<Plain />} />
        <Route path="/liked" element={<LikedItems likedItems={likedItems} onLikeToggle={handleLikeToggle} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Route for Cart component */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
