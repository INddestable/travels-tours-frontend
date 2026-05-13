import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import { useState } from 'react';

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="nav">
          <Navbar.Brand href="/">Travels Tours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

function NavBarAdmin() {

    const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Travels Tours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
    </Navbar>  
    </>

    );
};

function NavBarUser() {

    const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Travels Tours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Dashboard">Mis Reservas</Nav.Link>
          </Nav>
        </Container>
    </Navbar>  
    </>
    );
};


export default NavBar;
export { NavBarAdmin, NavBarUser };