import React, { useEffect } from 'react'
import image from './nishant1.png'
import Typed from 'react-typed'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { styles } from '../../style'
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { services } from '../../Constrants';
import { Tilt } from 'react-tilt'
import { Button } from '@mui/material';
import { cv } from '../../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id='about'>
      <div className='flex flex-row-reverse justify-around items-center max-w-[100vw] min-h-[100vh] flex-wrap' data-aos="zoom-in-up">
        <div className='image-container' >
          <div className="tk-blob overflow-clip rounded-b-full" >

            <svg className='' fill='#915EFF' viewBox="0 0 747.2 726.7" width="300" height="300">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z">

              </path>
              <image href={image} width="100%" height="100%" x="40" y="60" className='cursor-pointer animate-pulse ' />
            </svg>
          </div>
        </div>
        <div className='max-w-[100%]'> <h1 className={`${styles.heroSubText} text-white`}>Hello, I am &nbsp;
         <br /> <span className='text-[#915EFF]'><Typed
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
              I'm a software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js.
              I'm a quick learner and collaborate closely with clients to
              create efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
            <a href={cv}
              download="cv">
              <Button variant='outlined' className='transition ease-in-out delay-150 hover:scale-110 duration-300' type="button" data-aos="fade-right"> Download cv </Button>
            </a>
          </div>
        </div>
        <div className='mt-20 flex flex-wrap gap-10'>
          {
            services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

      </div>

    </div>
  )
}
export default SectionWrapper(Home, "home");
