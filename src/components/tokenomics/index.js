import Styles from './index.module.scss'


export default function Tokenomics(){
    return <div className={[Styles.container, 'section left'].join(' ')} id='tokenomics'>
        <div className='Background'>
            <img src='/images/AdobeStock_558469941.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>Tokenomics</h1>
            <div className={Styles.content}></div>
        </div>
    </div>
}