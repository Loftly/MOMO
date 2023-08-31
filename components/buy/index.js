import Styles from './index.module.scss'

const buyInstructions = [
    {
        title: "Create a Wallet",
        description: " Download MetaMask or your preferred wallet using either the app store or google play store. Desktop users, download the google chrome extension by going to metamask.io"
    },
    {
        title: "Acquire Eth",
        description: `If you no have no eth, you can buy directly on metamask, buy on other exchanges and transfer, or transfer it via a seperate wallet, and send to your self custodial wallet of choice.`
    },
    {
        title: "Go to Uniswap",
        description: "Log Into Uniswap or create a new account, Connect your wallet. Paste the $MOMO token address intoUniswap, select MOMO, and confirm"
    }
]

function BuyInstructionCard(props){
    return <div className={Styles.cardContainer}>
        <div className={Styles.title}>
            {`${props.stepNo}. ${props.title}`}
        </div>
        <div className={Styles.description}>
            {props.description}
        </div>
    </div>
}

export default function WhereToBuy(){
    return <div className={[Styles.container, 'section'].join(' ')} id='buy'>
        <h1 className='sectionTitle'>Where to Buy?</h1>
        <div className={Styles.content}>
            {buyInstructions.map((buy, b) => <BuyInstructionCard key={b} {...buy} stepNo={b + 1}/>)}
        </div>
    </div>
}