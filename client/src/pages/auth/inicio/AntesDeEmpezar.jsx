import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// componentes
import { InputForm } from "../../../components/inputform/InputForm";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";

//sass
import "./antesdeempezar.scss";

const initialValue = {
  name: "",
  last_name: "",
  email: "",
  password: "",
};
export const AntesDeEmpezar = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Row className="fondoGlow">
      <Col
        className="fondoOjo d-flex align-items-center"
        sm={12}
        md={4}
        lg={4}
      ></Col>
      <Col
        className="d-flex flex-column align-items-center mt-5"
        sm={12}
        md={8}
        lg={8}
      >
        <div className="glowup"></div>
        <h3 className="antesde">Antes de empezar</h3>
        <br />
        <p className="fontgris">
          Para entender quien eres, necesitamos saber el perfil con el{" "}
        </p>
        <p className="fontgris">que deseas registrarte</p>
        &nbsp;
        <br />
        <br />
        <Form>
          <Form.Check
            type="radio"
            label="Soy profesional"
            name="radioOption"
            value="opcion2"
            checked={()=>setSelectedOption(!selectedOption) === "opcion2"}
            onChange={handleOptionChange}
            style={{
              border: "1px solid #603953",
              borderRadius: "30px",
              position: "relative",
              width: "300px",
            }}
          >
            <p className="pinput">Soy profesional</p>
            <Form.Check.Input
              className="checkinicio"
              style={{
                position: "absolute",
                top: "50%", // Ajusta la posición verticalmente
                left: "8%", // Ajusta la posición horizontalmente
                transform: "translate(-70%, -70%)",
              }}
            />
          </Form.Check>
          <br />
          <Form.Check
            type="radio"
            label="Soy profesional"
            name="radioOption"
            value="opcion2"
            checked={selectedOption === "opcion2"}
            onChange={handleOptionChange}
            style={{
              border: "1px solid #603953",
              borderRadius: "30px",
              position: "relative",
              width: "300px",
            }}
          >
            <p className="pinput">Soy cliente</p>
            <Form.Check.Input
              className="checkinicio"
              style={{
                position: "absolute",
                top: "50%", // Ajusta la posición verticalmente
                left: "8%", // Ajusta la posición horizontalmente
                transform: "translate(-70%, -70%)",
              }}
            />
          </Form.Check>
          
        </Form>
        &nbsp;
        <BotonMoradoGlow
          className="continuar"
          onClick={""}
          titulo="Continuar"
        />
        <br />
        <p className="fontmorada">o</p>
        <p>
          <span
            className="startSesion"
            onClick={() => "/login"}
            variant="outline-success"
            titulo="Iniciar sesión"
          >
            {" "}
            Inicia sesión
          </span>
          &nbsp;
          <span className="fontmorada">si ya tienes cuenta</span>
        </p>
      </Col>
    </Row>
  );
};
