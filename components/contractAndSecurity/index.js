import Styles from './index.module.scss'

export default function ContractAndSecurity(){
    return <div className={[Styles.container, 'section'].join(' ')} id='contract'>
        <h1 className='sectionTitle'>Contract and Security</h1>
        <div className={Styles.content}>
            <p className={Styles.text}>
                MOMO operates on the Ethereum blockchain, utilizing the power of smart contracts to automate 
                transactions and ensure the integrity of our tokenomics. The contract address is 
                (please always confirm this address before any transactions to avoid scams). 
            </p>
            <p className={Styles.text}>
                We prioritize the security of our community members and their investments. Our smart contract has been audited by 
                [Name of Reputable Audit Firm], a respected firm in the blockchain industry. The audit confirmed that 
                our contract is free of common vulnerabilities and is in line with best practices for contract coding.
                You can view the full audit report [here](link to the audit report). 
            </p>
            <p className={Styles.text}>
                In addition to the smart contract audit, we have implemented the following security measures: 
            </p>
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
            <p className={Styles.text}>
                We are committed to maintaining the  highest level of security and will continue to update 
                our practices as the landscape evolves. We encourage our community to stay vigilant and safe, 
                and to report any suspicious activities to our team. We are steadfast in our commitment to 
                maintaining the highest level of security and will continue to  adapt our practices as the 
                landscape evolves. We urge our community to remain vigilant and safe, and to promptly report 
                any suspicious activities to our team
            </p>
        </div>
    </div>
}