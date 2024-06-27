import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plain from './component/Plain';
import Home from './component/Home';
import LikedItems from './component/LikedItems';
import Login from './component/Login';
import Cart from './component/Cart'; // Import Cart component

function App({ onLikeToggle, onCartToggle}) {
  const [likedItems, setLikedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartcount, setcartcount] = useState(0);
  const [likecount, setlikecount] = useState(0)

  const handleLikeToggle = (item) => {
   
    setLikedItems(prevLikedItems => {
      if (prevLikedItems.some(likedItem => likedItem.id === item.id)) {
        setlikecount(prevCount=>prevCount - 1);
        return prevLikedItems.filter(likedItem => likedItem.id !== item.id);
      } else {
        setlikecount(prevCount => prevCount + 1);
        return [...prevLikedItems, item];
      }
    });
  };

const handleCartToggle = (item) => {
    // Toggle cart items and update cart count
    setCartItems(prevCartItems => {
      if (prevCartItems.some(cartItem => cartItem.id === item.id)) {
        setcartcount(prevCount => prevCount - 1);
        return prevCartItems.filter(cartItem => cartItem.id !== item.id);
      } else {
        setcartcount(prevCount => prevCount + 1);
        return [...prevCartItems, item];
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cartcount={cartcount} likecount={likecount} likedItems={likedItems} onLikeToggle={handleLikeToggle} onCartToggle={handleCartToggle} cartItems={cartItems} />} />

        {/* <Route path="/plain-tshirt" element={<Plain />} /> */}

        <Route path="/liked" element={<LikedItems likedItems={likedItems} onLikeToggle={handleLikeToggle}  cartItems={cartItems} handleCartToggle={handleCartToggle} cartcount={cartcount}  likecount={likecount} />} />

        <Route path="/cart" element={<Cart cartItems={cartItems} handleCartToggle={handleCartToggle} likedItems={likedItems} onLikeToggle={handleLikeToggle} cartcount={cartcount} />} />

        <Route path='/plain-tshirt' element={<Plain  onLikeToggle={onLikeToggle} onCartToggle={onCartToggle} likedItems={likedItems} cartItems={cartItems} cartcount={cartcount}/>}/>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
