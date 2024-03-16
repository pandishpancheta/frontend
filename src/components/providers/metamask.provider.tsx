import React from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';

const MetamaskProvider = ({ children }: { children: React.ReactNode }) => {

    const [href, setHref] = React.useState<string>('');

    React.useEffect(() => {
        setHref(window.location.href);
    }, []);

    return (
        <MetaMaskProvider
            debug={true}
                        sdkOptions={{
                          dappMetadata: {
                            name: "The Bazaar",
                            url: href,
                          },
                        }}
        >
            {children}
        </MetaMaskProvider>
    );
};

export default MetamaskProvider;