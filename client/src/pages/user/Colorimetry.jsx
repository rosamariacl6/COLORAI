import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { ColorAIContext } from "../../context/ColorAIProvider";

export const Colorimetry = () => {
  const [telas, setTelas] = useState([]);
  const [answer, setAnswer] = useState([]);
  const { clientContext } = useContext(ColorAIContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/fabric/showAllFabrics")
      .then((res) => {
        console.log(res);
        setTelas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/answer/getAnswerColor/${clientContext?.user_id}`
      )
      .then((res) => {
        console.log(res);

        setAnswer(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clientContext]);

  const showFabric = (answer) => {
    const fabricIndex = parseInt(answer?.answer) - 1;
    if (fabricIndex >= 0 && fabricIndex < telas.length) {
      return telas[fabricIndex]?.fabric_img;
    }
    return null;
  };
  return (
    <div className="row">
      <Container className="mt-5">
        <Row className="justify-content-center ">
          <Col
            xs={12}
            md={4}
            className="d-flex align-items-center justify-content-center circulos-colorimetria"
          >
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[0]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 1: <br /> CONTRASTE{" "}
              </h6>
            </div>
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[1]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 2:
                <br />
                CONTRASTE
                <br />
                PERSONAL
              </h6>
            </div>
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[2]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 3: <br /> PROFUNDIDAD{" "}
              </h6>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={3}
            className="d-flex align-items-center justify-content-center circulos-colorimetria"
          >
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[3]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 4:
                <br />
                INTENSIDAD
              </h6>
            </div>
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[4]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 5:
                <br />
                SUBTONO
              </h6>
            </div>
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[5]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 6:
                <br />
                TEMPERATURA
              </h6>
            </div>
            <div className="font-white text-center">
              <div className="div-circulo-colorimetria m-2">
                <img
                  src={`http://localhost:4000/images/telas/${showFabric(
                    answer[6]
                  )}`}
                  alt=""
                />
              </div>
              <h6 className="my-4">
                PASO 7:
                <br />
                ESTACIONES
                <br />
                EQUIVALENTES
              </h6>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="font-white info-cliente">
            {/* <h6>Fecha de la última colorimetría: <br/></h6> */}
          </Col>
        </Row>
        <Row>
          <Col className="font-white info-cliente">
            {/* <h6>Resultados:<br/></h6> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
