import Styles from './index.module.scss';

const about = "Moe is the leader of the MOMO species, native to Mars. Born on the red plains of Mars and inspired by the vastness of the universe, $MOMO isn't just another cryptocurrency; it's an interplanetary ticket, a beacon calling all Martians home. With groundbreaking anti-bot measures, a dynamic tax mechanism, and rewards that make HODLing feel like soaring through the Milky Way, we're on a mission to make a dent in the crypto cosmos. =new paragraph here= Our community? Think of an astral gathering of space enthusiasts, tech geeks, and dreamers, all aboard the $MOMO spaceship. Destination? To connect with interstellar entities like Elon and SpaceX, making our Martian dreams a reality. Hop in, strap on, and let's chart a course #ToMarsWithMOMO!"


export default function About(){
    return (
        <div className={[Styles.container, 'section'].join(' ')} id='about'>
            <div className='Background'>
                <img src='/images/AdobeStock_564468306.jpeg'/>
            </div>
            <div className='Content'>
                <h1 className='sectionTitle'>Who is Moe, Anyway?</h1>
                <div className={Styles.text}>
                    {paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
