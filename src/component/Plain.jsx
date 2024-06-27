import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navigation1 from './Navigation1';
import Footer1 from './Footer1';

const Plain = ({ onLikeToggle, onCartToggle, likedItems = [], cartItems = [], cartcount, likecount }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const tshirts = [
    { id: 1, image: 'plain (2).png', name: 'T-shirt 1' },
    { id: 2, image: 'plain (1).png', name: 'T-shirt 2' },
    { id: 3, image: 'plain (2).png', name: 'T-shirt 3' },
  ];

  return (
    <>
      <Navigation1 style={{ marginBottom: '3rem' }} cartcount={cartcount} likecount={likecount} />
      <div className="card-section">
        <div className="container">
          <div className="row">
            {tshirts.map((tshirt, index) => (
              <div key={tshirt.id} className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100} style={{ paddingLeft: '0' }}>
                <Card className="custom-card">
                  <Card.Img variant="top" src={tshirt.image} />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
                    <box-icon
                      name='heart'
                      type={likedItems.some(item => item.id === tshirt.id) ? 'solid' : 'regular'}
                      onClick={() => onLikeToggle(tshirt)}
                      color={likedItems.some(item => item.id === tshirt.id) ? 'red' : 'white'}
                      style={{
                        cursor: 'pointer',
                        marginRight: '10px'
                      }}
                    ></box-icon>
                    <box-icon
                      name='cart-add'
                      type={cartItems.some(item => item.id === tshirt.id) ? 'solid' : 'regular'}
                      onClick={() => onCartToggle(tshirt)}
                      color={cartItems.some(item => item.id === tshirt.id) ? 'black' : 'white'}
                      style={{
                        cursor: 'pointer'
                      }}
                    ></box-icon>
                  </div>

                  <Card.Body>
                    <div className="card-overlay">
                      <p>{tshirt.name}</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default Plain;
