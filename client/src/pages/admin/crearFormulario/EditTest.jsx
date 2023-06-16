import React, { useEffect, useState } from "react";
import { InputGeneral } from "../../../components/inputGeneral/InputGeneral";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";

import "./crearform.scss";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";
const initialValues = {
  // test_name: "",
  test_id: "",
  question_name: "",
  question_text: "",
  question_id: "",
};

const initialTestValues = {
  test_name: "",
  test_id: "",
};

export const EditTest = (elemen) => {
  const [question, setQuestion] = useState(initialValues);
  const [questions, setQuestions] = useState([]);

  const [newQuestions, setNewQuestions] = useState([]);
  const [reset, setReset] = useState(false);
  const [test, setTest] = useState(initialTestValues);

  //DE LOS PARAMETROS AGARRO EL TEST_ID PARA PEDIRSELO EN LA RUTA
  const { test_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/question/allFromTest/${test_id}`)
      .then((res) => {
        setTest(res.data.resultTest[0]);
        setQuestions(res.data.resultQuestion);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reset]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setQuestion({ ...question, [name]: value, test_id: parseInt(test_id) });
  };

  const onSubmit = () => {
    let question_id = Date.now().toString();
    let prueba = parseInt(
      question_id.slice(question_id.length - 8, question_id.length)
    );

    const data = { ...question, question_id: prueba };
    setNewQuestions([...newQuestions, data]);
    setQuestion(initialValues);
  };

  console.log("=========*********", questions);
  const aceptar = () => {
    axios
      .post("http://localhost:4000/question/createQuestion", newQuestions)
      .then((res) => {
        //console.log(res);
        setNewQuestions([]);
        setReset(!reset);

        // navigate (`/EditTest/`)
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
          <Col className="d-flex flex-column justify-content-center align-items-center ">
            <div className="p-3">
              <button
                className="botonatrasedit"
                onClick={() => navigate("/test")}
              >
                Atrás
              </button>
            </div>
            {/* titulo del test */}
            <div>
              <h2 className="nuevoformulario p-3 text-white">
                {test?.test_name}
              </h2>
            </div>
            <div>
              <div className="d-flex flex-column">
                {/*MAPEO INPUTS CON LAS PREGUNTAS A EDITAR */}
                {questions.map((e) => {
                  return (
                    <>
                      <InputGeneral
                        elemen={e}
                        questions={questions}
                        setQuestions={setQuestions}
                        reset={reset}
                        setReset={setReset}
                      />
                    </>
                  );
                })}
              </div>
            </div>

            <hr className="border border-light" />
            <div>
              <h5 className="text-white text-center">
                AÑADIR NUEVAS PREGUNTAS
              </h5>
              <div className="">
                MAPEO PREGUNTAS QUE VOY A AÑADIR
                {newQuestions.map((q) => {
                  return (
                    <div
                      className="d-flex flex-column justify-content-center align-items-center"
                      key={q.question_id}
                    >
                      <p className="text-white">{q.question_name}</p>
                      <p className="text-white">{q.question_text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center pt-3">
                <input
                  className="inputcreatequestion ps-3"
                  type="text"
                  value={question.question_name}
                  name="question_name"
                  onChange={handleChange}
                  placeholder="Añade la pregunta"
                  label="Añade la pregunta"
                />
                &nbsp;
                <input
                  className="inputcreatequestion ps-3"
                  type="text"
                  value={question.question_text}
                  name="question_text"
                  onChange={handleChange}
                  placeholder="Texto secundario"
                  label="Texto secundario"
                />
              </div>
              &nbsp;
              <div className="d-flex justify-content-center align-items-center pb-5 querymoviledittest">
                <button
                  onClick={onSubmit}
                  titulo="Añadir"
                  className="botonalltestforclient"
                >
                  Añadir
                </button>
                &nbsp;&nbsp;
                <button onClick={aceptar} className="botonfinalizaryenviar">
                  Finalizar y enviar
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};
