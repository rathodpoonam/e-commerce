
import React from 'react';

const ExampleCarouselImage = ({ srcDesktop, srcMobile, text }) => {
  return (
    <div>
            <img src={srcDesktop} alt={text} className="desktop-img"  style={{ width: '100%', height: 'auto' }} />
            <img src={srcMobile} alt={text} className="mobile-img"  style={{ width: '100%', height: 'auto' }} />
    </div>
    // <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
  
  );
};

export default ExampleCarouselImage;

