import React from 'react'
import { useNavigate } from "react-router-dom";

import { Col, Row } from 'react-bootstrap'
import { BotonRosa } from '../../../components/botonrosa/BotonRosa';
import { BotonTransparente } from '../../../components/botontransparente/BotonTransparente';
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior';

import "./contraste.scss"

export const Contraste = () => {

    const navigate = useNavigate();

  return (
    <>
        <Row className='fondocontraste'>
            <ResponsiveAppBar/>
        <Row>
            <Col className='divcontraste d-flex flex-column'>
                <div className='mt-4'>
                    <img className="flechaanterior" src="../../../../assets/images/iconosbotones/flechaanterior.png" alt="flecha anterior" />
                    &nbsp; &nbsp;
                    <img onClick={() => navigate("/contrastepersonal")} className="flechaposterior" src="../../../../assets/images/iconosbotones/flechaposterior.png" alt="flecha posterior" />
                    <img onClick={() => navigate("/")} className="xrosa" src="../../../../assets/images/iconosbotones/xrosa.png" alt="icono cerrar" />
                </div>
                <div className='pt-3 m-auto'>
                    <button className='botoncontraste'>
                        <h5 className='text-center text-white m-auto textocontraste'>PASO 1 - CONTRASTE</h5>
                    </button>
                </div>
                <div className='d-flex justify-content-center ms-4'>
                    <img className="tamañofrontal" src="../../../../assets/images/fondos/fotofrontal.png" alt="foto frontal"/>
                </div>
                <img className="tela" src="../../../../assets/images/iconotelas/fototelacontraste.png" alt="" />
                <h6 className='text-white text-center mt-2'>Tela 1</h6>
                <div className='mb-3 botonestelas'>
                    <BotonTransparente titulo="Atrás"/>
                    &nbsp;&nbsp;
                    <BotonRosa titulo="Guardar"/>
                </div>
            </Col>
        </Row>  
        </Row> 
    </>
  )
}
