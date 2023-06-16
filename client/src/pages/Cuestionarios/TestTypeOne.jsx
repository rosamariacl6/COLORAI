import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ColorAIContext } from "../../context/ColorAIProvider";
import ResponsiveAppBar from "../../components/navbarSuperior/NavbarSuperior";
import { Col, Row } from "react-bootstrap";

export const TestTypeOne = () => {
  const navigate = useNavigate();
  const [test, setTest] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [respuesta, setRespuesta] = useState("");
  const { user, clientContext } = useContext(ColorAIContext);
  const { user_id, test_id } = useParams();

  const handleChange = (e) => {
    setRespuesta(e.target.value);
  };
  console.log("=======================================", test_id);
  useEffect(() => {
    axios
      .get("http://localhost:4000/question/allQuestionsFromTypeOne")
      .then((res) => {
        let testQuestion = res.data.filter(
          (e) => e.test_id === Number(test_id)
        );
        console.log("EEEEEEEE", testQuestion);
        setQuestions(testQuestion);
        let answerProvisional = testQuestion.map((e) => {
          return {
            test_id: e.test_id,
            question_id: e.question_id,
            user_id: user_id,
            answer: "",
          };
        });
        setAnswers(answerProvisional);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("AAAAAAA", answers);

  const testNavigate = (n) => {
    setIndex(index + n);

    let resProvisional = answers.map((e, i) => {
      if (i === index) {
        e.answer = respuesta;
      }
      return e;
    });
    setAnswers(resProvisional);
    setRespuesta("");
  };

  const onSubmit = () => {
    let resProvisional = answers.map((e, i) => {
      if (i === index) {
        e.answer = respuesta;
      }
      return e;
    });

    axios
      .post("http://localhost:4000/answer/createAnswer", resProvisional)
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
      <Row>
        <ResponsiveAppBar />
        <Row className="crear-form info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="formulario-test edittestcard2 edittestcardtablet mt-3 d-flex flex-column justify-content-center align-items-center text-white">
              <div className="text-center fw-bold">
                <p className="fs-4">{questions[index]?.question_name}</p>
                <p className="fs-5">{questions[index]?.question_text}</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <input
                  className="inputcreatequestion ps-3"
                  type="text"
                  placeholder="Escribe la respuesta"
                  value={respuesta}
                  onChange={handleChange}
                  name="answer"
                />
                <br />
              </div>
              {/* BOTONES */}
              <div className="d-flex justify-content-center align-items-center">
                {index !== 0 && (
                  <button
                    className="botonalltestforclient"
                    onClick={() => testNavigate(-1)}
                  >
                    Anterior
                  </button>
                )}
                &nbsp;
                {index < questions.length - 1 ? (
                  <button
                    className="botonalltestforclient"
                    onClick={() => testNavigate(+1)}
                  >
                    Siguiente
                  </button>
                ) : (
                  <button className="botonalltestforclient" onClick={onSubmit}>
                    Finalizar Test
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};
