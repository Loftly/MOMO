import Styles from './index.module.scss'
import { FaPhoneAlt, FaLocationArrow, FaGlobe, FaTwitter, FaLinkedin } from 'react-icons/fa'


const members = [
    // {
    //     name: "Grant Gautier",
    //     title: "Founder",
    //     position: "Dev",
    //     phone: "+123-456-7890",
    //     website: "www.reallygreatsite.com",
    //     address: "123 Anywhere St., Any City",
    //     picture: null
    // },
    // {
    //     name: "Charles Wallace",
    //     title: "Co-Founder",
    //     position: "Project Manager",
    //     phone: null,
    //     website: null,
    //     address: "123 Anywhere St., Any City",
    //     picture: null
    // }
]

const links = [
    {
        icon: <FaTwitter />,
        url: "https://google.com"
    },
    {
        icon: <FaLinkedin />,
        url: "https://google.com"
    }
]

export default function Team(){
    return <div className={['section'].join(' ')} id='team'>
        <div className='Background'><img src='/images/AdobeStock_564468307.jpeg'/></div>
        <div className='Content'>
            <h1 className='sectionTitle'>Our Team</h1>
            <div className={Styles.teamContent}>
                <div>
                    {members.map((member, m) => 
                        <div className={Styles.memberCard} key={m}>
                            <div className={Styles.header}>
                                <div className={Styles.title}>{member.name}</div>
                                <div className={Styles.subTitle}>{member.title}, {member.position}</div>
                            </div>
                            <div className={Styles.body}>
                                {member.phone && <div className={Styles.contactDetail}>
                                    <FaPhoneAlt />
                                    <span>{member.phone}</span>
                                </div>}
                                {member.address
                                    ? <div className={Styles.contactDetail}>
                                        <FaLocationArrow />
                                        <span>{member.address}</span>
                                    </div>
                                    : <></>
                                }
                                {member.website && <div className={Styles.contactDetail}>
                                    <FaGlobe />
                                    <a>{member.website}</a>
                                </div>}
                            </div>
                        </div>
                    )}
                </div>
                <div className={Styles.links}>
                    {links.map((link, l) => <a key={l} href={link.url}>{link.icon}</a>)}
                </div>
            </div>
        </div>  
    </div>
}
