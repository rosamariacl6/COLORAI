import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Col, Row } from "react-bootstrap";

import { InputAdminForm } from '../../../components/inputAdminForm/InputAdminForm'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow';
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior'

import './creartela.scss';

const initialFabricValues = {
  fabric_name: "",
  fabric_img: "",
}


export const CrearTela = () => {
  const navigate = useNavigate();
  const [tela, setTela] = useState(initialFabricValues);
  const [file, setFile ] = useState();
  console.log(tela);

  const handleChange = (e) => {
    const {name,value} = e.target
    setTela({...tela,[name]:value})
  }

  const handleFiles = (e) => {
    setFile(e.target.files[0])
}
 

  const onSubmit = () => { 
  
    const newFormData = new FormData();
    newFormData.append("tela", JSON.stringify(tela) )
    if (file){
      newFormData.append("file", file)
    }

   axios
    .post("http://localhost:4000/fabric/createFabric", newFormData)
    .then((res)=>{ 
      console.log(res)
      navigate("/allFabric")
    })
    .catch((err)=>{console.log(err)})
  }
 

  return (
    <>
      <Row className='fondocreartela'>
        <ResponsiveAppBar />
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center col-sm-11 col-md-11 col-lg-11">
            {/* <div className="newForm">
              <h2>Crear Nueva Tela</h2>
              <br />
              <br />
              <InputAdminForm
              type="text"
              label="Nombre de la tela"
              name="fabric_name"
              onChange={handleChange}
              value={tela.fabric_name}
            />
             <InputAdminForm 
              type="file"
              label="Imagen"
              onChange={handleFiles}
            />
            <br />
              <BotonMoradoGlow 
              onClick={(onSubmit) }
              titulo="Crear Tela"
            />
            </div> */}
            
        </Col>
      </Row>
      </Row>
    </>
  );
};
