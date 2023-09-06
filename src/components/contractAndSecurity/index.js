import Styles from './index.module.scss'

const TextCard = ({children, ...props}) => <div className={Styles.textCard}>{children}</div>

export default function ContractAndSecurity(){
    return <div className={[Styles.container, 'section'].join(' ')} id='contract'>
        <div className='Background'>
            <img src='/images/AdobeStock_564468307.jpeg' />
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>Contract and Security</h1>
            <div className={Styles.content}>
                <TextCard>
                    MOMO operates on the Ethereum blockchain, utilizing the power of smart contracts to automate 
                    transactions and ensure the integrity of our tokenomics.
                </TextCard>
                <TextCard>
                    We prioritize the security of our community members and their investments. Our smart contract has been audited by 
                    _____, a respected firm in the blockchain industry. The audit confirmed that 
                    our contract is free of common vulnerabilities and is in line with best practices for contract coding.
                    You can view the full audit report here. 
                </TextCard>
                <TextCard>
                    In addition to the smart contract audit, we have implemented the following security measures: 
                    <ul>
                        <li>
                            Liquidity Locking: A significant portion of the liquidity has been 
                            locked for a period of [time], ensuring stability and trust in our token
                        </li>
                        <li>
                            Timelock: Changes to the contract require a delay before they can be implemented, 
                            providing a safety net against malicious activities.
                        </li>
                        <li>
                            Multisig Wallet: Funds are stored in a multisig wallet, requiring 
                            multiple signatories for transactions, further securing the funds. 
                        </li>
                    </ul>
                </TextCard>
                <TextCard>
                    We are committed to maintaining the  highest level of security and will continue to update 
                    our practices as the landscape evolves. We encourage our community to stay vigilant and safe, 
                    and to report any suspicious activities to our team. We are steadfast in our commitment to 
                    maintaining the highest level of security and will continue to  adapt our practices as the 
                    landscape evolves. We urge our community to remain vigilant and safe, and to promptly report 
                    any suspicious activities to our team
                </TextCard>
            </div>
        </div>  
    </div>
}