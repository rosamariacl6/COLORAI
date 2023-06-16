import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior'
import { Col, Row } from 'react-bootstrap'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow'



export const AllTelas = () => {
    const [telas, setTelas] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
      axios
      .get('http://localhost:4000/fabric/showAllFabrics')
      .then((res)=>{console.log(res)
        setTelas(res.data)    
    })
      .catch((err)=>{console.log(err)})
    
     
    }, [])
    


  return (
    <>
      <Row>
      <ResponsiveAppBar/>
        <Row className="crear-form info m-0">
          <div className="p-3 d-flex flex-column justify-content-center align-items-center">
            <BotonMoradoGlow
              onClick={() => navigate("/createForm")}
              titulo="Atrás"
            />
          </div>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            {telas.map((ele)=>{return(   
              <>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="text-white text-center pt-4">
                  <h3>
                    {ele.fabric_name}
                  </h3>
                </div>
                <div className='text-center pb-5'>
                  <img style={{width: "100px"}} src={`/images/telas/${ele.fabric_img}`} alt="IMAGEN" />   
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <BotonMoradoGlow onClick={()=>navigate(`/oneFabric/${ele.fabric_id}`)} titulo="Ver tela"></BotonMoradoGlow>
                  &nbsp;
                  <BotonMoradoGlow titulo="Editar tela"></BotonMoradoGlow>
                  &nbsp;
                  <BotonMoradoGlow titulo="Borrar tela"></BotonMoradoGlow>
                </div>
              </div>
              <hr className='border border-light'/>
              </>
              )})}
          </Col>
        </Row>
      </Row>
   

        
    </>
  
  )
}