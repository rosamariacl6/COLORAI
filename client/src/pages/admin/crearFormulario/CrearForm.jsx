import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";

import "./crearform.scss";

const initialTestValues = {
  test_name: "",
  type: "",
};

export const CrearForm = () => {
const navigate = useNavigate();
const [test, setTest] = useState(initialTestValues)
const handleChange = (e) => {
  const {name,value} = e.target
  setTest({...test,[name]:value})
}

const onSubmit = () => {
  axios
  .post("http://localhost:4000/test/createTest",test)
  .then((res)=>{console.log(res)
    if(test.type === "Preguntas de desarrollo"){
      navigate(`/createQuestionTest/${res.data.insertId}/${test.test_name}`)
    }else if (test.type === "Preguntas tipo test"){
      navigate(`/createQuestion_option/${test.test_name}/${res.data.insertId}`)
    }else if (test.type === "Colorimetria"){
      navigate(`/CreateFabricOptioQuestion/${test.test_name}/${res.data.insertId}`)
    }
  })
  .catch((err)=>{console.log(err)})
}

  return (
    <>
      <Row>
        <NavbarAdmin />
        <Row className="crear-form info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center text-white">
            <div className="formulario-test edittestcard2 widthquery" style={{width: "60vw"}}>
              <div className="pt-5 pb-4">
                <h2 className="text-center pt-5">Nuevo Formulario</h2>
              </div>

              <div className="d-flex justify-content-center">
                <input
                  className="inputcreatequestion ps-3"
                  type="text"
                  label="Título del formulario"
                  placeholder="Titulo del formulario"
                  name="test_name"
                  onChange={handleChange}
                  value={test.test_name}
                    />
              </div>
              <h5 className='text-center pt-4'>Elige el tipo de formulario:</h5>
                
              <div className='d-flex justify-content-center pt-2'>
                <select onChange={handleChange} value={test.type} name="type" id="">
                  <option disabled value="">Selecciona</option>
                  <option 
                  >Preguntas de desarrollo</option>
                  <option >
                    Preguntas tipo test
                  </option>
                  <option >
                  Colorimetria
                  </option>
                </select>
              </div>

              <div className='continuartest botonvolverquery d-flex justify-content-center pt-4'>
                <button 
                  className='botonalltestforclient'
                  onClick={onSubmit}>Continuar
                </button>
                &nbsp;&nbsp;
                <button 
                  className='botonalltestforclientVolver'
                  onClick={()=>navigate("/homeAdmin")}>
                  Volver
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};