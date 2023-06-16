import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./TestColorimetriaStyle.scss";
import { ColorAIContext } from "../../context/ColorAIProvider";
import { Row } from "react-bootstrap";
import ResponsiveAppBar from "../../components/navbarSuperior/NavbarSuperior";
import { BotonRosa } from "../../components/botonrosa/BotonRosa";
let fotoFrontal = "front.jpg";
export const TestColorimetria = () => {
  const [test, setTest] = useState();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [babero, setBabero] = useState();
  const [telas, setTelas] = useState();
  const { user, clientContext } = useContext(ColorAIContext);
  const type = useParams().type;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/fabric/showAllFabrics")
      .then((res) => {
        setTelas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:4000/test/allTest").then((res) => {
      console.log(res.data);
      setTest(res.data.filter((e) => e.type === Number(type))[0]);
    });
  }, []);
  useEffect(() => {
    if (test) {
      axios
        .get(`http://localhost:4000/question/allFromTest/${test?.test_id}`)
        .then((res) => {
          console.log(res.data);
          setQuestions(res.data.resultQuestion);
          setearRespuestas(res.data.resultQuestion);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [test]);
  const setearRespuestas = (array) => {
    setAnswers(
      array.map((e) => {
        return {
          test_id: test?.test_id,
          question_id: e.question_id,
          user_id: clientContext.user_id,
          answer: "",
        };
      })
    );
  };
  useEffect(() => {
    let question_id = questions[index]?.question_id;
    axios
      .get(`http://localhost:4000/questionOptions/getOptions/${question_id}`)
      .then((res) => {
        setBabero(funcionTelas(res.data[0]).fabric_img);
        setOptions(res.data);
        setAnswers(
          answers.map((e) => {
            if (e.question_id === questions[index]?.question_id) {
              e.answer = res.data[0].fabric_id;
            }
            return e;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index, questions]);
  const funcionTelas = (tela) => {
    let res = telas?.filter((e) => {
      return e.fabric_id === tela.fabric_id;
    });
    return res[0];
  };
  const handleSelect = (tela, i) => {
    setBabero(funcionTelas(tela).fabric_img);
    setSelectedOption(i);
    setAnswers(
      answers.map((e) => {
        if (e.question_id === tela.question_id) {
          //se puede cambiar fabric_id por fabric_name
          e.answer = tela.fabric_id;
        }
        return e;
      })
    );
  };
  const testNavigate = (n) => {
    setSelectedOption(0);
    setIndex(index + n);
  };
  const onSubmit = () => {
    axios
      .post("http://localhost:4000/answer/createAnswer", answers)
      .then((res) => {
        console.log(res);
        navigate("/Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="">
              <img
                className="fotoCliente"
                src={`http://localhost:4000/images/fotoCliente/${clientContext?.user_id}-front.jpg`}
                alt=""
              />
              <img className="babero" src={`/images/telas/${babero}`} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="d-flex col-6">
              <p className="text-white">
                Nombre pregunta:{questions[index]?.question_name}
              </p>
              <p className="text-white">
                Nombre texto:{questions[index]?.question_text}
              </p>
            </div>
          </div>
          <div className="d-flex">
            {options.map((e, i) => {
              return (
                <>
                  <p key={i}>{e.fabric_id} </p>
                  <p>{funcionTelas(e)?.fabric_img}</p>
                  <img
                    onClick={() => handleSelect(e, i)}
                    src={`/images/telas/${funcionTelas(e)?.fabric_img}`}
                    alt=""
                    className={
                      selectedOption === i ? "optionImageSelect" : "opcionImage"
                    }
                  />
                </>
              );
            })}
          </div>

          <div>
            {index !== 0 && (
              <BotonRosa onClick={() => testNavigate(-1)} titulo="Anterior" />
            )}
            {index !== questions.length - 1 ? (
              //    <button onClick={()=>testNavigate(+1)}>siguiente</button>
              <BotonRosa onClick={() => testNavigate(+1)} titulo="Siguiente" />
            ) : (
              //   <button onClick={onSubmit}>Finalizar Test</button>
              <BotonRosa onClick={onSubmit} titulo="Finalizar Test" />
            )}
          </div>
        </div> */}
      <div className="row test-colorimetria p-0">
        <div className="row">
          <div className="col-6 foto-colorimetria align-items-center justify-content-center">
            <div className="col-6 foto-colorimetria align-items-center justify-content-center">
              <img
                className="fotoCliente"
                src={`http://localhost:4000/images/fotoCliente/${clientContext?.user_id}-front.jpg`}
                alt=""
              />
            </div>
            <div className="col-6 foto-colorimetria align-items-center justify-content-center">
              <img className="babero" src={`/images/telas/${babero}`} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p className="textoBaberos">{questions[index]?.question_name}</p>
            <p className="textoBaberos">{questions[index]?.question_text}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center mt-4">
            {options.map((e, i) => {
              return (
                <>
                  <p key={i}>{e.fabric_id} </p>
                  <img
                    onClick={() => handleSelect(e, i)}
                    src={`/images/telas/${funcionTelas(e)?.fabric_img}`}
                    alt=""
                    className={
                      selectedOption === i ? "optionImageSelect" : "opcionImage"
                    }
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center mt-4">
            {index !== 0 && (
              <BotonRosa onClick={() => testNavigate(-1)} titulo="Anterior" />
            )}
            {index !== questions.length - 1 ? (
              //    <button onClick={()=>testNavigate(+1)}>siguiente</button>
              <BotonRosa onClick={() => testNavigate(+1)} titulo="Siguiente" />
            ) : (
              //   <button onClick={onSubmit}>Finalizar Test</button>
              <BotonRosa onClick={onSubmit} titulo="Finalizar Test" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
