import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import { InputForm } from "../../../components/inputform/InputForm";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./editclient.scss";
const InitialValues = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  birth_date: "",
  skin_tone: "",
};
export const EditClient = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogged, setIsLogged } = useContext(ColorAIContext);
  const [editUser, setEditUser] = useState(InitialValues);
  const [file, setFile] = useState();
  const id = useParams().user_id;
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/oneUser/${id}`)
      .then((res) => {
        setEditUser(res.data.resultUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };
  const handleFiles = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = () => {
    const newFormData = new FormData();
    newFormData.append("file", file);
    newFormData.append("editUser", JSON.stringify(editUser));
    console.log("--------", JSON.stringify(editUser));
    axios
      .put(
        `http://localhost:4000/users/editUser/${editUser.user_id}`,
        newFormData
      )
      .then((res) => {
        setUser(editUser);
        setIsLogged(!isLogged);
        navigate(`/PerfilCliente/${user.user_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Row className="fondoGlow">
     <Col className="col-12 col-sm-4 p-0">
        <img src="../assets/images/fondos/fondoRegister.png" alt="" className="img-register w-100" />
      </Col>
      <Col
        className="d-flex flex-column align-items-center mt-3"
        sm={12}
        md={8}
        lg={8}
      >
        <div className="glowup"></div>
        <form className="form-edit-client text-center">
          <h1 className="register text-center">EDITA TU PERFIL</h1>
          <br />
          <br />
          <InputForm
            type="text"
            label="Nombre"
            name="name"
            onChange={handleChange}
            value={editUser?.name}
            autoComplete="off"
          />
          <InputForm
            type="text"
            label="Apellido(s)"
            name="last_name"
            onChange={handleChange}
            value={editUser?.last_name}
            autoComplete="off"
          />
          <InputForm
            type="text"
            label="Email"
            name="email"
            onChange={handleChange}
            value={editUser?.email}
            autoComplete="off"
          />
          <InputForm
            type="text"
            label="Nueva contraseña"
            name="password"
            onChange={handleChange}
            autoComplete="off"
          />
          <InputForm
            type="text"
            label="Teléfono"
            name="phone"
            onChange={handleChange}
            value={editUser?.phone}
            autoComplete="off"
          />
          <InputForm
            type="date"
            label="Fecha de nacimiento"
            name="birth_date"
            onChange={handleChange}
            value={editUser?.birth_date}
            autoComplete="off"
          />
          <InputForm
            type="text"
            label="Tono de piel"
            name="skin_tone"
            onChange={handleChange}
            value={editUser?.skin_tone}
            autoComplete="off"
          />
          <InputForm
            type="file"
            name="avatar"
            onChange={handleFiles}
            autoComplete="off"
          />
          &nbsp;
          {/* <BotonMoradoGlow
            className="guardar"
            onClick={onSubmit}
            titulo="Guardar"
          /> */}
           <Button onClick={onSubmit} className="boton-form mt-2 px-5">
              Guardar
            </Button>
        </form>
      </Col>
    </Row>
  );
};