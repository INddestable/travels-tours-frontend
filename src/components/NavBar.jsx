import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const rol = localStorage.getItem("rol");
  
  let links = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catalogo" },
    { to: "/blog", label: "Blog" },
    { to: "/contacto", label: "Contacto" },
  ];

  if (rol === "ADMIN") {
    links.push(
      { to: "/admin/paquetes", label: "Paquetes" },
      { to: "/admin/blog", label: "Blog Admin" },
      { to: "/admin/metricas", label: "Metricas" }
    );
  } else if (rol === "ASESOR") {
    links.push(
      { to: "/asesor/crear", label: "Crear Paquete" },
      { to: "/asesor/mis-paquetes", label: "Mis Paquetes" },
      { to: "/admin/metricas", label: "Metricas" }
    );
  } else if (rol === "CLIENTE") {
    links.push(
      { to: "/reservas", label: "Mis Reservas" },
      { to: "/favoritos", label: "Favoritos" },
      { to: "/perfil", label: "Perfil" }
    );
  } else {
    links.push({ to: "/login", label: "Login" });
    links.push({ to: "/registro", label: "Registro" });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav">
        <Navbar.Brand as={Link} to="/">
          Travels Tours
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link as={Link} to={link.to} key={link.to}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
