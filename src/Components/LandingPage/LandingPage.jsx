import React, { useState } from 'react';
import { Jumbotron, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';
import LoginButton from '../Login/login-button';

const LandingPage = () => {
  const [check, setCheck] = useState(false);
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Jumbotron className="mb-3">
        <h1>Welcome to the mayPortfolio platform!</h1>
        <p className="text-center">
          This is a simple web app that aims to help you make the most of your investments,
          <br />
          in order to track their performance, get insights and other support please login/sign up
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" defaultChecked={check} onClick={() => setCheck(!check)} label="Mandatory to accept Terms and conditions and Privacy policy (we still have to write them)." />
          </Form.Group>
        </Form>
        <div className="w-25 mx-auto">
          <LoginButton check={check} />
        </div>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
