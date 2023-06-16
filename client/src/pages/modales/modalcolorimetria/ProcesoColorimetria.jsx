import React from 'react'

import "./procesocolorimetria.scss"
import { Row } from 'react-bootstrap'

export const ProcesoColorimetria = () => {
  return (
    <>
        <Row className='proceso'>
            <div>
                <div>
                    <img className="iconocerrar" src="../../../../assets/images/iconosbotones/xrosa.png" alt="icono cerrar" />
                </div>
                <img className="fotoestrellas1" src="../../../../assets/images/iconosbotones/estrellas.png" alt="estrellas confirmación" />
                <h3 className='text-white pt-3 text-center'>¡Bien hecho!</h3>
                <h5 className='text-white text-center'>Proceso de colorimetría realizado y guardado con éxito</h5>
                <h6 className='text-white text-center'>Puedes repetir el proceso en cualquier momento</h6>
            </div>
        </Row>
    </>
  )
}
