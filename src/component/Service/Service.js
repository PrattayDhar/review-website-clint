import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import { TabTitle } from '../../gfunction';


const Service = () => {
     TabTitle('service')
    const [loading,setloading] = useState(true);
    const [allservice,setallservice] = useState();
    useEffect(() => {
        fetch(`https://survey-help-server.vercel.app/services`)
            .then((res) => res.json())
            .then((data) => {
                setallservice(data);setloading(false)});   
    }, []);
 

    return (
        <div>


            <Container>
                <Row>
                    <Col lg="10" className='d-none d-lg-block'>
                    </Col>
                    <Col lg="">
                        <Row xs={1} md={3} className="g-4">
                            {loading ? <div className=''><div className="spinner-border text-primary spin" role="status">
                                
                            </div></div> :
                                allservice.map(service =>
                                    <Col>
                                        <Card className='cardmodel'>
                                            <Card.Img variant="top" src={service.img} style={{ height: '18rem' }} />
                                            <Card.Body className='cardmodel'>
                                                <h6> Price:{service.price} </h6>
                                            </Card.Body>
                                            <Card.Body className='cardmodel'>
                                                <p>{service.description.slice(0, 100)}</p>
                                            </Card.Body>
                                            <Card.Body className='cardmodel'>
                                                <Card.Body className='d-flex  justify-content-around pt-3'>
                                                    <Card.Title>{service.title}</Card.Title>
                                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none' }} to={`/servicedetails/${service._id}`}>Details
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