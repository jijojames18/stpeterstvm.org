import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Home.scss';
import chruch from './church.png';

export default function Header() {
  return (
    <React.Fragment>
      <Container>
        <Col>
          <Image
            fluid
            src={chruch}
            alt="St Peter's Jacobite Syrian Orthodox Simhasana Cathedral"
          />
        </Col>
      </Container>
      <Container fluid className="home-content-text">
        <Row className="justify-content-md-center title-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <h2 class="section-title">Our Parish</h2>
          </Col>
        </Row>
        <Row className="home-content-text-row">
          <p>
            Established in 1975, our parish symbolizes the dynamism of the
            Oriental Orthodox faith. From humble beginnings, a thatched roof
            structure to be precise, the Church has grown to be the premier
            symbol of Syriac Orthodox Christianity in the Capital of Kerala. The
            church was Consecrated in the name of St. Peter by His Holiness
            Moran Mor Ignatius Zakka I Iwas the Prince Patriarch of Antioch and
            All the East on February 13 and 14, 1982. An elan vital, the Church
            has been instrumental in the establishment of other congregations
            and churches in Thiruvananthapuram. This transformation itself
            testifies to the divine grace the parish is blessed with. The Church
            welcomes all to share this heavenly blessing and invites everyone to
            join the parish in worshipping our lord and saviour, Jesus Christ.
          </p>
        </Row>
        <Row className="home-content-text-row">
          <p>
            St.Peters Jacobite Syrian Orthodox Simhasana Cathderal was
            instrumental in propagating the Syriac Orthodox Faith in
            Thiruvananthapuram. As a result of the tireless endeavours of its
            members, a chapel was started at Pongumoodu in 1996. It was
            consecrated in the name of St. Mary, the mother of our lord. The
            Chapel became an independent parish in 2004.
          </p>
        </Row>
        <Row className="home-content-text-row">
          <p>
            Our church, as part of expanding its activities and spreading Syriac
            Orthodoxy, in the city has started a chapel in the name of St.
            George at Peroorkada. Holy Qurbono is celebrated on every Sunday.
          </p>
        </Row>
      </Container>
      <Container className="home-content-timing">
        <Row className="justify-content-md-center title-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <h2 class="section-title">Prayer Timings</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-title">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <h4>Saturday</h4>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <p>Morning Prayer : 06:15 AM</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <p>Holy Qurbono : 07:00 AM</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <p>Evening Prayer : 06:00 PM</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-title">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <h4>Sunday</h4>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <p>Morning Prayer : 07:00 AM</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center home-content-timing-row">
          <Col md="auto" lg="auto" xl="auto" sm="auto" xs="auto">
            <p>
              <p>Holy Qurbono : 08:00 AM</p>
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
