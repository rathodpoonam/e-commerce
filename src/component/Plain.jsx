import React,{useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navigation1 from './Navigation1';
import Footer1 from './Footer1';

const Plain = () => {
    useEffect(() => {
        AOS.init({ duration: 10 });
    }, []);
  return (
    <>
    <Navigation1 style={{ marginBottom:'3rem' }}  />
    <div className="card-section">
            <div className="container ">
                <div className="row">
                    <div className="col-md-3 " data-aos="fade-up">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                            <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="100">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="200">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="300">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="300">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="300">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="300">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 " data-aos="fade-up" data-aos-delay="300">
                   <Card className=""  style={{ width: '18rem' ,height:"25rem"}}>
                            <Card.Img variant="top" src="cardimage.webp" />
                             <Card.Body>
                               
                                <div className="card-overlay">
                                    <p>T-shirt name</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <Footer1/>
        </>
  )
}

export default Plain
