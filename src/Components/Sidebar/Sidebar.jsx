import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const publicPath = process.env.PUBLIC_URL;

const Sidebar = () => (

  <>
    <Container fluid className="text-justify">
      <Row>
        <Col>
          <p className="pl-2 mt-3">
            <img
              alt=""
              src={`${publicPath}/images/mayPortfolioLogo1.jpg`}
              width="110"
              height="42"
              className="d-inline-block align-top"
            />
          </p>
        </Col>
      </Row>
      <Row className="sidebarAccent text-light mt-3 bg-success">
        <Col>
          <p className="text-center pl-2  p-2">
            <b>Portfolio Overview</b>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center pl-2 mt-2">
            Graphs
            {' '}
            <b>!</b>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-3">
            <b>1.</b>
            {' '}
            Analysis of your stocks
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-5">
            <b>1.1</b>
            {' '}
            What returns your stocks registered monthly in the past year
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-5">
            <b>1.2</b>
            {' '}
            How your stocks performed compared to the whole US market

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>1.3</b>
            {' '}
            Do your stocks tend to change together

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.</b>
            {' '}
            Analysis of your overall portfolio

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.1</b>
            {' '}
            What is the maximum amount that you can lose in one month?

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.2</b>
            {' '}
            What is the maximum amount that you can lose in one month?

          </p>
        </Col>
      </Row>
    </Container>
  </>
);

export default Sidebar;
