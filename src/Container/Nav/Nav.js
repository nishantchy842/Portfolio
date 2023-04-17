import React, { useEffect } from 'react'
import './Nav.css'
import logo from './logo1.png'
import 'animate.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { styles } from '../../style';



export default function Nav() {
    const [navColor, setNavColor] = useState('transparent')
    const [navSize, setNavSize] = useState('8rem')
    const [color, setColor] = useState('white')
    const [toggle, setToggle] = useState(false);

    const NavData = [
        {
            id: 1,
            title: "Home",
            path: "home",
        },
        {
            id: 2,
            title: "About",
            path: "about",
        },
        {
            id: 3,
            title: "Skill",
            path: "skill",
        },
    
        {
            id: 5,
            title: "Project",
            path: "project",
        },
        {
            id: 6,
            title: "Contact",
            path: "contact",
        },
    ]

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor('#283048') : setNavColor('transparent')
        window.scrollY > 10 ? setNavSize('5rem') : setNavSize('6rem')
        window.scrollY > 10 ? setColor('#138f6e') : setColor('white')
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <>
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }} 
                className={`${
                    styles.paddingX
                  } w-full flex items-center py-5 fixed top-0 z-20 `}
                >

                <div className='logo w-full flex justify-between items-center max-w-7xl mx-auto'  >
                
                    <Link to="greeting" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className='w-20 h-20 object-contain' src={logo} alt='logo'></img>

                    </Link>
                </div>
                <div className='home-to-contact'>
                    <ul style={{ color: color }} className='list-none hidden sm:flex flex-row gap-10'>
                        {
                            NavData.map((item, id) => {
                                return <li key={item.id} className='text-secondary'><Link to={item.path} spy={true} smooth={true} offset={-100} duration={500}>{item.title}</Link></li>
                            })

                        }
                    </ul>
                    <div className='md:hidden flex flex-1 justify-end items-center'>
                    <img
                      src={toggle ? close : menu}
                      alt='menu'
                      className='w-[28px] h-[28px] object-contain'
                      onClick={() => setToggle(!toggle)}
                    />
          
                    <div
                      className={`${
                        !toggle ? "hidden" : "flex"
                      } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                      <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                      {
                        NavData.map((item, id) => {
                            return <li key={item.id} className='text-secondary'><Link to={item.path} spy={true} smooth={true} offset={-100} duration={500}>{item.title}</Link></li>
                        })

                    }
                      </ul>
                    </div>
                  </div>
                </div>

            </nav>
      </>
    )
}
