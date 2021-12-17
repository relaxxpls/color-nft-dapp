import Head from 'next/head';

import Color from '../components/Color';

const Index = () => {
  return (
    <>
      <Head>
        <title>Colors NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Color />
    </>
  );
};

export default Index;
