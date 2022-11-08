import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../context/AuthProvider'


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
                    <Navbar.Brand to={'/'}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to={'/'}>Home</Nav.Link>
                            <Nav.Link to={'/'}>Service</Nav.Link>
                            <Nav.Link to={'/'}>Blog</Nav.Link>
                            <Nav.Link to={'/'}>Pricing</Nav.Link>
                          
                        </Nav>
                        <Nav>
                            <Nav className="me-auto">
                                {User ? <Link onClick={HandleLogout} style={{ textDecoration: 'none' }}>Log Out</Link> : <Nav.Link ><Link to={'/getstarted'} style={{ textDecoration: 'none' }}>Get Started</Link></Nav.Link>}
                            </Nav>
                            <Nav.Link eventKey={2} to={'/'}>
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;