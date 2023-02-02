import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './MySkill.css'
import VisibilitySensor from "react-visibility-sensor";

const MySkill = () => {
  const arr = ['', '']

  return (
    <div>
    <div className='myskill'>
      {
        arr.map((item,id) => {
          return (<div style={{width:'200px', backgroundColor: 'red', position:'relative'}}>
            <VisibilitySensor style={{display:'flex'}}>
              {({ isVisible }) => {
                const percentage = isVisible ? 90 : 0;
                return (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
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
                      },
                      textColor: 'orange'
                    })}
                  />
                );
              }}
            </VisibilitySensor>
          </div>
          )
        })
      }
    </div>
    </div>
  );
}
export default MySkill
