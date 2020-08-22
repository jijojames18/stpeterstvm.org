import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpen,
  faPhone,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import fbIcon from '../../assets/fb.svg';
import youtubeIcon from '../../assets/youtube.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <Container className="contact-container nav-items">
              <Row>
                <Col>
                  <h5>Links</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav.Link href="/">Home</Nav.Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav.Link href="/about">About</Nav.Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container className="contact-container social-links">
              <Row>
                <Col>
                  <h5>Follow us on</h5>
                </Col>
              </Row>
              <Row className="social-icons">
                <Col>
                  <a
                    href="https://m.facebook.com/profile.php?id=394517177352666"
                    target="_blank"
                    title="facebook"
                    rel="noopener noreferrer"
                  >
                    <Image src={fbIcon} alt="Navigate to Facebook page" />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.youtube.com/channel/UC_T9Z9EjXSlffJV4M_NDELg"
                    target="_blank"
                    title="youtube"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={youtubeIcon}
                      alt="Navigate to Youtube channel"
                    />
                  </a>
                </Col>
              </Row>
            </Container>
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
