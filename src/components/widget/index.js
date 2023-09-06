import Styles from './index.module.scss'
import { SwapWidget, darkTheme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'


export default function Widget(){
    return <div className={[Styles.container, 'section'].join(' ')} id='about'>
        <div className='Background'>
            <img src='/images/AdobeStock_564468307.jpeg'/>
        </div>
        <div className='Content'>
            <h1 className='sectionTitle'>Check it out!</h1>
            <div className={Styles.content}>
                <SwapWidget width={'500px'} theme={darkTheme}/>
            </div>
        </div>
    </div>
}