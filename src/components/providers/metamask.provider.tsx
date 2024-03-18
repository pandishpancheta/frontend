'use client';
import React from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';

const MetamaskProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: 'StockChain',
          url: 'http://localhost:3000/',
        },
      }}
    >
      {children}
    </MetaMaskProvider>
  );
};

export default MetamaskProvider;
