import '../App.css';
import React from 'react';
import Judul from '../header/Judul/title';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from '../footer/footer';

function Layout() {
    return (
        <div className="App">
            <Judul />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;