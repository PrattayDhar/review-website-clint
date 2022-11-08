import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/carosel/best-online-survey-jobs-in-india.jpg'
import image2 from '../../images/carosel/Online-survey-jobs.jpg'

const Home = () => {
    return (
        <div>
           <h1>Home</h1> 
            <Carousel>
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
        </div>
    );
};

export default Home;