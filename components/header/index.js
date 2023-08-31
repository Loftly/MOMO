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
        title: 'About',
        href: '#about'
    },
    {
        name: 'contract',
        title: 'Contract',
        href: '#contract'
    },
    {
        name: 'buy',
        title: 'Buy',
        href: '#buy'
    },
    {
        name: 'team',
        title: 'Team',
        href: '/'
    }
]

export default function Header(){
    return <div className={Styles.container}>
        <div className={Styles.avatar}>
            MomoCoin
        </div>
        <div className={Styles.navBar}>
            {headerOptions.map((ho, h) => <Link key={h} href={ho.href}>
                <nav>{ho.title}</nav>
            </Link>)}
        </div>
    </div>
}