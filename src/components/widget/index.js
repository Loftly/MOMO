import React from 'react';
import Styles from './index.module.scss';

export default function Widget() {
    // Replace these with your token's and pair's addresses
    const tokenAddress = '0xBFFd4D255f9917030b1dC8843EbDAd531409c607';
    const pairAddress = '0xYourPairAddressHere';

    // Construct the Uniswap URL
    const uniswapUrl = `https://app.uniswap.org/#/swap?inputCurrency=${tokenAddress}&outputCurrency=${pairAddress}`;

    return (
        <div className={[Styles.container, 'section'].join(' ')} id='about'>
            <div className='Background'>
                <img src='/images/AdobeStock_564468307.jpeg' alt='Background' />
            </div>
            <div className='Content'>
                <h1 className='sectionTitle'>Check it out!</h1>
                <div className={Styles.content}>
                    <iframe 
                        src={uniswapUrl}
                        width="100%" 
                        height="500px" 
                        frameBorder="0" 
                        title="Uniswap Interface"
                    />
                </div>
            </div>
        </div>
    );
}
