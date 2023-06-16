import React, { useContext, useEffect, useState } from "react";
import { ColorAIContext } from "../../context/ColorAIProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ResultTest = () => {
  const [telas, setTelas] = useState([]);
  const [text, setText] = useState([]);
  const [option, setOption] = useState([]);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const { clientContext, user_id } = useContext(ColorAIContext);
  console.log(useParams());

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/answer/getAnswerText/${id}`)
      .then((res) => {
        console.log("wwwwwww", res);
        setText(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/answer/getAnswerOption/${id}`)
      .then((res) => {
        console.log(res);
        setOption(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/question/allQuestionsFromTypeOne")
      .then((res) => {
        console.log(res);
        setOne(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/question/allQuestionsFromTypeTwo")
      .then((res) => {
        console.log(res);
        setTwo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getQuestionName = (question_id, array) => {
    let question = array.find((e) => e.question_id === question_id);

    return question?.question_name;
  };

  return (
    <div className="cointainer-fluid text-white">
      <div className="row d-flex  align-center justify-content-center ">
        <div className="">
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid white", padding: "8px" }}>
                  Respuestas: test tipo 1
                </th>
              </tr>
            </thead>
            <tbody className="">
              {text.map((e, index) => (
                <tr key={index}>
                  {/* <td>{one[index]?.question_name} </td> */}
                  <td>{getQuestionName(e.question_id, one)} </td>
                  <td style={{ border: "1px solid white", padding: "5px" }}>
                    {e.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          {/* <table style={{ borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid white', padding: '8px' }}>Respuestas: cuidados de cabello</th>
    </tr>
    </thead>
    <tbody>
    {option.map((e, index) => (
      <tr key={index} >
        <td >{two[index]?.question_name}</td>
        <td style={{ border: '1px solid white', padding: '8px' }}>{e.answer}</td>
      </tr>
        ))}
    </tbody>
    </table> */}
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid white", padding: "8px" }}>
                  Respuestas: test tipo 2
                </th>
              </tr>
            </thead>
            <tbody className="">
              {option.map((e, index) => (
                <tr key={index}>
                  {/* <td>{one[index]?.question_name} </td> */}
                  <td>{getQuestionName(e.question_id, two)} </td>
                  <td style={{ border: "1px solid white", padding: "5px" }}>
                    {e.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
