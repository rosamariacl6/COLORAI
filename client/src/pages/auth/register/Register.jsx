import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// este es el registro para clientes en el cual se le manda un mail con una
// contraseña aleatoria

// componentes
import { InputForm } from "../../../components/inputform/InputForm";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";
//sass
import "./register.scss";

const initialValue = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  birth_date: ""
};
export const Register = () => {
  const [register, setRegister] = useState(initialValue);
  const [msgError, setMsgError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  console.log(register);
  const onSubmit = () => {
    if (
      !register.name ||
      !register.last_name ||
      !register.email ||
      !register.birth_date
    ) {
      setMsgError("Por favor, rellene todos los campos");
    } else {
      axios
        .post("http://localhost:4000/users/createUser", register)
        .then((res) => {
          navigate("/login");
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
      <Col className="d-flex flex-column align-items-center"  sm={12}
        md={8}
        lg={8}>
        <div className="glowup"></div>
        <form class="form-register text-center">
        <h3 className="register mt-4">Registra a un nuevo cliente</h3>
        <br />
        <p className="fontgris">¡Tu nuevo cambio de imagen comienza aquí!</p>
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
          type="text"
          label="Email"
          name="email"
          onChange={handleChange}
          value={register.email}
        />
         <InputForm
          type="date"
          label="Fecha de nacimiento"
          name="birth_date"
          onChange={handleChange}
          value={register.birth_date}
        />
        <p>{msgError}</p>
        {showError && <h4>Ha habido algún error</h4>}
          &nbsp;
          <label className="">
            <p>Al cliente le llegará una contraseña aleatoria a su correo electrónico, una vez finalizado el registro.</p>
          </label>
        &nbsp;
    
        <Button onClick={onSubmit} className="boton-form mt-3">
             Continuar
            </Button>
        </form>
      </Col>
    </Row>
  );
};