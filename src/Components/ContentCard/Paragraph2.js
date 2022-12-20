/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Paragraph2 = () => (
  <>
    <p style={{ fontSize: '14px' }}>
      The graph on the left represents all the monthly returns that the stocks
      have taken for one year with their frequency(histogram),the graph on the
      right
      <br />
      represents the average values that the stocks have taken until now.For
      example,the stock WDI has mostly had negative returns,its average return
      is lower
      <br />
      than zero,and their averange range is also below zero.The graph on the
      right showsthe percentage standard deviation of daily returns,which is
      represented by
      <br />
      the distance of the bars from the circle,A high standard deviation means
      that, on average,the return of a stock are far from the mean(on
      average).indeed,
      <br />
      the higher the standard deviation, the more extreme values they have, the
      higher the risk to invest in those stocks,
      <br />
      <br />
      The graph is relevent to understand what kind of values stocks have taken
      in the pas and can, therfore,take in the future.
      <br />
      <br />
      <p style={{ fontSize: '12px' }}>
        The standard deviation is a measure of risk.it is calculated as the
        distance between every returns of a stock and its mean. A high standard
        deviation causes a stock to have a wide range of returns,that is extreme
        return values,both
        <br />
        positive and negative ,which means the stock more volatile opr
        risky(variation of a high magnitude are observed in a short period of
        time).High risk is usually associated with high return,but also with the
        high probability of losing
        <br />
        your capital.The green circle in the graph are mean return of each
        stock,the dark green and light green bars represent the rate of
        deviation taken by returns compared to mean.
      </p>
    </p>
  </>
);

export default Paragraph2;
