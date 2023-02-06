import React from 'react'
import './Greeting.css'
import 'animate.css';
import { useState, useEffect, useRef } from 'react'
import video from './video.mp4'


export default function Greeting() {
    const [greeting, setGreeting] = useState("")
    const [time, setTime] = useState(new Date().toLocaleString());


    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("MORNING");
        } else if (currentHour > 12 && currentHour < 20) {
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
        <div id='greeting'>
            <video
                playsInline
                loop
                muted
                alt="All the devices"
                src={video}
                ref={videoEl}
            >
            </video>
            <div className='box'>
                <h1>Hi,<br />GOOD {greeting}</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
