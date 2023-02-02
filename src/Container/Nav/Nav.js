import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from './Nlogo.png'
import 'animate.css';
import Aos from 'aos';
export default function Nav() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <nav>
                <div className='logo' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <span id='firstname'>Nishant</span> <img src={logo} width={50} height={50} alt='logo'></img><br />&emsp;
                    <span id='lastname'>Chaudhary</span>
                </div>
                <div className='home-to-contact'>
                    <ul>
                        <li><a href='#'>HOME</a></li>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>RESUME</a></li>
                        <li><a href='#'>PROJECT</a></li>
                        <li><a href='#'>CONTACT</a></li>
                    </ul>
                </div>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Hire Me</span>
                </button>
            </nav>
        </div>
    )
}
