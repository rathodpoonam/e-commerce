import React from 'react';
import Card from 'react-bootstrap/Card';
import Navigation1 from './Navigation1';

function Cart({ cartItems, handleCartToggle }) {
    return (
        <div>
            <Navigation1 />
            <p className='title'>Cart Items</p>
            <div className="card-section">
                <div className="container">
                    <div className="row">
                        {cartItems.map(item => (
                            <div key={item.id} className="col-md-3">
                                <Card className="custom-card">
                                    <Card.Img variant="top" src={item.image} />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            zIndex: 1
                                        }}
                                    >
                                        <box-icon
                                            name='cart-add'
                                            type={cartItems.some(cartItem => cartItem.id === item.id) ? 'solid' : 'regular'}
                                            onClick={() => handleCartToggle(item)}
                                            color={cartItems.some(cartItem => cartItem.id === item.id) ? 'yellow' : 'black'}
                                            style={{ cursor: 'pointer' }}
                                        ></box-icon>
                                    </div>
                                    <Card.Body>
                                        <div className="card-overlay">
                                            <p className='tshirt-name'>{item.name}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
