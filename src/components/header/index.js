import Styles from './header.module.scss'

const headerOptions = [
    {
        name: 'about',
        title: 'About',
        href: '#about'
    },
    {
        name: 'tokenomics',
        title: 'Tokenomics',
        href: '#tokenomics'
    },
    {
        name: 'roadmap',
        title: 'Roadmap',
        href: '#roadmap'
    },
    {
        name: 'buy',
        title: 'Buy',
        className: Styles.link,
        href: "https://app.uniswap.org/#/tokens/ethereum/0xbffd4d255f9917030b1dc8843ebdad531409c607",
        target: '_blank'
    }
]

export default function Header(){
    return <div className={Styles.container}>
        <div className={Styles.content}>
            <div className={Styles.avatar}><a href='#'>MoeTheMartian</a></div>
            <div className={Styles.navBar}>
                {headerOptions.map((ho, h) => ho.href 
                    ? <a key={h} href={ho.href} target={ho.target}>
                        <nav className={ho.className}>{ho.title}</nav>
                    </a>
                    : <nav key={h}>{ho.title}</nav>
                )}
            </div>
        </div>
    </div>
}