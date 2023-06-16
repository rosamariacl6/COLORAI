import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ColorAIContext } from '../../../context/ColorAIProvider'
import { Row, Col } from 'react-bootstrap'
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior'


export const LandingUser = (id) => {

  const navigate = useNavigate();
  const {user, setIsLogged, setUser} = useContext(ColorAIContext)
  return (
    <>
    <Row className='info'>
    <ResponsiveAppBar />
    <Row>
    <Col className='contenedor-saludo-usuario d-flex flex-column align-items-center justify-content-center'>
      <span>
      <img src="/assets/images/logos/logoSaludo.png" alt="saludo" className='icono-saludo'/>
      </span>
      <h1 className='font-white m-2'>¡Hola, {user?.name}!</h1>
      <h6 className='font-white m-2'>¿Qué tal estás hoy?</h6>
      <div className='contenedor-lading-user d-flex'>
      <div onClick={()=>navigate(`/cameravisor`)} className='botones-opciones font-white m-2 text-center'>REALIZAR COLORIMETRÍA</div>
      <div onClick={()=>navigate(`/search`)} className='botones-opciones font-white m-2 text-center'>BUSCAR CLIENTES</div>
      <div onClick={() => navigate("/oneUserProfessional")}   className='botones-opciones font-white m-2 text-center'>IR A MI PERFIL</div>
      </div>
     </Col>
    </Row>
    </Row>
    </>
  )
}