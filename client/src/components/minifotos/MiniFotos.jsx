import React from 'react'
import { useNavigate } from "react-router-dom";

import "./minifotos.scss"

export const MiniFotos = () => {

  const navigate = useNavigate();
  
  return (
    <div>
        <img className="minifotosdark" src="../../../../assets/images/fondos/fotofrontal.png" alt=""/>
        <img 
          onClick={() => navigate("/cameravisor")}
          className="plusañadir" src="../../../../assets/images/iconosbotones/plusañadir.png" 
          alt="" 
          />
        <h6 className='text-white'>Rostro frontal</h6>
    </div>
  )
}
