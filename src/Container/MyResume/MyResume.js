import React, { useState } from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import './MyResume.css'

const MyResume = () => {
    
  return (
    <div>
      <div className='main-containerResume' > 
        <div className='side-show1' data-aos="fade-right">Education Details</div>
        <div className='side-show2' data-aos="fade-left">Experience</div>
        <div className='text-container'>
            <h1 style={{textAlign:"center"}} id="resume" data-aos="zoom-in-down">MY RESUME</h1>
        </div>
      </div>
     
      </div>
  )
}

export default MyResume
