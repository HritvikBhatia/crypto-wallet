import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div className="wallet-section">
            <h3>Ethereum Wallets</h3>
            <button onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                const hdNode = HDNodeWallet.fromSeed(seed);
                const child = hdNode.derivePath(derivationPath);
                const privateKey = child.privateKey;
                const wallet = new Wallet(privateKey);
                setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }} className="add-button">
                Add ETH wallet
            </button>

            <div className="address-list">
                {addresses.map((p, index) => (
                    <div key={index} className="address-item">
                        Eth - {p}
                    </div>
                ))}
            </div>
        </div>
    );
}
