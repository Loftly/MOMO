import React, { useState } from 'react';
import Web3 from 'web3';
import Styles from './index.module.scss';
import ContractABI from './ABI.json';  // Import the ABI

const BurnComponent = () => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const handleBurn = async () => {
        if (isConnected) {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ContractABI, '0xBFFd4D255f9917030b1dC8843EbDAd531409c607');
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            contract.methods.burn(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] })
                .on('transactionHash', function(hash){
                    setStatus(`Transaction sent: ${hash}`);
                })
                .on('confirmation', function(confirmationNumber, receipt){
                    setStatus(`Transaction confirmed!`);
                })
                .on('error', function(error, receipt) {
                    setStatus(`Error: ${error.message}`);
                });
        } else {
            setStatus('Please connect your wallet.');
        }
    };

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                setIsConnected(true);
                setStatus('Wallet connected successfully!');
            }
        } else {
            setStatus('Please install MetaMask.');
        }
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.burnSection}>
                    {isConnected ? (
                        <>
                            <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount to burn" />
                            <button onClick={handleBurn}>Burn Tokens</button>
                        </>
                    ) : (
                        <button onClick={connectWallet}>Connect Wallet</button>
                    )}
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div>
            <header>
                <h1>Welcome to $MOMO Token</h1>
            </header>
            <main>
                <BurnComponent />
                {/* Other components and content go here */}
            </main>
            <footer>
                <p>Thanks for being part of the journey to Mars!</p>
            </footer>
        </div>
    );
}

export default App;
