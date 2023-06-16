import React, { useState } from 'react'
import { idGen } from '../../../utils/utils'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow'

const initialValue = {
    option_test_name: "",
    question_option_id:  "",
    question_id: "",
    fabric_id: ""
    
}

export const FabricOpciones = ({question_id,questions,setQuestions,telas}) => {
    const [opciones, setOpciones] = useState([])
    const [opcion, setOpcion] = useState(initialValue)
    const [show, setShow] = useState(false)

    const delOption = (i) => {
      
        let arrayPrueba = [...opciones]

        let arrayFinal = arrayPrueba.filter((elem)=>elem.question_option_id !== i)
           setOpciones(arrayFinal)

        let resFinal = [...questions]
        resFinal.map((elem)=>{
            if(elem.question_id === question_id){
                elem.questions = arrayFinal
            }
        })
       
     
        setQuestions(resFinal) 
    }

    const handleChange = (e) =>{

        if(e.target.value === ""){
            setShow(true)

        }else{
           setOpcion({...opcion,fabric_id:e.target.value})     
        }    
   }
   
   const addOption = () => {

    if (opcion.fabric_id === ""){
        return
    }else{
        let objetoProvisional = {...opcion,question_option_id:idGen(),question_id:question_id}

        let arrayProvisional = [...opciones,objetoProvisional]

        setOpciones(arrayProvisional)

        let resFinal = [...questions]
        resFinal.map((elem)=>{
        if(elem.question_id === question_id){
            elem.questions = [... elem.questions,objetoProvisional]
        }
        setOpcion({...opcion,fabric_id: ""})
    })

    setQuestions(resFinal) 
    }
}

  return (
    <div>
        {show &&  <p>Debes seleccionar una tela</p>}
        <div className='pt-3'>
            <select 
                className='inputedituser'
                label="Elige una tela"
                placeholder="Elige una tela"
                onChange={handleChange} 
                name="telas" id=""> 
                <option value=""></option>
                    {telas.map((tela)=>{return(
                        
                        <option value={tela.fabric_id}>
                            {tela.fabric_name}
                        </option>
                    )})}
            </select>
            &nbsp; &nbsp;
            <button 
                className='botonalltestforclient'
                onClick={addOption}>
                Guardar tela</button>
        </div>
        <br />
        <div className='pt-2 ps-2'>
            {opciones.map((elemen)=>{return(
                <div className="text-white pb-3" key={elemen.question_option_id}>
                <p>{elemen.fabric_id}  </p>
                <p>{elemen.fabric_name}</p>
                <button
                    className='botonalltestforclient'
                    onClick={() => delOption(elemen.question_option_id)}
                    >Borrar opción</button>
                </div>
            )})}
        </div>
        
    </div>

  )
}