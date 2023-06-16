import React, { useContext } from "react";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ResponsiveAppBar from "../../../components/navbarSuperior/NavbarSuperior";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import "./landingProfessional.scss";

export const LandingProfessional = (id) => {
  const navigate = useNavigate();
  const { user, setIsLogged, setUser } = useContext(ColorAIContext);
  return (
    <>
      <Row className="info">
        <ResponsiveAppBar />
        <Row>
          <div className="info">
            <Col className="fondo-gradient contenedor-saludo-usuario d-flex flex-column align-items-center justify-content-center">
              <span>
                <img
                  src="/assets/images/logos/logoSaludo.png"
                  alt="saludo"
                  className="icono-saludo"
                />
              </span>
              <h1 className="font-white m-2"> ¡Hola, {user?.name}!</h1>
              <h6 className="font-white m-2">¿Qué tal estás hoy?</h6>
              <div className="botones-landing-professional m-3 d-flex">
              <Button
                onClick={() => navigate("/register")}
                className="text-white boton-añadir"
                variant="contained"
                sx={{ p: 2 }}
                style={{ border: "#ff99d6" }}
                endIcon={<PersonAddIcon />}
              >
                AÑADIR CLIENTE
              </Button>
                <Button
                  onClick={() => navigate("/search")}
                  variant="contained"
                  sx={{ p: 2 }}
                  style={{ backgroundColor: "#cd65a7" }}
                  endIcon={<PersonSearchIcon />}
                >
                  BUSCAR CLIENTE
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </Row>
    </>
  );
};
