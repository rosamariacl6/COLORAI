import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import "./landingclient.scss";
import { BotonRosa } from "../../../components/botonrosa/BotonRosa";
import { NavbarClient } from "../../../components/navbarclient/NavbarClient";

export const LandingClient = () => {
  const navigate = useNavigate();
  const { user, setIsLogged, setUser } = useContext(ColorAIContext);
  
  return (
    <>
      <div className="container-fluid landingClientPpal m-0">
        <NavbarClient />
        <Row className="fondoClient">
        <Col className="contenedor-saludo-usuarioClient d-flex flex-column align-items-center justify-content-center">
            <span>
              <img
                src="/assets/images/logos/logoSaludo.png"
                alt="saludo"
                className="icono-saludoClient"
              />
            </span>
            <div className="container">
              <h1 className="display-4 text-white mt-5 mb-2 text-center">
                ¡Hola, {user?.name}!
              </h1>
              <h4
                className="text-white mb-4 text-center"
                style={{ fontSize: "1.5rem" }}
              >
                ¿Qué quieres hacer hoy?
              </h4>
              <div className="d-flex justify-content-center my-5">
                <BotonRosa
                  className="mr-2"
                  onClick={() => navigate(`/PerfilCliente/${user?.user_id}`)}
                  titulo="Ir al perfil"
                />

                {/* &nbsp;&nbsp;
                <BotonRosa
                  className="ml-2"
                  onClick={() => navigate("/homeUser")}
                  titulo="Cuestionarios"
                /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

