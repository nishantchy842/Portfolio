import React,{useEffect} from 'react'
import image from './nishant1.png'
import Typed from 'react-typed'
import { AiFillFacebook,AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } 
from 'react-icons/ai';
import './Home.css'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div id='home'>
            <div className='main-container'>
                <div className='second-container' data-aos="zoom-in-up">
                    <div className='image-container' ><img src={image} alt='new'></img></div>
                    <div className='intro-container'>
                    <div id='hidiv'> <h2>Hi, I am &nbsp;</h2></div>
                    <h2><Typed
                            strings={[
                                'Nishant Chaudhary 😊',
                                'Computer Engineer 💻',
                                'MERN Developer 🧑‍💻', 
                                'React Developer',
                            ]}
                            typeSpeed={50}
                            backSpeed={100}
                            loop
                        /></h2>
                    </div>
                    <div className='description-container'>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                    </div>
                </div>
            </div>
        </div>
    )
}
