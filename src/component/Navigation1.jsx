import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation1 = ({cartcount,likecount}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [offcanvasExpanded, setOffcanvasExpanded] = useState(false);

    const handleOffcanvasToggle = () => {
        setOffcanvasExpanded(!offcanvasExpanded);
        setShowSearch(false); // Close search on offcanvas toggle
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-yellow">
                <marquee loop className='cod'>COD is Available | Delivery Pan India</marquee>
            </Navbar>
            <Navbar expand="lg" className="bg-black">
                <div className="left">
                    <box-icon name='map' color='#fdfafa'></box-icon>
                    <p color='#fdfafa'>TRACK YOUR ORDER</p>
                </div>
                <div className="right">
                    <Link id='loginBtn' className='btn' color='#fdfafa' to='/login'>
                        LOG IN
                    </Link>
                    <span style={{ color: '#fdfafa', padding: '0 10px', paddingTop: '7px' }}>|</span>
                    <Link id='loginBtn' className='btn' color='#fdfafa' to='/signup'>
                        SIGNUP
                    </Link>
                </div>
            </Navbar>
            <Navbar expand="md" className="" style={{ backgroundColor: 'white' }}>
                <Container>
                    <Navbar.Brand href="#"><img src='logo.webp' className='logo' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="hamburger-icon" onClick={handleOffcanvasToggle} />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="end"
                        show={offcanvasExpanded}
                        onHide={() => setOffcanvasExpanded(false)}
                    >
                        <Offcanvas.Header closeButton className="offcanvas-header">
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="offcanvas-body">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <button className='nav-btn'>
                                    <Link to='/' className='gm-text'>Home</Link>
                                </button>
                                <button className='nav-btn'>
                                    <Link to='/plain-tshirt' className='gm-text'>Plain T-shirt</Link>
                                </button>
                                <button className='nav-btn'>
                                    <Link to="/link" className='gm-text'>Kids T-shirt</Link>
                                </button>
                                <button className='nav-btn'>
                                    <Link to="/link" className='gm-text'>Combo Pack</Link>
                                </button>
                            </Nav>
                            <section
                                className={`ms-auto dis-search ${offcanvasExpanded ? 'offcanvas-expanded' : ''}`}
                                id="basic-navbar-nav"
                            >
                                {showSearch && (
                                    <div className="search-box">
                                        <input type="text" style={{ border: 'none' }} placeholder="Search..." />
                                    </div>
                                )}
                                <button className='nav-btn' onClick={toggleSearch}>
                                    <box-icon name='search'></box-icon>
                                </button>
                                <Link to='/login' className="icons"><box-icon name='user'></box-icon></Link>
                                <Link to='/liked' className="icons"><box-icon name='heart'></box-icon></Link>
                                <Link to='/cart' className="icons"><box-icon name='cart'></box-icon>
                                    <div className="nav-cart-count">{cartcount}</div>
                                </Link>
                            </section>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation1;
