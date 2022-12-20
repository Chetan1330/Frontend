import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const HisParagraph = () => (
  <>
    <p style={{ fontSize: '14px' }} className="p-2 mt-5">
      The distribution of daily returns of your portfolio
      <br />
      ranges from -15% to +18% and from -23% to 28%
      <br />
      for monthly returns.Positive returns have taken
      <br />
      slightly larger values then negative returns.The
      <br />
      maen is a positive number very close to zero
      <br />
      (0.0012),which is good as your portfolio has a
      <br />
      postive value as an average.the distribution leans
      <br />
      to the right such that most daily return are
      <br />
      positive rather than negative.There exists the risk
      <br />
      of registring negative returns;however ,as shown
      <br />
      in the graph ,negative returns are smaller than
      <br />
      positive returns.Extreme returns are more
      <br />
      consistent on the positive side.
      <br />
      <br />
      <p style={{ fontSize: '12px' }}>
        The graph shows information about the returns of the whole portfolio,
        <br />
        rather than single stocks like in the previous graphs.The vertical axis
        <br />
        represents the frequency or counts of the daily returns in the horizontal
        <br />
        axis.the distribution tells you where the returns are placed,if they are
        <br />
        more negative than postive and vice versa,it also tells you if returns tend
        <br />
        to take on extreme values or if they mainly centered around the mean.it is
        <br />
        a useful graph to become aware of what kind values the returns of your
        <br />
        portfolio can take up and how likely you are to experience extreme
        <br />
        returns,both positive and negative.
      </p>
    </p>
  </>
);

export default HisParagraph;
