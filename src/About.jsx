import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class About extends Component {
    render() {
        return (
            <>
            <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contract">Contact</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
                <h1>
                    Welcome!
                </h1>

                <h2>My name is Amanda and I am a home based lash technician in the heart of 
                Winchester, VA.  I have been practicing lashing since 2019, licensed in 
                cosmetology since 22010, and I acquired a costmetic tattooer license in
                2020.  I left the hair industry to pursue lashing and permanent makeup 
                full time and I've never been happier!  Please don't hesitat to reach 
                out to me with any questions you may have. 😁
                </h2>

            <div>
                BUSINESS HOURS:

                Monday: 9AM - 6PM
                Tuesday: 9AM - 6PM
                Wednesday: 9AM - 4PM
                Thursday: 9AM - 6PM
                Friday: 9AM - 4PM
                Saturday: CLOSED
                SUNDAY: CLOSED
            </div>

            <div>
                CANCELLATION POLICY:

                We get it that sometimes things come up and you may need to cancel.  If 
                you are unable to make your appointment, please kindly notify Winks & Ink
                at ajforhair@gmail.com as soon as possible to reschedule.
            </div>
            </div>
            </>
        )
    }
}