import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from './logo1.png'
import 'animate.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa'



export default function Nav() {
    const [navColor, setNavColor] = useState('transparent')
    const [navSize, setNavSize] = useState('8rem')
    const [color, setColor] = useState('white')
    const NavData = [
        {
            title: "Home",
            path: "/",
            icon: <FaIcons.FaHome />,
          },
          {
            title: "features",
            path: "/features",
            icon: <FaIcons.FaRegStickyNote />,
          },
          {
            title: "video",
            path: "/video",
            icon: <FaIcons.FaTruck />,
          },
          {
            title: "plans",
            path: "/plans",
            icon: <FaIcons.FaRegEnvelope />,
          },
    ]

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor('#283048') : setNavColor('transparent')
        window.scrollY > 10 ? setNavSize('5rem') : setNavSize('8rem')
        window.scrollY > 10 ? setColor('#138f6e') : setColor('white')
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div>
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }} >
             

                <div className='logo' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <Link to="greeting" spy={true} smooth={true} offset={-100} duration={500}>
                         <img src={logo} width={90} height={60} alt='logo'></img>
                        
                    </Link>
                </div>
                <div className='home-to-contact'>
                    <ul style={{ color: color }}>
                        <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} >ABOUT</Link></li>
                        <li><Link to="skill" spy={true} smooth={true} offset={-100} duration={500}>MySkill</Link></li>
                        <li><Link to="resume" spy={true} smooth={true} offset={-100} duration={500}>MyResume</Link></li>
                        <li><Link to="project" spy={true} smooth={true} offset={-100} duration={500}>PROJECT</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link></li>
                    </ul>
                </div>
                <button>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Hire Me</span>
                </button>
            </nav>
        </div>
    )
}
