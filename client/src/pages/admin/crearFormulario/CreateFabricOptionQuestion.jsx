import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { idGen } from '../../../utils/utils'
import { FabricOpciones } from './FabricOpciones'
import { Col, Row } from 'react-bootstrap'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow'
import { NavbarAdmin } from '../../../components/navbarAdmin/NavbarAdmin'


const initialValues = {
    test_name: "",
    test_id: "",
    question_name: "",
    fabric_id: "",
    question_text: "", 
    question_id: "",
    questions: []
}

export const CreateFabricOptionQuestion = () => {
    const navigate= useNavigate();
    const [question, setQuestion] = useState(initialValues)
    const [questions, setQuestions] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const [telas, setTelas] = useState()
    const {test_name,test_id} = useParams();

    const handleChange = (e) => {
        let {name,value} = e.target
        setQuestion({...question,[name]:value,test_id:test_id,test_name:test_name})
    }

    const onSubmit = () => { 
    
        const data = {...question,question_id:idGen()}
        
        setQuestions([...questions,data])
        setQuestion(initialValues)
      }

      useEffect(() => {
        axios
        .get('http://localhost:4000/fabric/showAllFabrics')
        .then((res)=>{
          setTelas(res.data)})
        
      }, [])
      
      const aceptar = () =>{
        axios
        .post("http://localhost:4000/question/createQuestion",questions)

        .then((res)=>{console.log(res)
          navigate("/test")

      })
        .catch((err)=>{console.log(err)})
    
      }

  return (
    <>
      <Row>
      <NavbarAdmin/>
        <Row className="info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className='formulario-test widthquery fondocreate' style={{width: "60vw"}}>
              <h2 className='text-center text-white pt-4 pb-4'>{test_name}</h2>

              <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                <input 
                  className='inputcreatequestion ps-3'
                  type="text"
                  label="Paso"
                  placeholder='Número del paso'
                  value={question.question_name}
                  name='question_name'
                  onChange={handleChange} 
                />
                 &nbsp;&nbsp;
                <input
                  className='inputcreatequestion ps-3'
                  type="text"
                  label="Nombre del paso"
                  placeholder='Nombre del paso'
                  value={question.question_text}
                  name='question_text'
                  onChange={handleChange} 
                />
              </div>
              <div 
                className='d-flex flex-column align-items-center justify-content-center'>
                  <button 
                    onClick={onSubmit} 
                    className='botonalltestforclient'>Añadir</button>
              </div>
            </div>

            <div className='d-flex flex-column align-items-center justify-content-center'>
              {questions.map((elemen,index)=>{
                return(
                  <>
                    <p className="text-white" key={index}>
                      {elemen.question_name}
                    </p>
                    <p className="text-white">
                      {elemen.question_text}
                    </p>
                    <div className='d-flex align-items-center justify-content-center pb-3'>
                      <BotonMoradoGlow 
                        onClick={()=>setShowOptions(!showOptions)} 
                        titulo="Añadir tela">
                      </BotonMoradoGlow>
                    </div>

                    {showOptions && 
                      <FabricOpciones 
                        question_id={elemen.question_id}
                        questions={questions}
                        setQuestions={setQuestions}
                        telas = {telas}
                      />
                    }
                  </>
                )})}
            </div>
            <hr className='text-white'/>
            <div className='pb-3'>
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