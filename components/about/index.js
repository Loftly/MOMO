import Styles from './index.module.scss'

export default function About(){
    return <div className={[Styles.container, 'section'].join(' ')} id='about'>
        <div className={Styles.quote}>
            "In this cosmos adorned with stars, it's the choices we make that define our journey's freedom."
            - your mom
        </div>
        <h1 className='sectionTitle'>What is Momo?</h1>
        
        <div className={Styles.content}>
            <div className={Styles.text}>
            <p>MOMO is a cryptocurrency that employs ERC 20 blockchain technology. Behind It, Is a
dedicated team of finance professionals, marketeers, engineers and software developers,
working collectively towards pioneering advancements In the cryptocurrency community.
Our journey began with a desire to create a grassroots oriented, community driven meme
coin that could Inspire the world. That exact moment, MOMO appeared and everything
became clear.</p>
<p> We are committed to fostering a vibrant and engaged community around MOMO. We
understand the importance of transparency, communication, and robust security measures
in this sector. Through research and analysis, we identified our niche in the market, for a
coin that can not only be a symbol of hope and optimism but also have advanced blockchain
technology running it behind the scenes that will ensure the safety and privacy of its users,
and allow for future expansion of the project as a whole.
MOMO represents our vision for a more efficient, transparent, and inclusive future. We
invite you to join us on this journey, contributing your expertise and insights along the way
as we navigate the evolving landscape of together.</p>
            </div>
            <div className={Styles.avatar}>
                <img 
                    
                    src='/images/AdobeStock_564469050.jpeg'

                />
            </div>
        </div>
        
    </div>
}