import { useState } from 'react';
import Styles from './header.module.scss';

const headerOptions = [
  //... your header options
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.avatar}><a href='#'>MoeTheMartian</a></div>
                <div className={Styles.menuIcon} onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`${Styles.navBar} ${menuOpen ? Styles.open : ''}`}>
                    {headerOptions.map((ho, h) => ho.href 
                        ? <a key={h} href={ho.href} target={ho.target}>
                            <nav className={ho.className}>{ho.title}</nav>
                        </a>
                        : <nav key={h}>{ho.title}</nav>
                    )}
                </div>
            </div>
        </div>
    );
}
