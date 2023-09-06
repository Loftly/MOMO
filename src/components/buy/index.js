import Styles from './index.module.scss'

const buyInstructions = [
    {
        title: "Create a Wallet",
        description: <>
            Download <a href='https://metamask.io/'>MetaMask</a> or your 
            preferred wallet using either the app store or google play store.
        </>
    },
    {
        title: "Acquire Eth",
        description: <>
            If you no have no eth, you can buy directly on metamask, 
            buy on other exchanges and transfer, or transfer it via 
            a seperate wallet, and send to your self custodial wallet of choice
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
            <h1 className='sectionTitle'>Where to Buy?</h1>
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