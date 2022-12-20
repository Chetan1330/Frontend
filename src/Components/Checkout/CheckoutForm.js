import React, { useState, useEffect } from 'react';

const CheckoutForm = () => (
  <section>
    <br />
    <div className="container">
      <br />
      <h1 style={{ color: 'green' }}>Portfolio Analysis Subscription</h1>
      <h3 style={{ color: 'green', fontWeight: '200px' }}>Become a member Today!</h3>
      <br />
    </div>
    <div className="container">
      <div
        className=""
        style={{
          backgroundColor: '#8FBC8F',
          color: 'white',
          paddingTop: '12px',
        }}
      >
        <h3>Subscription Pricing Plan</h3>
        <div
          style={{
            marginLeft: '400px',
            marginRight: '400px',
            height: '5px',
            color: 'white',
          }}
        >
          <hr />
        </div>
        <p>
          Choose
          <span> a payfortfolio Plan</span>
          _with COMPLETE Access
        </p>
        <br />
      </div>
      <div style={{ backgroundColor: '#f7f5f2' }}>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Composition of Portfolio</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p style={{ paddingLeft: '95px' }}>
            Percentage returns
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Distribution of returns</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="testing">
            <input type="checkbox" className="checkbox-round ml-3 " />
          </div>
          <p
            style={{ paddingLeft: '95px' }}
          >
            Distribution of your por...
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Link between pairs of...</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p
            style={{ paddingLeft: '95px' }}
          >
            Performance of your...
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Risk of single stocks...</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p
            style={{ paddingLeft: '95px' }}
          >
            Value of rick
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Forecasts of risk..</p>
          </div>
        </div>
        <form
          action="http://127.0.0.1:8000/create-checkout-session"
          method="POST"
        >
          <div className="d-flex justify-content-center mt-5">
            <div className="row" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <div className="col-xs-4">
                <button type="submit" className="btn-dark m-3 p-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}>XX.XX/1month</button>
              </div>
              <div className="col-xs-4">
                <h4 className="text-success">save 10%</h4>
                <button type="submit" className="btn-dark m-3 p-3 pb-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}>XX.XX/6month</button>
              </div>
              <div className="col-xs-4">
                <h4 className="text-success">save 25%</h4>
                <button type="submit" className="btn-success m-3 p-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}> XX.XX/1year</button>
              </div>
            </div>
          </div>
        </form>
        <p style={{ color: 'green' }}>Start your free trial now</p>
        <br />
      </div>
    </div>
    <br />
  </section>
);
export default CheckoutForm;
