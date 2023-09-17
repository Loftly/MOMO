import Styles from './index.module.scss'

// const quote = "In this cosmos adorned with stars, it's the choices we make that define our journey's freedom. - your momo"

const links = [
    {
        src: "/icons/dextools_1.webp",
        url: null
    },
    {
        src: "/icons/etherscan.webp",
        url: "https://etherscan.io/address/0xbffd4d255f9917030b1dc8843ebdad531409c607"
    },
    {
        src: "/icons/telgrrgrgrgr.webp",
        url: "https://t.me/+W6Ghi6Q1-k05MjBh"
    },
    {
        src: "/icons/uniswap_2.webp",
        url: "https://app.uniswap.org/#/tokens/ethereum/0xbffd4d255f9917030b1dc8843ebdad531409c607"
    },
]

export default function Banner(){ 
    return <div className={Styles.container}>
        <img 
            className={Styles.bannerPic} 
            src="/images/AdobeStock_562839897_2.jpeg"
        />
        <div className={Styles.quote}>
            {links.map((link, l) => <div key={l} className={Styles.hyperlink}>
                {
                    link.url 
                        ? <a href={link.url} target='_blank'>
                            <img src={link.src}/>
                        </a>
                        : <img src={link.src}/>
                }
            </div>)}
        </div>
    </div>
}
