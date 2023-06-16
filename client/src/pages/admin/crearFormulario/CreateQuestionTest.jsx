import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { NavbarAdmin } from '../../../components/navbarAdmin/NavbarAdmin'

const  initialValues = {
  test_name: "",
  test_id: "",
  question_name: "",
  question_text: "",
  question_id: ""
}

export const CreateQuestionTest = () => {

  const navigate= useNavigate();
  const [inputState, setInputState] = useState()
  const [question, setQuestion] = useState(initialValues)
  const [questions, setQuestions] = useState([])
  const {test_name,test_id} = useParams();

  const handleChange = (e) => {
    let {name,value} = e.target
    setQuestion({...question,[name]:value,test_id:test_id,test_name:test_name})
  }

  const onSubmit = () => {
    let question_id = Date.now().toString();
    let prueba = parseInt(
      question_id.slice(question_id.length - 8, question_id.length)
    );

  const data = {...question,question_id:prueba}
    setQuestions([...questions,data])
    setQuestion(initialValues)
  }

  const aceptar = () =>{
    axios
    .post("http://localhost:4000/question/createQuestion",questions)
    .then((res)=>{console.log(res)
    navigate(`/editTest/${test_id}`)
  })
    .catch((err)=>{console.log(err)})
  }

  return (
    <>
      <Row>
        <NavbarAdmin/>
        <Row className="info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center pt-5">
            <div className='formulario-test widthquery fondocreate' style={{width: "60vw"}}>
              <h2 className='text-center text-white pt-4 pb-4'>
                {test_name}</h2>

              <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                  <input
                    className='inputcreatequestion ps-3'
                    type="text"
                    label="Añade tu pregunta"
                    placeholder='Añade tu pregunta'
                    name="question_name"
                    onChange={handleChange}
                    value={question.question_name}
                  />
                  &nbsp;&nbsp;
                  <input
                    className='inputcreatequestion ps-3'
                    type="text"
                    label="Añade texto secundario para el usuario"
                    placeholder='Añade texto secundario para el usuario'
                    name="question_text"
                    onChange={handleChange}
                    value={question.question_text}
                  />
              </div>
              <div 
                className='d-flex flex-column align-items-center justify-content-center'>
                  <button 
                    onClick={onSubmit} 
                    className='botonalltestforclient'>Añadir</button>
                  &nbsp;
                  <button 
                    onClick={aceptar} 
                    className='botonfinalizaryenviar'>Finalizar y enviar</button>
              </div>
            </div>
            <div>
              <h4 className='text-white text-center mt-3'>Preguntas realizadas</h4>
              <div className="col text-white mt-3">
                {questions.map((elemen,index)=>{return(
                <>
                <p key={index}>
                {elemen.question_name}
                </p>
                <p>
                {elemen.question_text}
                </p>   
                </>
                )})}
              </div>    
            </div>
            <hr className='text-white'/>

          </Col>
        </Row>
      </Row>
    </>
  )
}