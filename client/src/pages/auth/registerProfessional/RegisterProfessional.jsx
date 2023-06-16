import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// este es el registro para profesionales

// componentes
import { InputForm } from "../../../components/inputform/InputForm";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";
//sass
import "./registerProfessional.scss";
import { BotonGoogle } from "../../../components/botonGoogle/BotonGoogle";
import logoojotachado from "../img/logoOjoTachado.png";
import logoojo from "../img/logoojo.png";
const initialValue = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  birth_date: "",
};
export const RegisterProfessional = () => {
  const [register, setRegister] = useState(initialValue);
  const [msgError, setMsgError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = () => {
    if (
      !register.name ||
      !register.last_name ||
      !register.email ||
      !register.password ||
      !register.birth_date
    ) {
      setMsgError("Por favor, rellene todos los campos");
    } else {
      axios
        .post("http://localhost:4000/users/createProfessional", register)
        .then((res) => {
          navigate("/homeAdmin");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.error.errno === 1062) {
            setMsgError("email duplicado");
          } else {
            setShowError(true);
          }
        });
    }
  };
  return (
    <Row className="fondoGlow">
      <Col className="col-12 col-sm-4 p-0">
        <img
          src="../assets/images/fondos/fondoRegister.png"
          alt=""
          className="img-register-professional w-100"
        />
      </Col>
      <Col
        className="d-flex flex-column align-items-center mt-5"
        sm={12}
        md={8}
        lg={8}
      >
        <div className="glowup"></div>
        <form class="form-register-admin text-center">
          <h3 className="register">Registra a un nuevo profesional</h3>
          <br />
          <p className="p-2">
            El profesional de belleza podrá cambiar su contraseña una vez iniciada sesión en su
            perfil.
          </p>
          <InputForm
            type="text"
            label="Nombre"
            name="name"
            onChange={handleChange}
            value={register.name}
          />
          <InputForm
            type="text"
            label="Apellido(s)"
            name="last_name"
            onChange={handleChange}
            value={register.last_name}
          />
          <InputForm
            type="date"
            label="Fecha de nacimiento"
            name="birth_date"
            onChange={handleChange}
            value={register.birth_date}
          />
          <InputForm
            type="text"
            label="Email"
            name="email"
            onChange={handleChange}
            value={register.email}
          />
          <InputForm
            type={showPassword ? "text" : "password"}
            label="Contraseña"
            name="password"
            onChange={handleChange}
            value={register.password}
          />
          <p>{msgError}</p>
          {showError && <h4>Ha habido algún error</h4>}
          <Button onClick={onSubmit} className="boton-form mt-3">
            Continuar
          </Button>
        </form>
      </Col>
    </Row>
  );
};
