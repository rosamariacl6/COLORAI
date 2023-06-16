import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import ResponsiveAppBar from "../../../components/navbarSuperior/NavbarSuperior";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";

import "./edituser.scss";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";

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
export const EditAdminClient = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogged, setIsLogged } = useContext(ColorAIContext);
  const [editUser, setEditUser] = useState(InitialValues);
  const [file, setFile] = useState();
  const [bool1, setBool1] = useState(false);

  let id = useParams().user_id;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/oneUser/${id}`)
      .then((res) => {
        setEditUser(res.data.resultUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        navigate(`/allClients/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Row>
        <NavbarAdmin />

        <Col className="d-flex flex-column crear-form justify-content-center align-items-center">
          <div className="p-3 btnPeqMor">
            <BotonMoradoGlow onClick={() => navigate(-1)} titulo="Atrás" />
          </div>
          <div>
            <h1 className="text-white text-center pb-3">
              Editar datos de {editUser?.type === 2 ? "cliente" : "profesional"}
            </h1>
          </div>
          <Row className="justify-content-center align-items-center m-0">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Nombre</label>
              <input
                className="inputedituser"
                value={editUser?.name}
                name="name"
                label="Nombre"
                placeholder="Nombre completo"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Apellido(s)</label>
              <input
                className="inputedituser iAp"
                value={editUser?.last_name}
                name="last_name"
                label="Apellido/s"
                placeholder="Apellido/s"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
          </Row>
          &nbsp;
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Email</label>
              <input
                className="inputedituser"
                value={editUser?.email}
                name="email"
                label="Email"
                placeholder="Email"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Nueva contraseña</label>
              <input
                className="inputedituser"
                name="password"
                label="Password"
                placeholder="Introduce una nueva contraseña"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
          </Row>
          &nbsp;
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              md={6}
              className="d-flex  flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Número de teléfono</label>
              <input
                className="inputedituser"
                value={editUser?.phone}
                name="phone"
                label="Nº teléfono"
                placeholder="Nº teléfono"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Fecha de nacimiento</label>
              <input
                type="date"
                className="inputedituser"
                value={editUser?.birth_date}
                name="birth_date"
                label="Fecha de nacimiento"
                placeholder="Fecha de nacimiento"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
          </Row>
          &nbsp;
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Tono de piel</label>
              <input
                className="inputedituser"
                value={editUser?.skin_tone}
                name="skin_tone"
                label="Tono de piel"
                placeholder="Tono de piel"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <label className="text-white">Género</label>
              <select
                label="Género"
                value={editUser?.gender}
                name="gender"
                onChange={handleChange}
              >
                <option disabled>Selecciona</option>
                <option>M</option>
                <option>H</option>
                <option>X</option>
              </select>
            </Col>
          </Row>
          &nbsp;
          {/* &nbsp;&nbsp; */}
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <label className="text-white">Foto de perfil</label>
              <input
                className="inputFileEdit text-white"
                type="file"
                onChange={handleFiles}
                autoComplete="off"
              />
              &nbsp;&nbsp;
              <div className="pb-3 btnPeqMor">
                <BotonMoradoGlow onClick={onSubmit} titulo="Editar" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
