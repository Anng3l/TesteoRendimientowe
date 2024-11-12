import React from 'react'
import { Link } from 'react-router-dom'
import ButtonWave from '../../components/button/buttonWave'

import "./notfound.css";

export const NotFound = () => {
  
  return (
    <div className='general'>
        <h1 className='error'>404</h1>
        <h5 className='description'>Error 404. Page not found.</h5>
        <ButtonWave className="zxc" to={"/"}>Volver al inicio</ButtonWave>
      
    </div>
  )
}
