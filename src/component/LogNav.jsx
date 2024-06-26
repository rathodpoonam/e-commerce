import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const LogNav = () => {
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    return (
        <div>
            <Navbar expand="lg" className="bg-yellow">
                <marquee loop className='cod'>COD is Available | Delivery Pan India</marquee>
            </Navbar>
            <Navbar expand="lg" className="bg-black">
                <div className="left ">
                    <box-icon name='map' color='#fdfafa' ></box-icon>
                    <p color='#fdfafa'>TRACK YOUR ORDER</p>
                </div>
                {/* <div className="right" >
                    <Link id='loginBtn' className='btn' color='#fdfafa' to='/login'>
                        LOG IN
                    </Link>
                    <span style={{ color: '#fdfafa', padding: '0 10px', paddingTop: '7px' }}>|</span>
                    <Link id='loginBtn' className='btn' color='#fdfafa' to='/login'>
                        SIGNUP
                    </Link>

                </div> */}
            </Navbar>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="" style={{ backgroundColor: 'white' }}>
                    <Container >
                        <Navbar.Brand href="#" ><img src='logo.webp' className='logo' alt='logo'></img></Navbar.Brand>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <button className='nav-btn' >

                                        <Link to='/' className='gm-text' >Home</Link>
                                    </button>

                                    <button className='nav-btn'>

                                        <Link to='/plain-tshirt' className='gm-text' >Plain T-shirt</Link>
                                    </button>

                                    <button className='nav-btn'>
                                        <Nav.Link href="#link" className='gm-text'>Kids T-shirt</Nav.Link>
                                    </button>
                                    <button className='nav-btn'>
                                        <Nav.Link href="#link" className='gm-text'>Combo Pack</Nav.Link>
                                    </button>

                                </Nav>

                                <section id="basic-navbar-nav">
                                    <div expand="lg" className="ms-auto  " style={{ display: 'flex' }}>
                                        {/* <Link to='/'  className="icons" onClick={}><box-icon name='search' ></box-icon></Link> */}
                                        {showSearch && (
                                            <div className="search-box">
                                                <input type="text" style={{ border: 'none' }} placeholder="Search..." />

                                            </div>
                                        )}
                                        <button className='nav-btn' onClick={toggleSearch}>
                                            <box-icon name='search'></box-icon>
                                        </button>
                                        {/* <Nav.Link href="#home"  className="icons" ><box-icon name='search' ></box-icon></Nav.Link> */}
                                        {/* <Nav.Link href="#link" className="icons" ><box-icon name='user'></box-icon></Nav.Link> */}
                                        <Link to='/login' className="icons" ><box-icon name='user'></box-icon></Link>
                                        <Link to='/liked' className="icons" ><box-icon name='heart'></box-icon></Link>
                                        <Link to='/liked' className="icons" ><box-icon name='cart'></box-icon></Link>




                                    </div>
                                </section>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default LogNav
