import React from 'react';
import './header.css';
import { Nav,Navbar,Container } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Header() {

  return (
    <div>
      <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>Zomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/hotalregistration">Hotal Registration</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/hotalist">Hotal List</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/menuitem">Menu Item</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/menlist">Menu List</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header