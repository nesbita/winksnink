import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';

class About extends Component {
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

            <h2>
                My name is Amanda and I am a home based lash technician in the heart of 
                Winchester, VA.  I have been practicing lashing since 2019, licensed in 
                cosmetology 
                <br/>
                since 2010, and I acquired a cosmetic tattooer license in
                2020.  I left the hair industry to pursue lashing and permanent makeup 
                full time and I've never been happier!
                <br/>
                Please don't hesitate to reach out to me with any questions you may have. 😁
            </h2>

{/* function AllCollapseExample() {
  return (
    <> */}
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>BUSINESS HOURS</Accordion.Header>
        <Accordion.Body>
            Monday: 9AM - 6PM
            <br/>
            Tuesday: 9AM - 6PM
            <br/>
            Wednesday: 9AM - 4PM
            <br/>
            Thursday: 9AM - 6PM
            <br/>
            Friday: 9AM - 4PM
            <br/>
            Saturday: CLOSED
            <br/>
            Sunday: CLOSED
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>CANCELLATION POLICY</Accordion.Header>
        <Accordion.Body>
            We get it that sometimes things come up and you may need to cancel.  If 
            you are unable to make your appointment, please kindly notify Winks & Ink
            at ajforhair@gmail.com as soon as possible to reschedule.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* </> */}

            </div>
            </>
        )
    }
}

export default About;
// export default AllCollapseExample;