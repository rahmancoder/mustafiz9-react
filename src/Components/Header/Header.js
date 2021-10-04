import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-laptop-code"></i> E-Learning with Mustafiz</Navbar.Brand>
                    <Nav className="me-5 p-2 text-center">
                        <Link className="m-2 text-decoration-none" to="/home">Home</Link>
                        <Link className="m-2 text-decoration-none" to="/about">About</Link>
                        <Link className="m-2 text-decoration-none" to="/services">Services</Link>
                        <Link className="m-2 text-decoration-none" to="/userchart">User Chart</Link>
                        <Link className="m-2 text-decoration-none" to="/questions">FAQ</Link>
                        {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;