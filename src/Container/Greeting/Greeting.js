import React from 'react'
import './Greeting.css'
import 'animate.css';
import Home from '../Home/Home';
import { useState, useEffect, useRef } from 'react'

export default function Greeting() {
    const [greeting, setGreeting] = useState("")
    const [time, setTime] = useState(new Date().toLocaleString());


    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("MORNING");
        } else if(currentHour> 12 && currentHour < 20){
            setGreeting("AFTERNOON");
        }else{
            setGreeting("EVENING");
        }
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const ref = useRef(null);

    function handleClick() {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className='box'><h1>Hi,<br />GOOD {greeting}</h1>
                <h2>{time}</h2>
                <section id="section07" class="demo">
                    <a href="#section08" onClick={handleClick}><span></span><span></span><span></span>Scroll</a>
                </section>
            </div>
            <div ref={ref}><Home/></div>
        </div>
    )
}
