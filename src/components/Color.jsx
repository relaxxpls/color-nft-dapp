import { useWeb3React } from '@web3-react/core';
import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';

import artifact from '../../build/contracts/Color.json';
import colors from './colors.json';
import useColorContract from '../hooks/useColorContract';

const ColorContainer = () => {
  // const { account, library } = useWeb3React();
  // const { colors, totalSupply, mint } = useColorContract();
  const account = 'laxman';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // mint(event.target);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Color Tokens</h1>
        <span id="account">Welcome, {account}</span>

        <main role="main" className="text-center col-lg-12 d-flex">
          <h3>Issue Token</h3>

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
        </main>

        <h3>My tokens:</h3>

        <h3>Already issued:</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 p-8">
          {colors.map((color) => (
            <div
              key={color}
              className={`flex items-center justify-center w-24 rounded-full aspect-square`}
              style={{ background: color }}
            >
              <span className="p-0.5 bg-[#ffffffdd] rounded-lg font-mono">
                {color.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorContainer;
