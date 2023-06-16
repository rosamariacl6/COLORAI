import React from 'react'

import "./repetirproceso.scss"
import { Row } from 'react-bootstrap'

export const RepetirProceso = () => {
  return (
    <>
    <Row className='repetirproceso'>
        <div>
            <div>
                <img className="iconocerrar2" src="../../../../assets/images/iconosbotones/xrosa.png" alt="icono cerrar" />
            </div>
            <img className="fotoi" src="../../../../assets/images/iconosbotones/iconoi.png" alt="foto información" />
            <h3 className='text-white pt-3 text-center'>¡Bien hecho!</h3>
            <h5 className='text-white text-center'>Las fotografías se han guardado con éxito</h5>
            <h6 className='text-white text-center'>Ya puedes continuar con el estudio completo</h6>
        </div>
    </Row>
</>
  )
}
