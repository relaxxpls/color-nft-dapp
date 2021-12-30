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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            height: '100%',
            padding: '2rem',
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: color,
                borderRadius: '50%',
                width: '6rem',
                aspectRatio: '1',
              }}
            >
              <span
                style={{
                  padding: '3px',
                  background: '#ffffffdd',
                  borderRadius: '0.5rem',
                  fontFamily: 'Fira Code, monospace',
                }}
              >
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
