import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import Styles from './index.module.scss'

export default function Disclaimer(){    
    const [cookies, setCookie] = useCookies(['MomoKey']);
    const [checked, setChecked] = useState(cookies['MomoKey'])

    useEffect(() => {
        setChecked(cookies['MomoKey'])
    }, [cookies])

    const handleClick = () => setCookie('MomoKey', true)

    return !checked && <div className={Styles.container}>
        <div className={Styles.content}>
            <h2>Disclaimer</h2>
            <p>
                This whitepaper is for informational purposes only and does not constitute any form of legal, 
                financial or investment advice. Potential constitute any form of legal, financial or investment 
                advice. Potential investors should seek independent legal and financial advice before investors 
                should seek independent legal and financial advice before making a decision to invest in MOMO. 
                The information contained in this whitepaper is based on current circumstances and is subject to 
                change without notice. MOMO makes no representations or warranties, expressed or implied, and 
                disclaims all liability arising from any person acting on this information. 
                Cryptocurrencies carry a high level of risk and are not suitable for all investors. 
                The value of cryptocurrencies can go down as well as up, and you may lose all of your investment. 
                Before deciding to invest, you should carefully consider your investment objectives, level of experience, 
                and risk Tolerance. This whitepaper does not constitute an offer or solicitation in any jurisdiction 
                where such an offer or solicitation is unlawful. It is the responsibility of each potential investor
                to determine the legality of an of an investment in their jurisdiction. 
                MOMO token does not have the legal qualification of a security, since it does not give any rights to 
                dividends or interests. The sale of MOMO tokens is final and non-refundable. MOMO tokens cannot have a 
                performance or a particular value outside the MOMO platform.
            </p>
        </div>
        <div className={Styles.acceptButton}>
            <button onClick={handleClick}>Accept</button>
        </div>
    </div>
}