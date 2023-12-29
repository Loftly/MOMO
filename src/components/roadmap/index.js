import Styles from './index.module.scss'

const phases = [
    {
        title: "Phase One | Ethereum",
        objectives: [
            "Assemble a community of space enthusiasts, tech aficionados, and crypto believers on the ETH Chain.",
            "Launch the $MOMO token with unique tokenomics, ensuring fair distribution and a solid foundation.",
            "Get trending on X through mischevious memery and marketing tactics",
            "100+ Holders. Establish Strong Diamon Community Foundation",
            "$50,000.00 MC"
        ]
    },
    {
        title: "Phase Two | Solana",
        objectives: [
            "Achieve our first major market cap milestone ($500k Goal), proving the strength and conviction of the Martian community.",
            "Airdrop community.",
            "Engage in partnerships and collaborations, enhancing the $MOMO ecosystem and expanding our intergalactic network.",
            "Introduce more incentives and reward mechanisms for holders, making the journey even more lucrative.",
            "Aim to grab the attention of Elon and SpaceX, establishing $MOMO's narrative in the broader space narrative.",
            "Grow our small ETH community into the SOL community, preparing for AVAX Launch."
        ]
    },
    {
        title: "Phase Three | AVAX",
        objectives: [
            "Community Partnerships",
            "$1 Million Market Cap",
            "NFTs Rollout",
            "2000+ holders",
            "Merch/NFT Deployment, airdropped to the top 420 Martians"
        ]
    },
]

export default function About(){
    return (
        <div className={[Styles.container, 'section'].join(' ')} id='roadmap'>
            <div className='Background'>
            <figure>
                    <img src='/images/AdobeStock_564469033.jpeg'/>
                   // <figcaption>alienmemerun@gmail.com</figcaption>
                </figure>
            </div>
            <div className={['Content', Styles.content].join(' ')}>
                <h1 className='sectionTitle'>Galactic Roadmap</h1>
                {phases.map((phase, p) => (
                    <div key={p} className={Styles.phase}>
                        <div className={Styles.title + (phase.title === "Phase Three" ? ` ${Styles.phaseThree}` : '')}>
                            <span>{phase.title}</span>
                        </div>
                        <div className={Styles.details}>
                            <ul>
                                {phase.objectives.map((obj, o) => <li key={o}>{obj}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
