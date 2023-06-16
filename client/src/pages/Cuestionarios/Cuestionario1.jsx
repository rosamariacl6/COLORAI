import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { NavbarDark } from "../../components/navbardark/NavbarDark";
import { InputGeneral } from '../../components/inputGeneral/InputGeneral';
import { BotonMoradoGlow } from '../../components/botonmoradoglow/BotonMoradoGlow';
import axios from 'axios';
import './cuestionario1.scss';
import { InputSelect } from '../../components/inputselect/InputSelect';
import { BotonRosa } from '../../components/botonrosa/BotonRosa';

const initialTestValues = {
  test_name: "",
  type: "",
};


export const Cuestionario1 = () => {
const [options, setOptions] = useState([]);

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

    if(test.type === "1"){
      navigate(`/createQuestionTest/${test.test_name}/${res.data.insertId}`)
    }else if (test.type === "2"){
      navigate("/createQuestion_option")
    }else if (test.type === "3"){
      navigate("/createQuestion_photo")
    }
  })
  .catch((err)=>{console.log(err)})

}

useEffect(() => {
  
  axios.get('http://localhost:4000/test/getOptions')
    .then(response => {
      setOptions(response.data);
    })
    .catch(error => {
      console.error('Hubo un problema obteniendo las opciones:', error);
    });
}, []);

  return (
    <>
      <Row className='cuestionario1'>
        <Col  xs={1} className="p-0 justify-content-start align-items-center">
          <NavbarDark />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center col-sm-11 col-md-11 col-lg-11">
          <div className='fondoBrown'>
            <div className="newForm">
              <h3>¿Con qué frecuencia te lavas el cabello?</h3>
              <br /><br />

         
              
              <InputSelect
              type="text"
              label="2 a la semana"
              name="test_name"
              onChange={handleChange}
              value={""}
              />
              <InputSelect
              type="text"
              label="4 a la semana"
              name="test_name"
              onChange={handleChange}
              value={""}
              />
              <InputSelect
              type="text"
              label=""
              name="test_name"
              onChange={handleChange}
              value={""}
              />
              <br /><br />

              
              <br />
              <div className='botonEligeResp'>
                <BotonRosa id="anteriorbtn" titulo="Anterior" />
                <BotonRosa titulo="Siguiente" />
              
           
           
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
