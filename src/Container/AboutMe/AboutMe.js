import React,{useEffect} from 'react'
import './AboutMe.css'
import 'animate.css';
import Aos from 'aos';
export default function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div>
      <div className='about-me'>
      <h1 className='aboutme' data-aos="fade-down">ABOUT ME</h1>
        <div className='about-me-main-container'>
          <div className='image-me-container'><img data-aos="fade-right" src='https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='imagediv'></img></div>
          
          <div className='infos-container'>
            <h2 data-aos="zoom-in-left">Hi, I am Er. Nishant Chaudhary</h2>
            <ul >
              <li data-aos="zoom-out-down">First Name  :Nishant</li>
              <li data-aos="zoom-out-down">Last Name   :Chaudhary</li>
              <li data-aos="zoom-out-down">Age         :24 years</li>
              <li data-aos="zoom-out-down">Nationality :Nepalese</li>
              <li data-aos="zoom-out-down">Language    :Nepali,English,Tharu</li>
              <li data-aos="zoom-out-down">Address     :Rampurwa, Kolhavi-11,Madesh Prades</li>
            </ul>
            <button>
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
