import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './MySkill.css'
import VisibilitySensor from "react-visibility-sensor";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const MySkill = () => {
  const percetage = [80, 70]
  const linerprog = [{ course: 'Javascript', progress: 80 },
  { course: 'React Js', progress: 75 },
  { course: 'Html & Css', progress: 80 }]

  const linerprog2 = [{ course: 'MangoDB', progress: 75 },
  { course: 'Node Js', progress: 80 },
  { course: 'Photoshop', progress: 50 },
  ]
  return (
    <div id='skill'>
      <div className='myskill'>
        <h1 style={{ color: '#141517' }}>My Skill</h1>
        <div className='progress-container'>
          {
            percetage.map((item, id) => {
              return (
                <div style={{ width: '250px' }} className='progress'>
                  <VisibilitySensor>
                    {
                      ({ isVisible }) => {
                        const percentage = isVisible ? item : 0;
                        return (
                          <CircularProgressbar
                            value={percentage}
                            text={`${item}%`}
                            styles={buildStyles({
                              root: {},
                              path: {
                                stroke: '#f88',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.9s ease 0s',
                              },
                              trail: {
                                stroke: '#d6d6d6',
                              },
                              text: {
                                fill: 'black',
                                fontSize: '30px',
                                fontWeight: 'bold'
                              },
                              textColor: 'black'
                            })}
                          />
                        );
                      }}
                  </VisibilitySensor>
                  <h3>{item === 90 ? 'Front-End Development' : 'Back-End Development'}</h3>
                </div>
              )
            })
          }
        </div>
       
        <div className='wrapper'>
          <div className='Box1' >
          {
            linerprog.map((item) => {
              return (
               
                  <VisibilitySensor>
                    {
                      ({ isVisible }) => {
                        const percentage = isVisible ? item.progress : 0;
                        return (
                          <div className='linear-progressbar1'>
                            <Box sx={{ width: '100%', padding: '50px' }}>
                              <p>{item.course}-{item.progress}%</p>
                              <LinearProgress variant='determinate' value={percentage} style={{ height: '20px', borderRadius: '20px' }} />
                            </Box>
                          </div>
                        )
                      }
                    }
                  </VisibilitySensor>
               
              )
            })
          }
          </div>
          <div className='Box1'>
          {
            linerprog2.map((item) => {
              return (
               
                  <VisibilitySensor>
                    {
                      ({ isVisible }) => {
                        const percentage = isVisible ? item.progress : 0;
                        return (
                          <div className='linear-progressbar1'>
                            <Box sx={{ width: '100%', padding: '50px' }}>
                              <p>{item.course}-{item.progress}%</p>
                              <LinearProgress variant='determinate' value={percentage} style={{ height: '20px', borderRadius: '20px'}} />
                            </Box>
                          </div>
                        )
                      }
                    }
                  </VisibilitySensor>
              
              )
            })
          }
          </div>
        </div>
        </div>
    </div >
  );
}
export default MySkill
