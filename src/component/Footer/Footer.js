import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark.bg-gradient'>
            <div className="container-fluid mt-5 ">
                <div className="card bg-white mx-5">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 className="font-weight-bold mr-2 px-3 s1 "> Survey Helper </h2>
                                    <h6 className='s2'>By Prattay</h6>
                                </div>
                                <p className="card-text">There are a number of ways you can get paid from taking surveys. Many offer cash or vouchers and some will provide free products. For some, you'll have to amass a certain number of reward points before this can be cashed out. </p>
                                <div className="social mt-2 mb-3"> <i className="fa fa-facebook-official fa-lg"></i> <i className="fa fa-instagram fa-lg"></i> <i className="fa fa-twitter fa-lg"></i> <i className="fa fa-linkedin-square fa-lg"></i> <i className="fa fa-facebook"></i> </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3"></div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            <h5 className="heading">Services</h5>
                            <ul className='heading'>
                                <li>UK Survey</li>
                                <li>USA Survey</li>
                                <li>UK/USA Mobile</li>
                                <li>UK/USA IP</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row s3" >
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-left">
                                <p><i className="fa fa-copyright"></i> 2022 survey Helper By Prattay</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-right mr-4 d-flex policy">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default Footer;