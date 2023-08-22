import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';

function Navs() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className=" p-0 fixed-top bg-body-tertiary ">
        <Container className="navss" >
          <Navbar.Brand as={HashLink} to='/#' >React Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" variant="underline">
              <Nav.Link as={HashLink}  to='/#' >Home </Nav.Link>
              <Nav.Link  as={HashLink}  to='/#career' >Career</Nav.Link>
              <Nav.Link as={HashLink}  to='/#about' >About Us</Nav.Link>
              <Nav.Link as={HashLink}  to='/#contact' >Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
         
    
    </div>
  );
}

export default Navs;








    
 

