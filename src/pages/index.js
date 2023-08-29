import Image from "next/image"

// Images list, can contain either just the link of image, or an object
// that contains multiple properties for the image
const images = [
    // Img object (i = 0)
    {
        src: '/next.svg',
        href: '/about',
        descriptor: "This is the next logo"
    },
    // Img object (i = 1)
    {
        src: "/images/vercel.svg",
        href: "/contact",
        descriptor: "This is the Vercel logo"
    }
]

const texts = [
    "Hi my name is Jay",
    "How are you doing?",
    "What's going on?"
]

export default function Home() {
    return <div id="main">
        <h1>Enter app name</h1>
        <a href="/about"><span>Go to about</span></a>
        {images.map((img, i) => <div className={'imageContainer'} key={i}>
            <a href={img.href}>
                <Image src={img.src} height={100} width={100} alt={img.src}></Image>
            </a>
            <div>{img.descriptor}</div>
            </div>)}
        {texts.map((txt, t) => <p key={t}>{txt}</p>)}
    </div>
}