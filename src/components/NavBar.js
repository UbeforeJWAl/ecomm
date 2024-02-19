import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-primary fw-bold">
          Sales App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-4 mb-lg-0">
            <Nav.Link as={Link} to="/add-sales" className="text-dark">
              Add Sales
            </Nav.Link>
            <Nav.Link as={Link} to="/top-5-sales" className="text-dark">
              Top 5 Sales
            </Nav.Link>
            <Nav.Link as={Link} to="/todays-total-revenue" className="text-dark">
              Today's Total Revenue
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
               Login
            </Nav.Link>
            <Nav.Link as={Link} to="/Register" className="text-dark">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-dark">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;