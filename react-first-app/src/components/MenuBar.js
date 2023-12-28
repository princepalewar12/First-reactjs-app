import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Router } from 'react-router-dom';
const MenuBar = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Menu Bar</h1>
      {/* <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      </Router> */}
    </>
  )
}

export default MenuBar