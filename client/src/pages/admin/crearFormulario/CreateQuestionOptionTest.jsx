import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Opciones } from "./Opciones";
import { idGen } from "../../../utils/utils";
import { Col, Row } from "react-bootstrap";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";

import "./crearform.scss";

const initialValues = {
  test_name: "",
  test_id: "",
  question_name: "",
  //FABRIC_id
  question_text: "",
  question_id: "",
  questions: [],
};

export const CreateQuestionOptionTest = () => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState(initialValues);
  const [questions, setQuestions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [dataFinal, setDataFinal] = useState([]);

  const { test_name, test_id } = useParams();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
      test_id: test_id,
      test_name: test_name,
    });
  };

  const onSubmit = () => {
    const data = { ...question, question_id: idGen() };

    setQuestions([...questions, data]);
    setQuestion(initialValues);
  };

  const aceptar = () => {
    axios
      .post("http://localhost:4000/question/createQuestion", questions)

      .then((res) => {
        console.log(res);
        navigate("/test");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Row>
        <NavbarAdmin />
        <Row className="info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center pt-5">
            <div className='formulario-test widthquery fondocreate' style={{width: "60vw"}}>
                <h2 className="text-center text-white pt-4 pb-4">Crea las preguntas con sus opciones</h2>

                <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                  <input
                    className='inputcreatequestion ps-3'
                    type="text"
                    label="Añade tu pregunta"
                    placeholder="Añade tu pregunta"
                    name="question_name"
                    onChange={handleChange}
                    value={question.question_name}
                  />
                  {/* &nbsp;&nbsp;
                  <input 
                    className='inputcreatequestion ps-3'
                    type="text"
                    label="Añade las opciones"
                    placeholder="Añade las opciones"
                    name="question_text"
                    onChange={handleChange}
                    value={question.question_text}
                  /> */}
                </div>
                <div 
                  className="d-flex flex-column align-items-center justify-content-center">
                  <button 
                    onClick={onSubmit} titulo="Validar"
                    className='botonalltestforclient'>Añadir</button>
                </div>
            </div>

              <div className="text-white d-flex flex-column align-items-center justify-content-center pt-3">
                {questions.map((elemen, index) => {
                  return (
                    <>
                      <p key={index}>{elemen.question_name}</p>
                      <p>{elemen.question_text}</p>
                      <div className='d-flex align-items-center justify-content-center pb-3'>
                        <BotonMoradoGlow 
                          onClick={()=>setShowOptions(!showOptions)} 
                          titulo="Añadir opciones">
                        </BotonMoradoGlow>
                      </div>
                      <hr className="text-white"/>
                      
                      {showOptions && (
                        <Opciones
                          question_id={elemen.question_id}
                          questions={questions}
                          setQuestions={setQuestions}
                        />
                      )}
                    </>
                  );
                })}
            </div>
            <div className='pb-3 pt-4'>
              <button 
                onClick={aceptar} 
                className='botonfinalizaryenviar'>Finalizar y enviar</button>
            </div>
              
          </Col>
        </Row>
      </Row>
    </>
  );
};

