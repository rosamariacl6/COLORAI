import React from 'react'
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from '../../components/navbarSuperior/NavbarSuperior';
import { Row } from "react-bootstrap"

import "./fotorealizada.scss"
import { BotonTransparente } from '../../components/botontransparente/BotonTransparente'
import { BotonCamara } from '../../components/botoncamara/BotonCamara';

export const FotoRealizada = ({titulo}) => {

    const navigate = useNavigate();

  return (
    <>
    <Row className='barra-cerrar1'>
    <ResponsiveAppBar />
        <div className='d-flex flex-column barracerrar1'>
            <img  onClick={() => navigate("/cameravisor")} className="cerrarcamara1 mt-3" src="../../../../assets/images/iconosbotones/xrosa.png" alt="cerrar camara" />
            <img className="fotofrontal mt-5" src="../../../../assets/images/fondos/fotofrontal.png" alt=""/>
            <div 
                className='d-flex align--center justify-content-center pt-3 text-white'>
                    <div className='m-3' onClick={() => navigate("/cameravisor")}>
                        <BotonTransparente titulo="Guardar foto"/>
                    </div>
                    <div className='cursor d-flex align--center justify-content-center pt-3' onClick={() => navigate("/cameravisor")}><BotonCamara/></div>
                    <div className='m-3'  onClick={() => navigate("/vistafotos")}>
                    <div className='boton-ver-fotos'>Ver fotos</div>
                    </div>
            </div>
        </div>
    </Row>
</>
  )
}
