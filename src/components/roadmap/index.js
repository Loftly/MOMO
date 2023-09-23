import Styles from './index.module.scss'

const phases = [
    {
        title: "Phase One",
        objectives: [
            "Assemble a community of space enthusiasts, tech aficionados, and crypto believers.",
            "Launch the $MOMO token with unique tokenomics, ensuring fair distribution and a solid foundation.",
            "Get trending on X through mischevious memery and marketing tactics",
            "1000+ holders"
        ]
    },
    {
        title: "Phase Two",
        objectives: [
            "Achieve our first major market cap milestone, proving the strength and conviction of the Martian community.",
            "Roll out updates and tweaks based on community feedback, navigating the crypto asteroid field.",
            "Engage in partnerships and collaborations, enhancing the $MOMO ecosystem and expanding our intergalactic network.",
            "Introduce more incentives and reward mechanisms for holders, making the journey even more lucrative.",
            "Aim to grab the attention of Elon and SpaceX, establishing $MOMO's narrative in the broader space narrative."
        ]
    },
    {
        title: "Phase Three",
        objectives: [
            "Community Partnerships",
            "Trending on DexTools, CoinMarketCap, etc",
            "Cross Chain Compatability",
            "20000+ holders",
            "Merch/NFT Deployment, airdropped to the top 4,200 Martians"
        ]
    },
]

export default function About(){
    return (
        <div className={[Styles.container, 'section'].join(' ')} id='roadmap'>
            <div className='Background'>
            <figure>
                    <img src='/images/AdobeStock_564469033.jpeg'/>
                    <figcaption>alienmemerun@gmail.com</figcaption>
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
