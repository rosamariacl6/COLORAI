import React, { useState } from "react";
import { idGen } from "../../../utils/utils";

const initialValue = {
  option_test_name: "",
  question_option_id: "",
  question_id: "",
};

export const Opciones = ({ question_id, questions, setQuestions }) => {
  const [opciones, setOpciones] = useState([]);
  const [opcion, setOpcion] = useState(initialValue);

  const delOption = (i) => {
    let arrayPrueba = [...opciones];

    let arrayFinal = arrayPrueba.filter(
      (elem) => elem.question_option_id !== i
    );
    setOpciones(arrayFinal);

    let resFinal = [...questions];
    resFinal.map((elem) => {
      if (elem.question_id === question_id) {
        elem.questions = arrayFinal;
      }
    });

    setQuestions(resFinal);
  };

  const handleChange = (e) => {
    setOpcion({ ...opcion, option_test_name: e.target.value });
  };

  const addOption = () => {
    let objetoProvisional = {
      ...opcion,
      question_option_id: idGen(),
      question_id: question_id,
    };

    let arrayProvisional = [...opciones, objetoProvisional];

    setOpciones(arrayProvisional);

    let resFinal = [...questions];
    resFinal.map((elem) => {
      if (elem.question_id === question_id) {
        elem.questions = [...elem.questions, objetoProvisional];
      }
    });

    setQuestions(resFinal);
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center pb-3'>
        <input 
          className='inputcreatequestionoption text-center'
          value={opcion.option_test_name} 
          placeholder="Escribe una opción"
          onChange={handleChange} 
        />
         &nbsp; &nbsp;
        <button 
          className='botonelige'
          onClick={addOption}>
          Guardar opción</button>
      </div>
        {opciones.map((elemen) => {
          return (
            <div className="pb-3" key={elemen.question_option_id}>
              <p>{elemen.option_test_name} </p>
              <button
                className='botonalltestforclient'
                onClick={() => delOption(elemen.question_option_id)}
              >Borrar opción</button>
            </div>
          );
        })}
    </div>
  );
};

