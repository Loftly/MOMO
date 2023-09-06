import Styles from './index.module.scss'

const phases = [
    {
        title: "Phase One",
        objectives: [
            "Launch Token",
            "Social Media and Website Creation",
            "Get trending on X through mischevious memery and marketing tactics",
            "1000+ holders"
        ]
    },
    {
        title: "Phase Two",
        objectives: [
            "Community Partnerships",
            "Trending on DexTools, CoinMarketCap etc",
            "Cross Chain Compatability/ Establish a DAO",
            "20000+ holders",
            "Merch/ NFT Deployment"
        ]
    },
    {
        title: "Phase Three",
        objectives: [
            "Music/ AI Partnerships",
            "S-Tier Exchange Listings",
            "Eco- Friendly Mining Initiative/ Blockchain Education",
            "ELON COLLAB- MORE TBA",
            "Staking",
            "Thematic MOMO Universe"
        ]
    },
]

export default function About(){
    return <div className={[Styles.container, 'section'].join(' ')}>
        <div className='Background'>
            <img src='/images/AdobeStock_564469033.jpeg'/>
        </div>
        <div className={['Content', Styles.content].join(' ')}>
            <h1 className='sectionTitle'>Our Plan</h1>
            {phases.map((phase, p) => (
                    <div key={p} className={Styles.phase}>
                        <div className={Styles.title}>
                            <span>{phase.title}</span></div>
                        <div className={Styles.details}>
                            <ul>{phase.objectives.map((obj, o) => <li key={o}>{obj}</li>)}</ul>
                        </div>
                    </div>
                ))}
        </div>
    </div>
}