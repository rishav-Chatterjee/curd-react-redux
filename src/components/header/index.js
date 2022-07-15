import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsCreditCard2Back } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Expenser</Link>
            <BsCreditCard2Back className="ms-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/userlist">UsersList</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
