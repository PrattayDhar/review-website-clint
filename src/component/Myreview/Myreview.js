
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Myreview.css';

const Myreview = () => {
    const {User} = useContext(AuthContext)
    const [myReview, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/?name=${User?.displayName}`)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, [User]);
    
    const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        console.log(agree);
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
    return (
        <div>
         
            <div className="containers mt-5">
                <h3 className='mx-5 px-5'>My Review</h3>

                <div className="d-flex justify-content-center py-3">

                    <div className="mr-2">
                        {
                            myReview.map(review =>
                                <div className="cards d-flex">
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
                                                <button className='mt-2' >Update Review</button>
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
    );
};

export default Myreview;