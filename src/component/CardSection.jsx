import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import AOS from 'aos';

function CardSection({ onLikeToggle, onCartToggle, likedItems, cartItems }) {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    { id: 1, image: 'cardimage.webp', name: 'T-shirt 1' },
    { id: 2, image: 'cardimage1.webp', name: 'T-shirt 2' },
    { id: 3, image: 'cardimage2.webp', name: 'T-shirt 3' },
    { id: 4, image: 'cardimage7.png', name: 'T-shirt 4' },
    { id: 5, image: 'cardimage4.png', name: 'T-shirt 5' },
    { id: 6, image: 'cardimage5.png', name: 'T-shirt 6' },
    { id: 7, image: 'cardimage6.png', name: 'T-shirt 7' },
    { id: 8, image: 'cardimage3.png', name: 'T-shirt 8' },
  ];

  return (
    <div className="card-section">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={card.id} className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100} style={{ paddingLeft: '0' }}>
              <Card className="custom-card">
                <Card.Img variant="top" src={card.image} />
                <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
                  <box-icon
                    name='heart'
                    type={likedItems.some(item => item.id === card.id) ? 'solid' : 'regular'}
                    onClick={() => onLikeToggle(card)}
                    color={likedItems.some(item => item.id === card.id) ? 'red' : 'white'}
                    style={{
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  ></box-icon>
                  <box-icon
                    name='cart-add'
                    type={cartItems.some(item => item.id === card.id) ? 'solid' : 'regular'}
                    onClick={() => onCartToggle(card)} 
                    color={cartItems.some(item => item.id === card.id) ? 'black' : 'white'}
                    style={{
                      cursor: 'pointer'
                    }}
                  ></box-icon>
                </div>

                <Card.Body>
                  <div className="card-overlay">
                    <p>{card.name}</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
