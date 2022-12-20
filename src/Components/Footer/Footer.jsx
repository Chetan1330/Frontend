import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const publicPath = process.env.PUBLIC_URL;

const Footer = () => (
  <>
    <Container fluid className="footerContainer text-light pt-5">
      <Row className="mt-3 pl-2">
        <Col md={4} className="mx-auto mb-4">
          <img
            alt=""
            src={`${publicPath}/images/mayPortfolioLogo1.jpg`}
            width="110"
            height="42"
            className="d-inline-block align-top mb-4"
          />
          {' '}
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </Col>
        <Col md={4} className="mx-auto mb-4 text-center">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </Col>
        <Col md={4} className="mx-auto mb-4 text-center">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </Col>
      </Row>
    </Container>
  </>
);

export default Footer;
