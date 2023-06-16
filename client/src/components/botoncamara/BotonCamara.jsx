import React from 'react'

import "./botoncamara.scss"

export const BotonCamara = ({capture,n}) => {
  console.log(n);
  return (
    <div onClick={()=>capture(n)} className='botoncamara'>
        <img className="iconocamara" src="../../../../assets/images/iconosbotones/iconocamara.png" alt="boton para hacer foto" />
    </div>
  )
}
