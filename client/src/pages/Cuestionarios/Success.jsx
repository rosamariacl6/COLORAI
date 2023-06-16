import React, { useContext } from 'react'
import { ColorAIContext } from '../../context/ColorAIProvider'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

export const Success = () => {
    const {clientContext} = useContext(ColorAIContext) 
    const navigate = useNavigate();
  return (
    <Row style={{height: "100vh"}}>
      <Row className="info m-0 text-white">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className='fw-bold p-4 fs-2'>¡Gracias por realizar el test!</div>
          <button 
            className='botonalltestforclient'
            onClick={()=>navigate(`/oneUser/${clientContext?.user_id}`)}>
            Volver
          </button>
        </Col>
      </Row>
    </Row>
  )
}