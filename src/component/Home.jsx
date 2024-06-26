import React from 'react';
import Navigation1 from './Navigation1';
import ControlledCarousel from './ControlledCarousel';
import CardSection from './CardSection';
import Footer1 from './Footer1';

const Home = ({likedItems, onLikeToggle, onCartToggle  }) => {
  return (
    <div>
      <Navigation1 />
      <ControlledCarousel />
      <CardSection onLikeToggle={onLikeToggle} onCartToggle={onCartToggle} likedItems={likedItems} />
      <Footer1 />
    </div>
  );
}

export default Home;
