import React from 'react';
import Map from '../../components/Maps/Maps';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Contact.scss';

export default function Contact() {
  return (
    <React.Fragment>
      <Container className="contact">
        <Row className="justify-content-md-center title-row">
          <Col md="12">
            <h3 className="section-title">Get In Touch With Us</h3>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Map />
          </Col>
        </Row>
        <Row className="contact-form">
          <Col md="12">
            <h3 className="section-title">Send a Direct Message</h3>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
