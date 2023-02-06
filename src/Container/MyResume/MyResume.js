import React from 'react'
import './MyResume.css'
import {FaUserGraduate} from 'react-icons/fa'

const MyResume = () => {
  const education = [
    { board: 'Bachelor in Computer Engineering', school: 'Nepal College of Information Technology',address:'Balkumari, Lalitpur',year:'2018-2023' },
    { board: '+2 Science Stream', school: 'Prasadi Academu', address: 'Minbhawan, Lalitpur',year:'2016-2028' },
    { board: 'SLC', school: 'International English Boarding School', address: 'Kalaiya, Bara',year:'2016' },
  ]
  return (
    <div id='resume'>
      <div className='mero-resume1'>
        <h1>My Resume</h1>
        <div className='mero-resume'>
          <div className='education'>
          <h3 style={{textAlign:'center', marginBottom:'50px'}}><FaUserGraduate /> Educational Qualification</h3>
            {
              education.map(item => {
                return (
                  <div className='details' >
                    <div className='years'>{item.year}</div>
                    <div className='line'></div>
                    <div className='description'>
                      <h3>{item.board}</h3>
                      <h3>{item.school}</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='work'></div>
        </div>
      </div>
    </div >
  )
}

export default MyResume

