import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addStock } from '../../redux/StockSlice2';

function Monthly() {
  const { user } = useAuth0();
  const { stocks2 } = useSelector((state) => state.second);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    axios.get(`http://localhost:8000/datalist2/${id}`)
      .then((response) => {
        console.log(response.data, 'khjasdkjasdjadskadhkadsbhkahlasdhladhasdn');
        response.data.forEach((stock) => {
          console.log('stock', stock);
          dispatch(addStock(stock));
        });
      }, (error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4>Monthly standard deviation</h4>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(stocks2[0]?.response_data?.var).toFixed(2)}
        %
        <sub>of your portfolio </sub>
        $
        {parseFloat(stocks2[0]?.response_data?.var_out).toFixed(2)}
      </h3>
      <h4>What is the maximum amount that can lose in one month?</h4>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(stocks2[0]?.response_data?.es).toFixed(2)}
        %
        <sub>of your portfolio </sub>
        $
        {parseFloat(stocks2[0]?.response_data?.es_hist).toFixed(2)}
      </h3>
      <p>In a rare case, you may lose more than the amount above (in 5% of all cases). if that happens, the average of your portfolio losses will be:...</p>
      <p>Given the total value of your portfolio, $13957.35, in 95% of all possible outcomes you won&apos;t lose more than $480.43 in one day or $1426.37 in one month. In other words, there is 5% probability that you register a loss equals to or larger than $480.43 (3.5% of your total portfolio value) in one day and 5% probability ..</p>
      <h1>Recommendations</h1>
      <p className="text-left">WDL:</p>
      <p className="text-left">Huge internal fraud scandal</p>
      <ul className="text-left">
        <li>Do not sell</li>
        <li>Either wait or buy more</li>
        <li>Sales and profit keep growing</li>
      </ul>
    </>
  );
}
export default Monthly;
