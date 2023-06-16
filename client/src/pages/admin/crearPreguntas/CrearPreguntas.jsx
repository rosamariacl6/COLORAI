import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { NavbarDark } from "../../../components/navbardark/NavbarDark";
import './crearform.scss';
import { InputAdminForm } from '../../../components/inputAdminForm/InputAdminForm';
import { BotonMoradoGlow } from '../../../components/botonmoradoglow/BotonMoradoGlow';
import axios from 'axios';

export const CrearPreguntas = () => {
  return (
    <>
    <Row>
      <Col className="d-flex justify-content-start align-items-center col-sm-1 col-md-1 col-lg-1">
        <NavbarDark />
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center col-sm-11 col-md-11 col-lg-11">
        <div className='fondoBrown'>
          <div className="newForm">
            <h2>Nuevo Formulario</h2>
            <br /><br /><br />
            <InputAdminForm
              type="text"
              label="Pregunta"
              name="test_name"
              onChange={""}
              value={test.test_name}
            />
            <br /><br />
            <h4>Elige el tipo de respuesta que quieres:</h4>
            <br />
            <div className='botonEligeResp'>
              <BotonMoradoGlow titulo="Respuesta tipo texto" />
              <BotonMoradoGlow titulo="Respuesta tipo opciones" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </>
  )
}