import React, { useState } from 'react';
import Map from '../../components/Maps/Maps';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

import './Contact.scss';

export default function Contact() {
  const captchaAlertMessage =
    'Please prove you are a human. Check the captcha button';
  const successfulAlertMessage =
    'Your message has been sent. We will get back to you as soon as possible.';
  const errorInSendingAlertMessage =
    'An internal error occurred. We are looking into this. In the mean time, please contact stpeterstvm.org directly.';

  const [captcha, setCaptcha] = useState('');
  const [alert, setAlert] = useState({
    visible: false,
    type: 'warning',
    message: captchaAlertMessage,
  });
  const [validated, setValidated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
  });

  const { name, email, subject, comments } = userDetails;

  const onCaptchaCheck = (props) => {
    setAlert({ ...alert, visible: false });
    setCaptcha(props);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmit = (event) => {
    if (!captcha) {
      setAlert({
        ...alert,
        visible: true,
        message: captchaAlertMessage,
        variant: 'warning',
      });
    } else {
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
        axios
          .post(
            process.env.REACT_APP_POST_FEEDBACK_ENDPOINT,
            JSON.stringify({
              formData: { ...userDetails },
              captcha,
              site: 'stpeterstvm.org',
            }),
            {
              headers: {
                'content-type': 'application/json',
              },
            }
          )
          .then(function () {
            setAlert({
              ...alert,
              visible: true,
              message: successfulAlertMessage,
              variant: 'info',
            });
          })
          .catch(function () {
            setAlert({
              ...alert,
              visible: true,
              message: errorInSendingAlertMessage,
              variant: 'danger',
            });
          });
      } else {
        setValidated(true);
      }
    }

    event.preventDefault();
    event.stopPropagation();
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
        <Form
          className="contact-form"
          noValidate
          validated={validated}
          onSubmit={onSubmit}
        >
          <Row>
            <Col md="12">
              <Alert
                variant={alert.variant}
                show={alert.visible}
                dismissible={alert.variant === 'info'}
                onClose={() => setAlert({ ...alert, visible: false })}
              >
                {alert.message}
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Form.Group controlId="formName">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group controlId="formSubject">
                <Form.Label>Subject:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="comments"
                  rows="6"
                  value={comments}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide your comments.
                </Form.Control.Feedback>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
}
