import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const getLibrary = (provider) => new ethers.providers.Web3Provider(provider);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

export default MyApp;
