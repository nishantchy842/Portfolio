import React,{useEffect} from 'react'
import './AboutMe.css'
import 'animate.css';
import Aos from 'aos';
export default function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div id='about'>
      <div className='about-me'>
      <h1 className='aboutme' data-aos="fade-down">ABOUT ME</h1>
        <div className='about-me-main-container'>
          <div className='image-me-container'><img data-aos="fade-right" src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='imagediv'></img></div>
          
          <div className='infos-container' data-aos="zoom-in-left">
            <h2 >Hi, I am Er. Nishant Chaudhary</h2>
            <ul >
              <li>First Name:&nbsp;&nbsp;Nishant</li>
              <li>Last Name:&nbsp;&nbsp;&nbsp;Chaudhary</li>
              <li>Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 years</li>
              <li>Nationality:&nbsp;&nbsp;&nbsp;Nepalese</li>
              <li>Language:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nepali,English,Tharu</li>
              <li>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rampurwa, Kolhavi-11,Madesh Prades</li>
            </ul>
            <button >
              <span class="transition"></span>
              <span class="gradient"></span>
              <span class="label">Download CV</span>
            </button>
          </div>
          </div>
      </div>
    </div>
  )
}
