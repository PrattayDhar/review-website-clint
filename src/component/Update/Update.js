import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const stroduser = useLoaderData()
    console.log(stroduser);
    const [user, setUser] = useState()

    const submitbtnupdat = event => {
        event.preventDefault();
        //console.log(user);
        fetch(`http://localhost:5000/myreviewsupdate/${stroduser._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({UpdateReview: user})
        })
         
    }
    const blrchange = event => {
        setUser(event.target.value)
    }


    return (
        <div>
            <form onSubmit={submitbtnupdat}>
                 <div className="mb-3">
                  <label htmlFor="review" className="form-label">Give Your Review</label>
                    <input onChange={blrchange} type="text" className="form-control" name="update" aria-describedby="review" />
                <div id="review" className="form-text">Update Your Review</div>
                </div>

            <button type='submit'  className="btn btn-info" >Submit</button>

            </form>
        </div>
    );
};

export default Update;