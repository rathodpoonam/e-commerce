import React from 'react';
import './css/likeditem.css';
import Navigation1 from './Navigation1';
import Card from 'react-bootstrap/Card';


function LikedItems({ likedItems, onLikeToggle }) {


  return (
    <>
      <Navigation1 />
      <p className='title'>Liked Items</p>

      <div className="card-section">
        <div className="container">
          <div className="row">
            {likedItems.map((item) => (
              <div key={item.id} className="col-md-3">
                <div style={{ width: '18rem', height: '25rem' }}>
                  <Card className="custom-card">
                    <Card.Img variant="top" src={item.image} />
                    <box-icon
                      name='heart'
                      type={likedItems.some(item => item.id === item.id) ? 'solid' : 'regular'}
                      onClick={() => onLikeToggle(item)}
                      style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1, fill: likedItems.some(item => item.id === item.id) ? 'red' : 'white', cursor: 'pointer' }}
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
    </>
  );
}

export default LikedItems;
