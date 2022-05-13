import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Events.scss';

export default function About() {
  return (
    <React.Fragment>
      <Container className="about">
        <Row className="justify-content-md-center title-row">
          <Col md="12">
            <h5 className="section-title">JSVBS</h5>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <p>
              ശ്രീ. പി.ബി. നൂഹ് I.A.S. 
              വിദ്യാർത്ഥികൾക്ക് പ്രചോദനമേകി JSVBS വേദിയിൽ.
              തിരുവനന്തപുരം സെന്റ്. പീറ്റേഴ്സ് യാക്കോബായ സുറിയാനി ഓർത്തഡോക്‌സ് സിംഹാസന കത്തീഡ്രലിലെ ജെ. എസ്.വി.ബി.എസിൽ പ്രത്യേക ക്ലാസ് നയിച്ച ശ്രീ. പി. ബി. നൂഹ് IAS (CEO, LIFE Mission, Govt. Of Kerala) ഇടവക വികാരി 
              ഫാ. ഫെവിൻ ജോൺ, സൺഡേ സ്കൂൾ അദ്ധ്യാപകർ, വിദ്യാർത്ഥികൾ എന്നിവരോടൊപ്പം.
            </p>
            <div class="section-image">
              <div>
                <img src="https://scontent.ftrv1-1.fna.fbcdn.net/v/t39.30808-6/279761406_177900514591275_4430973438145715623_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=TeNS1SW97p4AX9QMiXq&tn=AFy0-64EORkl5N4d&_nc_ht=scontent.ftrv1-1.fna&oh=00_AT_rLSwKiE_0QuwI0VrARa8QR_861RUyKCVrEE13U-nYMA&oe=62837543" width="100%" height="100%" />
              </div>
              <div>
                <img src="https://scontent.ftrv1-1.fna.fbcdn.net/v/t39.30808-6/279808791_177900597924600_8119544382168014598_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=hxu8-QKXpmkAX-vre94&_nc_ht=scontent.ftrv1-1.fna&oh=00_AT-RaOMOzigivbl5ziCUoq3YBVzUcRwmc9J3wxR1aScrSQ&oe=62835E61" width="100%" height="100%"  />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
