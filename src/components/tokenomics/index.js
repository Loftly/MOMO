import Styles from './index.module.scss'


const tokenomicsInfo = [
    {
        chartName: "Supply Information",
        properties: [
            {
                key: "Initial Supply",
                value: "420,000,000,000,000"
            },
            {
                key: "Liquidity",
                value: "94%"
            },
            {
                key: "Circulating Supply",
                value: "394,800,000,000,000"
            },
            {
                key: "Liquidity Lock",
                value: "1 Month"
            }
        ]
    },
    {
        chartName: "Token Information",
        properties: [
            {
                key: "Ticker",
                value: "$MOMO"
            },
            {
                key: "Network",
                value: "Ethereum"
            },
            {
                key: "Transaction Tax",
                value: "20/20 Sliding -> 1/1 Static"
            },
            {
                key: "Slippage",
                value: "0.50%"
            }
        ]
    }
] 

export default function Tokenomics(){
    return <div className={[Styles.container, 'section left'].join(' ')} id='tokenomics'>
        <div className='Background'>
            <img src='/images/AdobeStock_558469941.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>Tokenomics</h1>
            <div className={[Styles.content, 'flex'].join(' ')}>
                {tokenomicsInfo.map((ti, t) => (
                    <div key={t} className={Styles.tiTable}>
                        <div className={Styles.header}>{ti.chartName}</div>
                        <div className={Styles.content}>
                            {ti.properties.map((prop, p) => (
                                <div key={p} className={Styles.property}>
                                    <span>{prop.key}</span>
                                    <span>{prop.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className={Styles.whitePaper}>
                    <a href='/Main_WP.pdf' target="_blank">Official MOMO Whitepaper</a>
                </div>
                <div className={Styles.whitePaper}>
                    <a href='/Technical_White_Paper.pdf' target="_blank">Technical Whitepaper</a>
                </div>
            </div>
        </div>
    </div>
}