import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './css/carousel.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage 
            srcDesktop='desktop_img1.webp' 
            srcMobile='mobile_img1.webp' 
            text="First slide" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            srcDesktop='desktop_img2.webp' 
            srcMobile='mobile_img2.webp' 
            text="Second slide" 
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <img src="banner1.jpg" alt="" className=' banner1 container-sm md:mt-4' />
      </div>
      <div>
        <img src="banner2.webp" alt="" className='banner2 mt-5 mb-5' />
      </div>
    </>
  );
}

export default ControlledCarousel;
