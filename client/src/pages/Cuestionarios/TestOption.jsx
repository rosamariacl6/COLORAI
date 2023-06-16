import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ResponsiveAppBar from '../../components/navbarSuperior/NavbarSuperior';

import "./alltestforclient.scss"

export const TestOption = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(0)

  const {test_id,user_id} = useParams();

  useEffect(() => {   
    axios
    .get(`http://localhost:4000/question/allFromTest/${test_id}`)
    .then ((res)=>{
        setQuestions(res.data.resultQuestion)
        setearRespuestas(res.data.resultQuestion)
    })
    .catch((err)=>{console.log(err)})
}, [])


const setearRespuestas = (array) => {
  setAnswers(array.map((e)=>{return(
      {
          test_id: test_id,
          question_id: e.question_id,
          user_id: user_id,
          answer: ""
      }
  )}))
}

  useEffect(() => {
    let question_id = questions[index]?.question_id
      axios
      .get(`http://localhost:4000/questionOptions/getOptions/${question_id}`)
      .then((res)=>{console.log(res)
        setOptions(res.data)
        setAnswers(answers.map((e) => {
        if(e.question_id === questions[index]?.question_id){
          e.answer = res.data[0].option_test_name
          } 
          return e
        }))
       })
      .catch((err)=>{console.log(err)}) 
  }, [index,questions])


  const testNavigate = (n) => {
    setSelectedOption(0)
    setIndex(index + n)
}

const handleSelect = (ele,i) => {  
  setSelectedOption(i)
     setAnswers( answers.map((e)=>{
      if(e.question_id === ele.question_id){
         e.answer = ele.option_test_name
      }
      return e
  })) 
}

const onSubmit = () =>{
  axios
  .post('http://localhost:4000/answer/createAnswer',answers)
  .then((res)=>{
      console.log(res)
      navigate(`/Success`)
  })
  .catch((err)=>{console.log(err)})
}

  return (
  <>
    <Row>
      <ResponsiveAppBar/>
      <Row className="crear-form info m-0">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className='edittestcard2 d-flex flex-column justify-content-center align-items-center text-white'>
            <div className='text-center fw-bold'>
              <p className='pt-3 fs-3'>{questions[index]?.question_name}</p>
              <p>{questions[index]?.question_text}</p>
            </div>
            <div>
              {options.map((e,i)=>{return(
              <>
              <p key={i}></p>
              <div>
                <button 
                  className='selectordeopciones pt-2'
                  onClick={()=>handleSelect(e,i)}><p>{e.option_test_name}</p>       
                </button>
              </div>
        
              </>
              )})}
            </div>
            <br />
            {/* BOTONES */}
            <div className='d-flex justify-content-center align-items-center'>
              {index !== 0 && 
                <button 
                  className='botonalltestforclient'
                  onClick={()=>testNavigate(-1)}>
                  Anterior
                </button>} 
                &nbsp;
              {index !== questions.length -1 ? 
                <button 
                  className='botonalltestforclient'
                  onClick={()=>testNavigate(+1)}>
                  Siguiente</button> : 
                <button 
                  className='botonalltestforclient'
                  onClick={onSubmit}>
                  Finalizar Test
                </button>}
            </div>
          </div>
        </Col>
      </Row>
    </Row>
  </>
  )
}
