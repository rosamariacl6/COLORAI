import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior'
import { Col, Row } from 'react-bootstrap'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow'

import "./creartela.scss"

export const OneTela = () => {

  const navigate= useNavigate();

    const [oneTela, setOneTela] = useState()
    const {fabric_id} = useParams()

   useEffect(() => {

    axios
    .get(`http:////localhost:4000/fabric/showOneFabric/${fabric_id}`)
    .then((res)=>{
        console.log("------", res.data)
        setOneTela(res.data[0]) })
    .catch((err)=>{console.log(err)})
   }, [])
   
  return (
   <>
    <Row>
    <ResponsiveAppBar/>
      <Row className="crear-form info m-0 align-items-center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-3 d-flex flex-column justify-content-center align-items-center">
          <BotonMoradoGlow
            onClick={() => navigate("/allFabric")}
            titulo="Atrás"
          />
        </div>
        <h1 className='text-white pt-3 pb-3'>{oneTela?.fabric_name}</h1>
        <img className="onetelasize" src={`/images/telas/${oneTela?.fabric_img}`} alt="" />
        
        </Col>
      </Row>

    </Row>

              
   </>
  )
}