import React, { useState } from 'react';
import Map from '../../components/Maps/Maps';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

import './Contact.scss';

export default function Contact() {
  const [captcha, setCaptcha] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage] = useState(
    'Please prove you are a human. Check the captcha button'
  );

  const onCaptchaCheck = (props) => {
    setShowAlert(false);
    setCaptcha(props);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!captcha) {
      setShowAlert(true);
    } else {
    }
  };

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
        <Row className="contact-form-header">
          <Col md="12">
            <h3 className="section-title">Send a Direct Message</h3>
          </Col>
        </Row>
        <Form className="contact-form">
          <Row>
            <Col md="12">
              <Alert variant="warning" show={showAlert}>
                {alertMessage}
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Form.Group controlId="formName">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control required type="email" />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group controlId="formSubject">
                <Form.Label>Subject:</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control required as="textarea" rows="6" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaCheck}
              />
            </Col>
          </Row>
          <Row className="submit-button">
            <Col md="4">
              <Button variant="primary" type="button" onClick={onSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
}
