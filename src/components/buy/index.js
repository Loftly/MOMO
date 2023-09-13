import Styles from './index.module.scss'

const buyInstructions = [
    {
        title: "Create a Wallet",
        description: <>
            download <a href='https://metamask.io/'>MetaMask</a> or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
        </>
    },
    {
        title: "Acquire Eth",
        description: <>
            Get some ETH! Once your ETH is loaded in your wallet, you can easily swap it over to $MOMO. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
        </>
    },
    {
        title: "Go to Uniswap",
        description: <>
            Log Into <a href='https://uniswap.org/'>Uniswap</a> or create a new account, 
            Connect your wallet. Paste the $MOMO token address intoUniswap, select MOMO, 
            and confirm
        </>
    }
]

function BuyInstructionCard(props){
    return <div className={[Styles.cardContainer, props.className].join(' ')}>
        <div className={Styles.title}>
            {`${props.stepNo}. ${props.title}`}
        </div>
        <div className={Styles.description}>
            {props.description}
        </div>
    </div>
}

export default function WhereToBuy(){
    return <div className={[Styles.container, 'section left'].join(' ')} id='buy'>
        <div className='Background'>
            <img src='/images/AdobeStock_564469050.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>How to Buy</h1>
            <div className={Styles.content}>
                {buyInstructions.map((buy, b) => <BuyInstructionCard 
                    key={b} 
                    {...buy} 
                    stepNo={b + 1}
                    className={b % 2 === 0 ? Styles.borderRight : Styles.borderLeft }
                />)}
            </div>
        </div>
    </div>
}