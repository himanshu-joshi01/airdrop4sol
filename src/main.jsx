import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import App from './App.jsx'
import './index.css'
import { clusterApiUrl } from '@solana/web3.js';

const wallets = [new PhantomWalletAdapter()];
const endpoint = clusterApiUrl('devnet');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>,
)
