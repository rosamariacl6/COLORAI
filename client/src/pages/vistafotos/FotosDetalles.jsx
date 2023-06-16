import React from 'react'
import { useNavigate } from "react-router-dom";

import { Row } from "react-bootstrap"
import { MiniFotos } from '../../components/minifotos/MiniFotos';
import { BotonRosa } from '../../components/botonrosa/BotonRosa';

import "./fotosdetalles.scss"
import ResponsiveAppBar from '../../components/navbarSuperior/NavbarSuperior';

export const FotosDetalles = () => {
    
    const navigate = useNavigate();

  return (
    <>
    <Row className="barracerrar2">
    <ResponsiveAppBar />
        <div className='d-flex flex-column'>
            <div className='mt-3 d-flex justify-content-between'>
            <img onClick={() => navigate("/fotorealizada")}  className="cerrarcamara2" src="../../../../assets/images/iconosbotones/xrosa.png" alt="cerrar camara" />
            </div>
            <img className="fotofrontal" src="../../../../assets/images/fondos/fotofrontal.png" alt=""/>
            <div className='d-flex justify-content-center align-center p-3'>
                <div className='me-3'>
                    <MiniFotos/>
                </div>
                <div className='me-3'>
                    <MiniFotos/>
                </div>
                <div className='me-3'>
                    <MiniFotos/>
                </div>
                <div className='me-3'>
                    <MiniFotos/>
                </div>
            </div>
            <div className='guardar' onClick={() => navigate("/modalconfirmacion")}>   
                <BotonRosa titulo="Realizar estudio"/>
            </div>
           
            <div>
                <button onClick={() => navigate("/modalcolorimetria")}>Modal colorimetria</button>
            </div>
            <div>
                <button onClick={() => navigate("/modalrepetirproceso")}>Modal repetir proceso</button>
            </div>
            <div>
                <button onClick={() => navigate("/contraste")}>Tela</button>
            </div>
        </div>
    </Row>       
</>
  )
}
