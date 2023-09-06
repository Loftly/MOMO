import Head from "next/head"
import Header from '../components/header'
import About from "../components/about"
import WhereToBuy from "@/components/buy"
import Banner from "@/components/banner"
import Widget from "@/components/widget"
import Tokenomics from "@/components/tokenomics"
import Roadmap from "@/components/roadmap"

export default function Home() {
    return <>
    <Head><title>MoeTheMartian</title></Head>
        <Header />
        <Banner />
        <About />
        <WhereToBuy />
        <Widget />
        <Tokenomics />
        <Roadmap />
    </>
}