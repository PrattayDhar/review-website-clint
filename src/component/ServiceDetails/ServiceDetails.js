import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetails = () => {
    const [user, setReview] = useState([])
    const singledetails=useLoaderData()
    const {User}=useContext(AuthContext)
    const{_id}=singledetails
    console.log(singledetails);

    const reviewsubmit = event => {
        event.preventDefault();
        const form=event.target;
        const review=form.review.value;
        const reviewdit={
            ServiceId:_id,
            UserName:User?.displayName,
            UserEmail:User?.email,
            UserImage:User?.photoURL,
            UserReview:review,
            Time:new Date()

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
        <div>
            <div className="row row-cols-2 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={singledetails.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">{singledetails.title}</h5>
                            <p className="card-text">{singledetails.description}</p>
                            <p className="card-text">{singledetails.price}</p></div>
                        <form onSubmit={reviewsubmit}>
                            <div class="mb-3">
                                <label htmlFor="review" class="form-label">Give Your Review</label>
                                <input  type="text" class="form-control" name="review" aria-describedby="review"/>
                                    <div id="review" class="form-text">Please Give Your Honest Review</div>
                            </div>
                            
                            <button className="btn btn-info" type="submit" value="Submit">Submit</button>
                           
                            </form>
                        
                        </div>
                          
                    </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{user.length}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>

                </div>
                </div>
                
              
              
            </div>
       
    );
};

export default ServiceDetails;