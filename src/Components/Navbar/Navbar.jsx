import React, { Fragment } from 'react';
// import './App.css';
import {
  Container, Col, Row, Button, Navbar, Nav,
} from 'react-bootstrap';
import './Navbar.css';
import { useHistory } from 'react-router-dom';
// import AuthNav from '../AuthNav/auth-nav';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../Logout/logout-button';

const publicPath = process.env.PUBLIC_URL;
const MyNavBar = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  const routeChange = () => {
    const path = '/';
    history.push(path);
  };
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={`${publicPath}/images/mayPortfolioLogo1.jpg`}
            href="/dashboard"
            width="110"
            height="42"
            className="d-inline-block align-top"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={routeChange} className="navbar">Home</Nav.Link>
            <Nav.Link href="#link" className="navbar">Services</Nav.Link>
            <Nav.Link href="#home" className="navbar">Financial classroom</Nav.Link>
            <Nav.Link href="#home" className="navbar">About</Nav.Link>
            <Nav.Link href="#home" className="navbar">Contact Us</Nav.Link>
            { isAuthenticated
            && (
            <div className="navbar-nav ml-auto">
              <LogoutButton />
            </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavBar;
