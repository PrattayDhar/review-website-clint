import React from 'react';
import './Addservice.css'
const Addservice = () => {
    return (

        <div><section className="get-in-touch">
            <h1 className="title">Add Service</h1>

            <form className="contact-form row">

                <div className="form-field col-lg-6">
                    <input name="title" className="input-text js-input" type="text" required />
                    <label className="label" >Service Title</label>
                </div>
                <div className="form-field col-lg-12 ">
                    <input name="img" className="input-text js-input" type="text" required />
                    <label className="label" >Image Url</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="price" className="input-text js-input" type="text" required />
                    <label className="label" >Price</label>
                </div>

                <div className="form-field col-lg-12">
                    <input name="description" className="input-text js-input" type="text" required />
                    <label className="label" >Description</label>
                </div>
                <div className="form-field col-lg-12">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
            </form>

        </section></div>
    );
};

export default Addservice;