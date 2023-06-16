import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotonMoradoGlow } from "../botonmoradoglow/BotonMoradoGlow";

import "./inputgeneral.scss";

export const InputGeneral = ({
  elemen,
  questions,
  setQuestions,
  setReset,
  reset,
}) => {
  const [inputState, setInputState] = useState();
  const [bool1, setBool1] = useState(true);
  const [reset2, setReset2] = useState(true);
  const [inputBool, setInputBool] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setInputState(elemen);
  // }, [reset2]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  };

  const cambiosok = () => {
    console.log("hollllaaaa");

    // if (bool1) {
    //   setBool1(!bool1);
    // } else {
    //   setBool1(!bool1);
    elemen.question_name = inputState.question_name;
    elemen.question_text = inputState.question_text;

    axios
      .put("http://localhost:4000/question/editQuestion", elemen)
      .then((res) => {
        console.log(res);
        setInputBool(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelarBorrar = (id) => {
    if (bool1) {
      console.log(questions);
      console.log("-----------", id);
      console.log("-----------", typeof id);

      //setBool1(!bool1);
      setReset2(!reset2);
      let arrayProvisional = questions.filter((e) => e.question_id !== id);
      // console.log("arrayyyyy", arrayProvisional);

      axios
        .delete(`http://localhost:4000/question/deleteQuestion/${id}`)
        .then((res) => {
          setQuestions(arrayProvisional);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setBool1(false);
      setReset2(!reset2);
    }
  };

  const editar = () => {
    setInputBool(true);
    setInputState(elemen);
  };

  return (
    <>
      <div className="text-center edittestcard p-2 mt-2 mb-2 flex-column d-flex justify-content-center querymoviledittest">
        <div className="d-flex flex-column align-items-center justify-content-center pt-5">
          {/* name */}
          {!inputBool ? (
            <h4 style={{ color: "white" }}>{elemen?.question_name}</h4>
          ) : (
            <input
              value={inputState?.question_name}
              onChange={handleChange}
              name="question_name"
              className="input-general queryinputtest"
            />
          )}
          {/* <input
            // value={inputState?.question_name}
            value={elemen?.question_name}
            onChange={handleChange}
            name="question_name"
            disabled={bool1 && true}
            className="input-general queryinputtest"
          /> */}
          &nbsp;&nbsp;
          {!inputBool ? (
            <h4 style={{ color: "white" }}>{elemen?.question_text}</h4>
          ) : (
            <input
              value={inputState?.question_text}
              onChange={handleChange}
              name="question_text"
              className="input-general queryinputtest"
            />
          )}
          {/* text */}
          {/* <input
            value={elemen?.question_text}
            // value={inputState?.question_text}
            onChange={handleChange}
            name="question_text"
            className="input-general queryinputtest"
            disabled={bool1 && true}
          /> */}
        </div>
        <div className="pt-3 pb-3">
          <BotonMoradoGlow
            onClick={!inputBool ? editar : cambiosok}
            titulo={!inputBool ? "Editar" : "Aceptar"}
          ></BotonMoradoGlow>
          <BotonMoradoGlow
            onClick={() => cancelarBorrar(elemen.question_id)}
            titulo={bool1 ? "Borrar" : "Cancelar"}
          ></BotonMoradoGlow>
        </div>
      </div>
    </>
  );
};
