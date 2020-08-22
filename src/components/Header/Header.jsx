import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Header.scss';
import logo from './logo.jpg';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="117"
          height="120"
          className="d-inline-block align-top"
          alt="St Peter's Jacobite Syrian Orthodox Simhasana Cathedral"
        />
      </Navbar.Brand>
      <Nav className="app-name">
        <Nav.Link href="/">
          St Peter's Jacobite Syrian Orthodox Simhasana Cathedral
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
