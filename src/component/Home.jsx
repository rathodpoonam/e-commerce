import React from 'react';
import Navigation1 from './Navigation1';
import ControlledCarousel from './ControlledCarousel';
import CardSection from './CardSection';
import Footer1 from './Footer1';

const Home = ({ likedItems, onLikeToggle, onCartToggle, cartItems, cartcount  }) => {
  return (
    <div>
      <Navigation1 cartcount={cartcount} />
      <ControlledCarousel />
      <CardSection onLikeToggle={onLikeToggle} onCartToggle={onCartToggle} likedItems={likedItems} cartItems={cartItems} />
      <Footer1 />
    </div>
  );
}

export default Home;
