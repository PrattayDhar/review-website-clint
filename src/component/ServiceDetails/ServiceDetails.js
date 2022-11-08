import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const singledetails=useLoaderData()
    return (
        <div>
            {/* <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={singledetails.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div ><h5 className="card-title">{singledetails.title}</h5>
                                <p className="card-text">{singledetails.description}</p>
                                <p className="card-text">{singledetails.price}</p></div>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={singledetails.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">{singledetails.title}</h5>
                            <p className="card-text">{singledetails.description}</p>
                            <p className="card-text">{singledetails.price}</p></div>
                            </div>
                    </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Review</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>

                </div>
                </div>
                
              
              
            </div>
       
    );
};

export default ServiceDetails;