import React from 'react';
import { Col, Row } from "react-bootstrap";
import ResponsiveAppBar from '../../../components/navbarSuperior/NavbarSuperior'
import './crearprofessional.scss';
import { InputAdminForm } from '../../../components/inputAdminForm/InputAdminForm'
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow';


export const CrearProfessional = () => {
  return (
    <>
      <Row className='crearprofesional'>
        <ResponsiveAppBar/>

        <Col className="d-flex flex-column justify-content-center align-items-center col-sm-11 col-md-11 col-lg-11">
          <div className='fondoBrown '>
            <div className="newForm">
              <h2>Crear Nuevo Profesional</h2>
              <br />
              <br />
              <InputAdminForm
              type="text"
              label="Nombre"
              name="name"
              onChange={""}
              value={""}
            />
             <InputAdminForm 
              type="text"
              label="Apellido(s)"
              name="last_name"
              onChange={""}
              value={""}
            />
             <InputAdminForm 
              type="text"
              label="Email"
              name="email"
              onChange={""}
              value={""}
            />
             <InputAdminForm 
              type="text"
              label="Password"
              name="password"
              onChange={""}
              value={""}
            />
             <InputAdminForm 
              type="date"
              label="Fecha de Cumpleaños"
              name="birth_date"
              onChange={""}
              value={""}
            />
             <InputAdminForm 
              type="file"
              label="Foto de Perfil"
              name="avatar"
              onChange={""}
              value={""}
            />
            <br />
              <BotonMoradoGlow 
              onClick={("") }
              titulo=" Crear Profesional "
            />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};