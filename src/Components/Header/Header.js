import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">E-Learning with Mustafiz</Navbar.Brand>
                    <Nav className="me-5 p-2 text-center">
                        <Link className="m-2" to="/home">Home</Link>
                        <Link className="m-2" to="/about">About</Link>
                        <Link className="m-2" to="/services">Services</Link>
                        <Link className="m-2" to="/notfound">Not Found</Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;