import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navmenu() {
  return (
        <div>
      <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/Home">Twitter Showcase</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
            <Nav.Link href="/Random">Random Tweet</Nav.Link>
         </Nav>
      </Navbar.Collapse>
    </Container>
      </Navbar>
      </div>
  )
}


export default Navmenu

