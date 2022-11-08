import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
    const allservice = useLoaderData()

    return (
        <div>


            <Container>
                <Row>
                    <Col lg="10" className='d-none d-lg-block'>
                    </Col>
                    <Col lg=""><p>Total service:  {allservice.length}</p>
                        <Row xs={1} md={3} className="g-4">
                            {
                                allservice.map(service =>
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
            </Container>
        </div>
    );
};

export default Service;