
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Myreview.css';

import { Col, Row } from 'react-bootstrap';
import { TabTitle } from '../../gfunction';


const Myreview = () => {
    TabTitle('MyReview')
    const {User} = useContext(AuthContext)
    const [myReview, setReview] = useState([])
    const [NewReview, setNewReview] = useState({})
   const handlechange =(event)=>{
    setNewReview(event.target.value)
    console.log(NewReview);
   }
   const HandleUpdate = (id) => {
    fetch(`https://survey-help-server.vercel.app/myreviewsupdate/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ up: NewReview }),
    }).then((res) => res.json())
       .then(alert("Update Done"))
  }
   
    useEffect(() => {
        fetch(`https://survey-help-server.vercel.app/myreviews/?name=${User?.displayName}`)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, [User]);
    
    const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            // console.log('User delet',_id);
            fetch(`https://survey-help-server.vercel.app/myreviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('user removed')
                        const dltreview = myReview.filter(rev => rev._id !== _id)
                        setReview(dltreview)
                    }
                });
        }
    }
  
    return (
        <div>
            <h2>My Review</h2>
         <Row>
                <Col lg="10" className='d-none d-lg-block'>
                </Col>
                <Row xs={1} md={3} className="g-4">
                    {
                        myReview.map(review =>
                            <div className="cards mx-2">
                                <div className="px-2 py-2">
                                    <span className="maintxt">{review.UserReview}</span>
                                    <div className="d-flex pt-3">
                                        <div>
                                            <img className='rounded-circle w-50' src={review.UserImage} alt="User Pic" />
                                        </div>
                                        <div className="ml-2">
                                            <span className="name">{review.UserName}</span>
                                            <p className="para">{review.UserEmail}</p>
                                            <p className="para">{review.Time}</p>
                                                <button onClick={() => hdlt(review._id)} className="btn btn-info mb-2">Delete Review</button>
                                          
                                            <div className='d-flex'>
                    
                                            <input type="text" className="form-control mb-2"  onChange={handlechange} placeholder="Update Review"/>
                                            <button  onClick={()=>HandleUpdate(review._id) } className="btn btn-info mx-2">submit</button>
                                           </div>
                                         
                                           
                                            

                                              
                                            
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    }
                </Row>
         </Row>
            
                       
        </div>
    );
};

export default Myreview;