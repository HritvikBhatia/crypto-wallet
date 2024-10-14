import { useState } from 'react';
import './App.css';
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="container">
      <h2>Crypto Wallet Generator</h2>
      <input type="text" value={mnemonic} readOnly className="mnemonic-input" />

      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }} className="generate-button">
        Create Seed Phrase
      </button>

      <div className="wallets-container">
        <SolanaWallet mnemonic={mnemonic} />
        <EthWallet mnemonic={mnemonic} />
      </div>
    </div>
  );
}

export default App;
