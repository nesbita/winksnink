import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Services extends Component {
    render() {
        return(
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
                LASH SERVICES:

                FULL SETS

                Classic Lash Extensions Full Set $110, 120 minutes, $25 deposit required upon booking for new clients.

                Hybrid Lash Extensions Full Set $125, 120 minutes, $25 deposit required upon booking for new clients
                
                Volume Lash Extension Full Set $150, 150 minutes, $25 deposit

            

                FILLS 

                Classic Fill 2 Weeks $50, 90 minutes

                Classic Fill 3 Weeks $60, 90 minutes

                Hybrid Fill 2 Weeks $60, 90 minutes

                Hybrid Fill 3 Weeks $70, 90 minutes

                Volume Lash Fill 2 Weeks $70, 105 minutes

                Volume Lash Fill 3 Weeks $80, 90 minutes

                OTHER:

                One Week Touch Up $35+, 60 minutes

                Lash Removal $10+, 60 minutes



                BROW SERVICES:

                Eyebrow Shaping with Tint $25, 60 minutes, $5 deposit required for new clients

                Brow Shaping (NO TINT) $15, 30 minutes
                

                PERMANENT MAKEUP:

                Annual Brow Touch Up / Color Boost $100+, 180 minutes
            </div>
        )
    }
}