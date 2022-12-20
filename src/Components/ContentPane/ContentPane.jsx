/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPane.css';
import PropTypes from 'prop-types';
import AddStock from '../addstock/addstock';

const ContentPane = (
  {
    child0, child1, child2, child3, child4, child5, user,
  },
) => (
  <>
    <Container fluid className=" fill">
      <Row>
        <Col className="text-left">
          {/* <Button variant="success mt-2 btn-sm p-2">Add Stock</Button> */}
          <AddStock />
        </Col>
        <Col>
          <p className="text-right m-3">
            Filter Dates:
            <span className="bg-white px-1"> DD/MM/YY</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row className="bg-white">
              <Col md={3} />
              <Col md={6} className="text-center">
                <h3 className="mt-4 text-success font-weight-bold">Measure Portfolio health</h3>
                <Button variant="success mt-5 btn-lg p-3">Check Health</Button>
                <br />
                <a href="https://placeholder.com">
                  {' '}
                  <img className="my-3" src="https://via.placeholder.com/50" alt="" />
                </a>
              </Col>
              <Col md={3} className="py-5 text-center">
                <a href="https://placeholder.com">
                  {' '}
                  <img src={user.picture} alt="" height="100%" width="80%" />
                </a>
              </Col>
            </Row>
            <Row className="my-2 text-center">
              <Col className="contentPaneBanner text-light"><h4 className="p-3">Graphs</h4></Col>

            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col><h4 className="text-center my-4 text-dark">Michi portfolio analysis</h4></Col>
      </Row>
      <Row>
        <Col>{child0}</Col>
      </Row>
      <Row>
        <Col><h4 className="text-center my-4 text-dark">Analysis of your stocks</h4></Col>
      </Row>
      <Row className="mb-2">
        <Col>{child1}</Col>
      </Row>
      <Row>
        <Col><h4 className="text-center my-4 text-dark">Analysis of your overall portfolio</h4></Col>
      </Row>
      <Row className="mb-2">
        <Col>{child2}</Col>
      </Row>
      <Row>
        <Col><h4 className="text-center my-4 text-dark">Corelation Matrix</h4></Col>
      </Row>
      <Row className="mb-2">
        <Col>{child3}</Col>
      </Row>
      <Row className="mb-2">
        <Col>{child4}</Col>
      </Row>
      <Row className="mb-2">
        <Col>{child5}</Col>
      </Row>
    </Container>

  </>
);

ContentPane.propTypes = {
  child0: PropTypes.element,
  child1: PropTypes.element,
  child2: PropTypes.element,
  child3: PropTypes.element,
  child4: PropTypes.element,
  child5: PropTypes.element,
  user: PropTypes.element,
};

export default ContentPane;
