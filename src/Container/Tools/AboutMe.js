import React,{useEffect} from 'react'
import 'animate.css';
import Aos from 'aos';
import { technologies } from '../../Constrants';

export default function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div id='about'>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28 flex flex-col justify-center items-center rounded-full overflow-visible' data-aos="flip-left" key={technology.name}>
        <img src={technology.icon}  alt='icon' className='h-20 w-20 animate-pulse '/>
        <p>{technology.name}</p>
      </div>
    ))}
  </div>
    </div>
  )
}
