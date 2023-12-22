// this is all class based currently

// import React and React Component Class
import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

  // declare nickname variable
  // const nickName = 'Debbie'
  
// define a Hello Component
// can also export default up here before class on line 8

// class Home extends Component {
  // use component render function to pass JSX
  // render() {
    // return some JSX
    // return (
      // <>
class Home extends Component {
  render() {
  return (
    <>
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
  
      <div className='backgroundImage'>
      <img src='Home_Image.jpeg' alt='A blue eye with eyelash extensions'></img>
      </div>
      <h1>
        Winks & Ink
        {/* Hello Again <Name name={nickName} /> 🐼 */}
      </h1>
    </>
  );
}
}
export default Home;
   
    //   </>
    // )

// export component
// export default Home;