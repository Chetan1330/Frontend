import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const StackedParagraph = () => (
  <>
    <Col className="col-10">
      <p style={{ marginLeft: '80px', marginTop: '100px', fontSize: '14px' }}>
        The graph represents a comparison
        <br />
        between stocks returns and the market
        <br />
        return during the same time period,that is
        <br />
        from the time of purchasing the stock untill
        <br />
        today.The indexes returns(Wilshire 5000
        <br />
        and S&P 500)are averages of all the returns
        <br />
        of the stocks being included in them. The
        <br />
        stock AAPL stands out for overperforming
        <br />
        the market,JNJ for underperforming the
        <br />
        market.If the US market registers a higher
        <br />
        return than your stock,it means that there
        <br />
        has been stocks in the same market that
        <br />
        have registered higher return than yours
        <br />
        <br />
        <p style={{ fontSize: '12px' }}>
          Note:The indexes used as a reference for the US market are
          <br />
          Wilshire 5000 and S&P 500
        </p>
      </p>
    </Col>
  </>
);

export default StackedParagraph;
