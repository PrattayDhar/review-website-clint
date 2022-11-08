import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLoaderData } from 'react-router-dom';
import image1 from '../../images/carosel/best-online-survey-jobs-in-india.jpg'
import image2 from '../../images/carosel/Online-survey-jobs.jpg'
import './home.css'

const Home = () => {
    const limitservice=useLoaderData()
    return (
        <div>
          
            <Carousel className='pt-2 pb-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
            <Row>
                <Col lg="10" className='d-none d-lg-block'>
                </Col>
                <Col lg=""><p>Total service:  {limitservice.length}</p>
                    <Row xs={1} md={3} className="g-4">
                        {
                            limitservice.map(service =>
                                <Col>
                                    <Card className='cardmodel'>
                                        <Card.Img variant="top" src={service.img} style={{ height: '18rem' }} />
                                        <Card.Body>
                                            <h6> Price:{service.price} </h6>
                                        </Card.Body>
                                        <Card.Body>
                                            <p>{service.description.slice(0, 100)}</p>
                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Body className='d-flex  justify-content-around pt-3'>
                                                <Card.Title>{service.title}</Card.Title>
                                                <button className='btn btn-info'><Link to={`/servicedetails/${service._id}`}>Details
                                                </Link>
                                                </button>

                                            </Card.Body>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                    </Row></Col>

            </Row>
              <button className='btn btn-info mt-4 btns'><Link className='text-center' to={'/service'}>View All</Link></button>
        </Container>
          

        </div>
    );
};

export default Home;