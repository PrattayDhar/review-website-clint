
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Myreview.css';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

const Myreview = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {User} = useContext(AuthContext)
    const [myReview, setReview] = useState([])
   const [updatereview,setUpdatereview]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/?name=${User?.displayName}`)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, [User]);
    
    const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            // console.log('User delet',_id);
            fetch(`http://localhost:5000/myreviews/${_id}`, {
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
    const revupdate=_id=>{
      
        fetch(`http://localhost:5000/myreviewsupdate/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ UpdateReview: updatereview })
        })
            .then(res => res.json())          
    }
    const hndlinput=(event)=>{
        setUpdatereview(event.target.value)
    
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

                                            <button onClick={() => hdlt(review._id)}>Delete Review</button>
                                            <button className='mx-2' variant="primary" onClick={handleShow}>
                                                Update Review
                                            </button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="review" className="form-label">Give Your Review</label>
                                                            <input onChange={hndlinput} type="text" className="form-control" name="hasmn" aria-describedby="review" />
                                                            <div id="review" className="form-text">Update Your Review</div>
                                                        </div>

                                                        <button onClick={() => revupdate(review._id)} className="btn btn-info" >Submit</button>

                                                    </form>
                                                </Modal.Body>

                                            </Modal>

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