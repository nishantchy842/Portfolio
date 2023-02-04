import React from 'react'
import './Greeting.css'
import 'animate.css';
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

    return (
        <div id='greeting'>
            <div className='box'><h1>Hi,<br />GOOD {greeting}</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
