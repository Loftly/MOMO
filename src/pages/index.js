import Head from "next/head"
import Header from '../../components/header'
import Styles from './index.module.scss'
import About from "../../components/about"
import ContractAndSecurity from "components/contractAndSecurity"
import WhereToBuy from "components/buy"
// import Disclaimer from "components/disclaimer"

export default function Home() {
    return <>
    <Head><title>MomoCoin</title></Head>
        <Header />
        <div className={Styles.banner}>
                <img 
                    className={Styles.bannerPic} 
                    src="/images/AdobeStock_562839897_2.jpeg"
                />
            </div>
        <div className={Styles.container}>
            <About />
            <ContractAndSecurity />
            <WhereToBuy />
        </div>
        {/* <Disclaimer /> */}
    </>
}