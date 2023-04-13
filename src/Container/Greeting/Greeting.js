import React from 'react'
import './Greeting.css'
import 'animate.css';
import { useState, useEffect, useRef } from 'react'
import { styles } from '../../style';
import { motion } from "framer-motion";
import ComputersCanvas from '../../three/computer';


export default function Greeting() {
    const [greeting, setGreeting] = useState("")
    const [time, setTime] = useState(new Date().toLocaleString());


    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("MORNING");
        } else if (currentHour >= 12 && currentHour <= 20) {
            setGreeting("AFTERNOON");
        } else {
            setGreeting("EVENING");
        }
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return (
        <div id='greeting' >


            <section className={`relative w-full h-screen mx-auto`}>

                <div
                    className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Nishant</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop Attractive, user <br className='sm:block hidden' />
                            interfaces and web applications
                        </p>
                    </div>

                </div>
                <div className='box'>
                <h1>GOOD {greeting}</h1>
                <h2>{time}</h2>
            </div>


                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href='#home'>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full bg-secondary mb-1 bg-fuchsia-50'
                            />
                        </div>
                    </a>
                </div>
            </section>





        </div>
    )
}
