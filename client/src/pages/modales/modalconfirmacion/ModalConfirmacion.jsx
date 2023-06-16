import React, { useEffect } from 'react'
import "./modalconfirmacion.scss"
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ModalConfirmacion = () => {

    
    

    const navigate = useNavigate();

  return (
    <>
        <Row className='modalconfirmacion'>
            <div>
                <div>
                    <img className="iconocerrar" src="../../../../assets/images/iconosbotones/xrosa.png" alt="icono cerrar" />
                </div>
                <img className="fotoestrellas" src="../../../../assets/images/iconosbotones/estrellas.png" alt="estrellas confirmación" />
                <h3 className='text-white pt-3 text-center'>¡Bien hecho!</h3>
                <h5 className='text-white text-center'>Las fotografías se han guardado con éxito</h5>
                <h6 className='text-white text-center'>Ya puedes continuar con el estudio completo</h6>
                <button onClick={()=>navigate('/Testcolorai/3')}>IR A TEST</button>
            </div>
        </Row>

  </>
  )
}
