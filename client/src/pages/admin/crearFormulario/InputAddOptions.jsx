import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const initialValues = {
 
    question_id: "",
    option_test_name: "",
    question_option_id: ""

}

export const InputAddOptions = ({question}) => {
    const [questionOption, setQuestionOption] = useState(initialValues)
    const [questionOptions, setQuestionOptions] = useState([])

    const {test_id,test_name,question_id} = useParams();
   

    const handleChange = (e) => {
        let {name,value} = e.target
        setQuestionOption({...questionOption,[name]:value,test_id:test_id,question_id:question_id})
     
    }  

    const onSubmit = () =>{
        let option_question_id = Date.now().toString();
        let submit = parseInt(option_question_id.slice(option_question_id.length - 8, option_question_id.length))

        const data = {...questionOption,option_question_id:submit}

        setQuestionOptions([...questionOptions,data])
        setQuestionOption(initialValues)

    }

    const sendOptions = () => {

        axios
        .post("http://localhost:4000/questionOptions/createQuestionOption",questionOptions)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})

    }


  return (
    <>
    <h4>opciones: {question_id}</h4>
    <input
    name='option_test_name'
    value={questionOption.option_test_name}
    onChange={handleChange} />
    <button onClick={onSubmit} >submit options</button>

    {/* MAPEO con las options */}
    {questionOptions.map((options,index)=>{return(

        <p key={index}>
            {options.option_test_name}
        </p>

    )})}
    <div className="row">
        <div className="col">
            <button onClick={sendOptions}>mandar opciones</button>
        </div>
    </div>
    </>
  )
}
