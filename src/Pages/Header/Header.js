import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/bookory.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className='position'>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" height="30" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link className="me-5" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="me-5" as={Link} to="/order">Order</Nav.Link>
                            <Nav.Link className="me-5" as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link className="me-5" as={Link} to="/deals">Deals</Nav.Link>
                            {
                                user.email ?
                                    <button onClick={logOut} className="btn btn-link">
                                        <img className='rounded-circle z-depth-2' src={user.photoURL} alt="user" height="30" />
                                    </button>
                                    :
                                    <Nav.Link className='btn btn-success ps-3 pe-3 text-white' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        {/* <Navbar.Text>
                            {user.displayName}
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;