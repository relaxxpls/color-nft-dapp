import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';

import Color from '../../build/contracts/Color.json';

const useColorContract = () => {
  const contract = useRef();
  const [colors, setColors] = useState([]);
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    // ? this is only run once on component mounting
    const setup = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        'http://localhost:7545'
      );
      const network = await provider.getNetwork();
      console.log(Color.networks, network.chainId);
      const contractAddress = Color.networks[network.chainId].address;

      // ? instantiate contract instance and assign to component ref variable
      contract.current = new ethers.Contract(
        contractAddress,
        Color.abi,
        provider.getSigner()
      );

      // ? update totalSupply on UI
      const totalSupply = await contract.current.totalSupply();
      setTotalSupply(totalSupply.toString());

      // ? load minted colors
      for (let i = 0; i < totalSupply; i++) {
        const color = await contract.current.colors(i);
        setColors((prevColors) => [...prevColors, color]);
      }
    };

    setup();
  }, []);

  // ? mint a new color nft
  const mint = async (color) => {
    try {
      // ? make mutation and wait for mining
      const tx = await contract.current.mint(color);
      await tx.wait();

      setColors((prevColors) => [...prevColors, color]);
      setTotalSupply((prevTotalSupply) => prevTotalSupply + 1);
    } catch (error) {
      console.log('[mint] error.message => ', error.message);
    }
  };

  return { colors, totalSupply, mint };
};

export default useColorContract;
