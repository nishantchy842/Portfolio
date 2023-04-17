import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
    <span className="loader"></span>
    <p>Please wait for 8 sec...</p>
    </div>
  )
}

export default Loader
