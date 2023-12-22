import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Contact extends Component {
    render () {
        return (
            <div>
                  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
                Need to ask me a question?  Get in touch!
                
                insert a form to email or text
            </div>
        )
    }
}