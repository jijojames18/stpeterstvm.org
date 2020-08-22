import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpen,
  faPhone,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Nav>
                <h5>Links</h5>
              </Nav>
            </Navbar>
            <Navbar>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar>
            <Navbar>
              <Nav>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar>
            <Navbar>
              <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Container className="contact-container">
              <Row>
                <Col>
                  <h5>Contact</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                  <a className="contact-link" href="mail:info@stpeterstvm.org">
                    info@stpeterstvm.org
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faPhone} />
                  <a className="contact-link" href="tel:04712330933">
                    0471 233 0933
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <span className="contact-link">
                    Punnen Rd, Statue, Palayam, Thiruvananthapuram, Kerala
                    695039
                  </span>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
