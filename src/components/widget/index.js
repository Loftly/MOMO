import Styles from './index.module.scss'

export default function Widget(){
    return <div className={[Styles.container, 'section'].join(' ')} id='about'>
        <div className='Background'>
            <img src='/images/AdobeStock_564468307.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>Check it out!</h1>
            <div className={Styles.content}>
            </div>
        </div>
    </div>
}
