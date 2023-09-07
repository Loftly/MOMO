import Styles from './index.module.scss'

const about = null


export default function About(){
    return <div className={[Styles.container, 'section'].join(' ')} id='about'>
        <div className='Background'>
            <img src='/images/AdobeStock_564468306.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>What is Momo?</h1>
            <div className={Styles.text}>
                {about}
            </div>
        </div>
    </div>
}