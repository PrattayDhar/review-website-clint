
import React, { useState } from 'react';
import './Addservice.css'
const Addservice = () => {
    const [user, setUser] = useState({})
    const addservice = event =>{
        event.preventDefault();
        console.log(user);
        fetch("http://localhost:5000/AddServices",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service Added')
                    event.target.reset()
                }
            })
    }
    const blr = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
    }
    return (

        <div><section className="get-in-touch">
            <h1 className="title">Add Service</h1>

            <form onSubmit={addservice} className="contact-form row">

                <div className="form-field col-lg-6">
                    <input onBlur={blr} name="title" className="input-text js-input " type="text" required />
                    <label className="label my-3" htmlFor='name'>Service Title</label>
                </div>
                <div className="form-field col-lg-12 ">
                    <input onBlur={blr} name="img" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Image Url</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="price" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Price</label>
                </div>

                <div className="form-field col-lg-12">
                    <input onBlur={blr} name="description" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Description</label>
                </div>
                <div className="form-field col-lg-12">
                    <button className="submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>

        </section></div>
    );
};

export default Addservice;