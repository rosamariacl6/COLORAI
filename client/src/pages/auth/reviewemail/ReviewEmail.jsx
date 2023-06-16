import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import "./reviewemail.scss"
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow'



export const ReviewEmail = () => {
  const navigate = useNavigate();
  return (
    <Row className="min-vh-100 d-flex justify-content-center align-items-center">
        <Col className="fondoOjo d-flex justify-content-center align-items-center col-sm-4 col-md-4 col-lg-4">
           {/* contenido aquí */}
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center col-sm-8 col-md-8 col-lg-8">
        <div className="glowup"></div>
            <br />
            <h2>Revisa tu email :)</h2>
            <br />
            <br />
            <p className='text-center'>Si ya formas parte del equipo de profesionales de Glow up, deberías de tener una invitación en tu correo.</p>
            <p>Sigue las instrucciones que te envíamos para crear la cuenta</p> 
            <BotonMoradoGlow onClick={() => navigate("/login")} titulo="Inicia sesión"/>
            <br /><br />
            <br />
        </Col>
    </Row>
  )
}