/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const ContentArea = ({ left, right }) => (
  <>
    <Container fluid>
      <Row>
        <Col md={2} className="SplitPane-left px-0">
          {left}
          <Container fluid className="text-light logOut">
            <Row className="bg-success mt-5">
              <Col><h2 className="text-center p-3"><b>LOG OUT</b></h2></Col>
            </Row>
          </Container>
        </Col>
        <Col md={10} className="SplitPane-right px-0">
          {right}
        </Col>
      </Row>
    </Container>

  </>
);

ContentArea.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
};

export default ContentArea;
