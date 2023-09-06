import Styles from './header.module.scss'
import Link from 'next/link'

const headerOptions = [
    {
        name: 'home',
        title: 'Home',
        href: '/'
    },
    {
        name: 'about',
        title: 'Tokenomics'
    },
    {
        name: 'buy',
        title: 'Buy',
        className: Styles.link,
        href: "https://app.uniswap.org/#/tokens/ethereum/0xbffd4d255f9917030b1dc8843ebdad531409c607"
    }
]

export default function Header(){
    return <div className={Styles.container}>
        <div className={Styles.content}>
            <div className={Styles.avatar}>MoeTheMartian</div>
            <div className={Styles.navBar}>
                {headerOptions.map((ho, h) => {
                    return ho.href 
                        ? <Link key={h} href={ho.href} target='_blank'>
                            <nav className={ho.className}>{ho.title}</nav>
                        </Link>
                        : <nav>{ho.title}</nav>
                    }
                )}
            </div>
        </div>
    </div>
}