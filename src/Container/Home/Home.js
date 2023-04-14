import React, { useEffect } from 'react'
import image from './nishant1.png'
import Typed from 'react-typed'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle }
    from 'react-icons/ai';
// import './Home.css'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { styles } from '../../style'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";




const Home=()=> {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div id='home'>
            <div className='flex flex-row-reverse justify-around items-center max-w-[100vw] min-h-[100vh] flex-wrap' data-aos="zoom-in-up">
                <div className='image-container' >
                    <div className="tk-blob overflow-clip rounded-b-full" >

                        <svg className='' fill='#915EFF' viewBox="0 0 747.2 726.7" width="300" height="300">
                            <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z">

                            </path>
                            <image href={image} width="100%" height="100%" x="40" y="60" className='overflow-hidden' />
                        </svg>
                    </div>
                </div>
                <div className='max-w-[100%]'> <h1 className={`${styles.heroSubText} text-white`}>Hi, I am &nbsp;
                    <span className='text-[#915EFF]'><Typed
                        strings={[
                            'Nishant Chaudhary',
                            'Computer Engineer',
                            'MERN Developer',
                            'React Developer',
                        ]}
                        typeSpeed={50}
                        backSpeed={100}
                        loop
                    /></span></h1>

                    <div className={`${styles.heroSubText} `}>
                        <motion.p
                            variants={fadeIn("", "", 0.1, 1)}
                            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                        >
                            I'm a skilled software developer with experience in TypeScript and
                            JavaScript, and expertise in frameworks like React, Node.js, and
                            Three.js. I'm a quick learner and collaborate closely with clients to
                            create efficient, scalable, and user-friendly solutions that solve
                            real-world problems. Let's work together to bring your ideas to life!
                        </motion.p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SectionWrapper(Home, "home");
