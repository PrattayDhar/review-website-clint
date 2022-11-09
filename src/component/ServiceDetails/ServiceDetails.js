import React, { useContext, useEffect, useState } from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Servicedetails.css'
import { ImageViewer } from "react-image-viewer-dv";

const ServiceDetails = () => {
    const [user, setReview] = useState([])
    const singledetails = useLoaderData()
    const { User } = useContext(AuthContext)
    const { _id } = singledetails
    console.log(singledetails);

    const reviewsubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewdit = {
            ServiceId: _id,
            UserName: User?.displayName,
            UserEmail: User?.email,
            UserImage: User?.photoURL,
            UserReview: review,
            Time: new Date()

        }

        fetch("http://localhost:5000/AddReview", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewdit)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Added')
                    event.target.reset()
                }
            })
    }
    console.log(_id);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?id=${_id}`)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);

    return (
        <div className='d-flex'>           
                    <div className="card w-50 h-75 mt-2 mx-2">
                <ImageViewer>
                    <img src={singledetails.img} className="card-img-top" alt="..." />
                </ImageViewer>
                        
                        <div className="card-body">
                            <h5 className="card-title">{singledetails.title}</h5>
                            <p className="card-text">{singledetails.description}</p>
                            <p className="card-text">Price:{singledetails.price}</p></div>
                        <form onSubmit={reviewsubmit}>
                            <div className="mb-3">
                                <label htmlFor="review" className="form-label">Give Your Review</label>
                                <input type="text" className="form-control" name="review" aria-describedby="review" />
                                <div id="review" className="form-text">Please Give Your Honest Review</div>
                            </div>

                            <button className="btn btn-info" type="submit" value="Submit">Submit</button>

                        </form>

                    </div>

                    <div>

                <div className="containers mt-5">
                    <h3 className='mx-5 px-5'>User Review</h3>

                    <div className="d-flex justify-content-center py-3">

                        <div className="mr-2">
                            {
                                user.map(review =>
                                    <div className="cards d-flex">
                                        <div className="px-2 py-2">
                                            <span className="maintxt">{review.UserReview}</span>
                                            <div className="d-flex pt-3">
                                                <div>
                                                    <img  className='rounded-circle w-50' src={review.UserImage} alt="User Pic" />
                                                </div>
                                                <div className="ml-2">
                                                    <span className="name">{review.UserName}</span>
                                                    <p className="para">{review.UserEmail}</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>

                </div>
                    </div>
                

        </div>

    );
};

export default ServiceDetails;
// width = "50" className="rounded-circle"