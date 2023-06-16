import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useId,
  useContext,
} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Webcam from "react-webcam";
import axios from "axios";
import "./cameravisor.scss";
import { BotonCamara } from "../../components/botoncamara/BotonCamara";
import ResponsiveAppBar from "../../components/navbarSuperior/NavbarSuperior";
import { Button } from "react-bootstrap";
import { Capture1 } from "../../components/capture1/Capture1";
import { Capture2 } from "../../components/capture2/Capture2";
import { Capture3 } from "../../components/capture3/Capture3";
import { Capture4 } from "../../components/capture4/Capture4";
import { ColorAIContext } from "../../context/ColorAIProvider";
import { BotonTransparente } from "../../components/botontransparente/BotonTransparente";
import { BotonRosa } from "../../components/botonrosa/BotonRosa";

const videoConstraints = {
  width: { min: 1024, ideal: 1080, max: 1920 },
  height: { min: 1024, ideal: 1080, max: 1920 },
  facingMode: "user",
};

//
let clientid = 3;
// este clientid debe de ser el userid del cliente que escoga el trabajador

export const CameraVisor = () => {
  const { user, clientContext } = useContext(ColorAIContext);
  const [message, setMessage] = useState(false);
  const [index, setIndex] = useState(1);
  const [pictures, setPictures] = useState([]);
  const navigate = useNavigate();
  // console.log(typeof(clientContext.user_id));

  const onSubmit = () => {
    if (
      !pictures[0]?.url ||
      !pictures[1]?.url ||
      !pictures[2]?.url ||
      !pictures[3]?.url
    ) {
      setMessage(true);
    } else {
      let data = pictures.map((e, i) => {
        return {
          dataPic64: e.url.split(",")[1],
          user_id: clientContext.user_id,
        };
      });

      axios
        .post("http://localhost:4000/answer/addPicture", data)
        .then((res) => {
          navigate("/Testcolorai/3");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div>
        {index === 1 && (
          <Capture1 setPictures={setPictures} pictures={pictures} />
        )}
        {index === 2 && (
          <Capture2 setPictures={setPictures} pictures={pictures} />
        )}
        {index === 3 && (
          <Capture3 setPictures={setPictures} pictures={pictures} />
        )}
        {index === 4 && (
          <Capture4 setPictures={setPictures} pictures={pictures} />
        )}
      </div>

      {message && (
        <h3 className="text-center text-white mt-3">
          Realiza todas las fotos antes de finalizar
        </h3>
      )}
      <br />

      <Row className="d-flex justify-content-center align-items-center m-5 gap-5">
        <Col xs={6} sm={3} md={2} lg={2}>
          <div className="fotoTomadaContainer">
            <img className="fotoTomada" src={pictures[0]?.url} alt="" />
            <br />
            <BotonTransparente
              className="btnFotoTomada"
              onClick={() => setIndex(1)}
              titulo="Hacer foto frontal"
            />
          </div>
        </Col>
        <Col xs={6} sm={3} md={2} lg={2}>
          <div className="fotoTomadaContainer">
            <img className="fotoTomada" src={pictures[1]?.url} alt="" />
            <br />
            <BotonTransparente
              className="btnFotoTomada"
              onClick={() => setIndex(2)}
              titulo="Hacer foto perfíl"
            />
          </div>
        </Col>
        <Col xs={6} sm={3} md={2} lg={2}>
          <div className="fotoTomadaContainer">
            <img className="fotoTomada" src={pictures[2]?.url} alt="" />
            <br />
            <BotonTransparente
              className="btnFotoTomada"
              onClick={() => setIndex(3)}
              titulo="Hacer foto cabeza"
            />
          </div>
        </Col>
        <Col xs={6} sm={3} md={2} lg={2}>
          <div className="fotoTomadaContainer">
            <img className="fotoTomada" src={pictures[3]?.url} alt="" />
            <br />
            <BotonTransparente
              className="btnFotoTomada"
              onClick={() => setIndex(4)}
              titulo="Hacer foto hombro"
            />
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-center">
        <BotonRosa
          onClick={onSubmit}
          className="AceptarFotos align-items-center"
          titulo="Aceptar Fotografías"
        />
      </div>
    </>
  );
};
