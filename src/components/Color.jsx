import { useWeb3React } from '@web3-react/core';
import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';

import artifact from '../../build/contracts/Color.json';
import useColorContract from '../hooks/useColorContract';

const ColorContainer = () => {
  // const { account, library } = useWeb3React();
  const { colors, totalSupply, mint } = useColorContract();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // mint(event.target);
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />

      {/* <nav className="p-0 shadow navbar navbar-dark fixed-top bg-dark flex-md-nowrap">
        <div className="mr-0 navbar-brand col-sm-3 col-md-2">Color Tokens</div>
        <ul className="px-3 navbar-nav">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              <span id="account">Welcome, {account}</span>
            </small>
          </li>
        </ul>
      </nav> */}

      <div className="mt-5 container-fluid">
        <div className="row">
          <main role="main" className="text-center col-lg-12 d-flex">
            <div className="ml-auto mr-auto content">
              <h1>Issue Token</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="mb-1 form-control"
                  placeholder="e.g. #FFFFFF"
                  name="color"
                />
                <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="MINT"
                />
              </form>
            </div>
          </main>
        </div>
        <hr />
        <div className="text-center row">
          {colors.map((color) => (
            <div key={color} className="mb-3 col-md-3">
              <div className="token" style={{ backgroundColor: color }}></div>
              <div>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorContainer;
