
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Getstarted.css'

const Getstarted = () => {
    const { Login, LoginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState();
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const HandleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.logemail.value;
        const password = form.logpass.value;
        Login(email, password)
            .then(() => {
                navigate(from, { replace: true })
                alert("Login Successful");
                form.reset();
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const HandleGoogle = () => {
        LoginWithGoogle(provider)
            .then((result) => {
                navigate(from, { replace: true })

                alert("Login Successful");

            })
            .catch((error) => {
                setError(error);
            });
    };
    const { Register, UpdateUser } = useContext(AuthContext);
    const Handlesingup = (event) => {
        event.preventDefault();
        const form = event.target;
        const Username = form.logname.value;
        const photoURL = form.photourl.value;
        const email = form.logemail.value;
        const password = form.logpass.value;
        Register(email, password)
            .then(() => {
                navigate(from, { replace: true })
                console.log("Login Successful of", email);
                form.reset();
                setError("");

                const profile = { displayName: Username, photoURL: photoURL };
                UpdateUser(profile)
                    .then(() => { })
                    .catch((error) => { });
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const githndl = () => {
        const auth = getAuth();
        signInWithPopup(auth, gitprovider)
            .then((result) => {
                navigate(from, { replace: true })

            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='regbody'>

            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Sing In </span><span>Sign Up</span></h6>

                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />


                                <label htmlFor='reg-log'></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sing In</h4>

                                                    <form onSubmit={HandleForm}>
                                                        <div className="form-group">
                                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <Button className='mt-3' type='submit'>Log In</Button>
                                                        <div className='d-flex justify-content-evenly g-3 pt-4'>
                                                            <Button onClick={HandleGoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle></Button>
                                                            <Button onClick={githndl} className='mb-2' variant="outline-dark"><FaGithub></FaGithub></Button>
                                                        </div>

                                                    </form>
                                                    <p className="mb-0 mt-4 text-center"><a href="/" className="link">{error}</a></p>
                                                    <p className="mb-0 mt-4 text-center"><a href="/" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    <form onSubmit={Handlesingup} >
                                                        <div className="form-group">
                                                            <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="text" name="photourl" className="form-style" placeholder="Photo Url" id="photourl" autocomplete="off" />

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />


                                                            <Button className='mt-3' type='submit'>Sing Up</Button>

                                                        </div>
                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getstarted;