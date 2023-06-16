import React from 'react'
import { useNavigate } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
import { BotonRosa } from '../../../components/botonrosa/BotonRosa';
import { BotonTransparente } from '../../../components/botontransparente/BotonTransparente';
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior';
import "./contrastepersonal.scss"

export const ContrastePersonal = () => {

  const navigate = useNavigate();

  return (
    <Row className='fondocontrastepersonal'>
      <ResponsiveAppBar />
    <Row>
    <Col className='info contenedor-telas d-flex flex-column'>

        <div className='mt-4'>
            <img onClick={() => navigate("/contraste")} className="flechaanterior" src="../../../../assets/images/iconosbotones/flechaanteriorrosa.png" alt="flecha anterior" />
            &nbsp; &nbsp;
            <img className="flechaposterior" src="../../../../assets/images/iconosbotones/flechaposterior.png" alt="flecha posterior" />
            <img onClick={() => navigate("/")} className="xrosa" src="../../../../assets/images/iconosbotones/xrosa.png" alt="icono cerrar" />
        </div>
        <div className='pt-3 m-auto'>
            <button className='botoncontraste'>
                <h5 className='text-center text-white m-auto textocontraste'>PASO 2 - CONTRASTE PERSONAL</h5>
            </button>
        </div>
        <div className='d-flex justify-content-center ms-4'>
            <img className="tamañofrontal" src="../../../../assets/images/fondos/fotofrontal.png" alt="foto frontal"/>
        </div>
        <div className='d-flex justify-content-center align-center p-3'>
          <div className='me-3'>
            <img className="tela" src="../../../../assets/images/iconotelas/contrastepersonal1.png" alt="" />
            <h6 className='text-white text-center mt-2'>Tela 1</h6>
          </div>
          <div className='me-3'>
            <img className="tela" src="../../../../assets/images/iconotelas/contrastepersonal2.png" alt="" />
            <h6 className='text-white text-center mt-2'>Tela 2</h6>
          </div>
          <div className='me-3'>
            <img className="tela" src="../../../../assets/images/iconotelas/contrastepersonal3.png" alt="" />
            <h6 className='text-white text-center mt-2'>Tela 3</h6>
          </div>
          <div className='me-3'>
            <img className="tela" src="../../../../assets/images/iconotelas/contrastepersonal4.png" alt="" />
            <h6 className='text-white text-center mt-2'>Tela 4</h6>
          </div>
        </div>
        <div className='mb-3 botonestelas'>
          <BotonTransparente titulo="Atrás"/>
          <BotonRosa titulo="Guardar"/>
        </div>
    </Col>
    </Row>   
</Row>
  )
}
