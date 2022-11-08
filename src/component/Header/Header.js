import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'
import './Header.css'


const Header = () => {
    const { User, LogOut } = useContext(AuthContext)
    const HandleLogout = () => {
        LogOut()
            .then(() => {
                alert("Sign-out successful");
            })
            .catch((error) => {
                console.error(error);
            });

    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fs-2' to={'/'}>Survey Helper <small className='fs-6'> By Prattay</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div></div>
                            <Nav.Link ><Link style={{ textDecoration: 'none' }} to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link ><Link style={{ textDecoration: 'none' }} to={'/service'}>Service</Link></Nav.Link>
                            <Nav.Link ><Link style={{ textDecoration: 'none' }} to={'/'}>Blog</Link></Nav.Link>
                            {User ? <Nav.Link><Link style={{ textDecoration: 'none' }} to={'/myreview'}>My Review</Link></Nav.Link> : ''}
                            {User ? <Nav.Link>
                                <Link style={{ textDecoration: 'none' }} to={'/AddServices'}>Add Services</Link></Nav.Link> : ''}
                        </Nav>
                        <Nav>
                            <Nav className="me-auto">

                                <Nav.Link >{User ? <Link onClick={HandleLogout} style={{ textDecoration: 'none' }}>Log Out</Link> : <Nav.Link ><Link to={'/getstarted'} style={{ textDecoration: 'none' }}>Get Started</Link></Nav.Link>}</Nav.Link>


                                <Nav.Link >{User ? <div className='d-flex'><Nav.Link >{User.displayName}</Nav.Link>
                                    <Nav.Link  ><img src={User.photoURL} alt="" title={User.displayName} className='rounded-circle  naving' /></Nav.Link></div> : ""}</Nav.Link>



                            </Nav>
                            <Nav.Link eventKey={2} to={'/'}>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;