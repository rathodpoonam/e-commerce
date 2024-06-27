import React from 'react';
import Card from 'react-bootstrap/Card';
import Navigation1 from './Navigation1';
import './css/likeditem.css'

function Cart({ cartItems, handleCartToggle, likedItems, onLikeToggle, cartcount }) {
  return (
    <div>
      <Navigation1 cartcount={cartcount} />
      <p className='title'>Cart Items</p>
      {cartcount == 0 ? (
        <div className="">

          <p className='title2'>Zero items added</p>
          <box-icon name='error'></box-icon>
        </div>
      ) :


        <div className="card-section">
          <div className="container">
            <div className="row">
              {cartItems.map(item => (
                <div key={item.id} className="col-md-3">
                  <div style={{ width: '18rem', height: '25rem' }}>
                    <Card className="custom-card">
                      <Card.Img variant="top" src={item.image} />
                      <box-icon
                        name='heart'
                        type={likedItems.some(likedItem => likedItem.id === item.id) ? 'solid' : 'regular'}
                        onClick={() => onLikeToggle(item)}
                        style={{ position: 'absolute', top: '10px', right: '50px', zIndex: 1, fill: likedItems.some(likedItem => likedItem.id === item.id) ? 'red' : 'white', cursor: 'pointer' }}
                      ></box-icon>
                      <box-icon
                        name='cart-add'
                        type={cartItems.some(item => item.id === item.id) ? 'solid' : 'regular'}
                        onClick={() => handleCartToggle(item)}
                        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1, fill: cartItems.some(item => item.id === item.id) ? 'black' : 'white', cursor: 'pointer' }}
                      ></box-icon>
                      <Card.Body>
                        <div className="card-overlay">
                          <p className='tshirt-name'>{item.name}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>

  );
}

export default Cart;
