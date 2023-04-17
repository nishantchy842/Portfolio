import React from 'react'
import { styles } from '../../style'
import './media.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const SocialMedia = () => {
    return (
        <>
            <div
                className={`${styles.paddingX
                    }  w-full flex items-center py-5 top-0 z-20 `}
            >

                <div className="sidebar-social-media">
                    <nav>
                        <ul>
                            <li><Link to="https://www.linkedin.com/in/nishant-chaudhary842/"><i ><FaLinkedinIn /> </i><span>Linkedin</span></Link></li>
                            <li><Link to="https://github.com/nishantchy842"><i ><FaGithub /> </i><span>Github</span></Link></li>
                            <li><Link to="https://www.facebook.com/nishantchaudhary1415/"><i ><FaFacebook /></i><span>Facebook</span></Link></li>
                            <li><Link to="https://www.instagram.com/aksen.nishant/"><i ><FaInstagram /></i><span>Instagram</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default SocialMedia
