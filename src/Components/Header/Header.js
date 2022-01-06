import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-laptop-code"></i> E-Learning with Mustafiz</Navbar.Brand>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                        <Link className="m-2 text-decoration-none" to="/about">About</Link>
                        <Link className="m-2 text-decoration-none" to="/services">Services</Link>
                        <Link className="m-2 text-decoration-none" to="/userchart">User Chart</Link>
                        <Link className="m-2 text-decoration-none" to="/questions">FAQ</Link>
                        {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
            {/* </Nav> */}
            {/* // </Container> */}

            {/* // </Navbar> */}


            {/*  Responsive Navbar Added */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-laptop-code "></i> E-Learning with Mustafiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto p-2 text-center">
                            <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                            <Link className="m-3 text-decoration-none" to="/about">About</Link>
                            <Link className="m-3 text-decoration-none" to="/services">Services</Link>
                            <Link className="m-3 text-decoration-none" to="/userchart">User Chart</Link>
                            <Link className="m-3 text-decoration-none" to="/questions">FAQ</Link>
                            {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;