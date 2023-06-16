import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BotonRosa } from "../botonrosa/BotonRosa";
import { ColorAIContext } from "../../context/ColorAIProvider";
import { Avatar } from "@mui/material";
export const NavbarClient = () => {
  const navigate = useNavigate();
  const { user, setIsLogged, setUser } = useContext(ColorAIContext);
  const isLogOut = () => {
    window.localStorage.removeItem("token");
    setIsLogged(false);
    setUser();
    navigate("/");
  };
  return (
    // ----------------- NAVBAR LANDING PAGE ----------------- //
    <Navbar className="colornavbarglow" expand="lg">
      <Container fluid>
        <Navbar.Toggle className="m-2" aria-controls="navbarScroll">
          <img
            onClick={() => navigate("/landingclient")}
            style={{ height: "50px" }}
            className="glow-up-img"
            src="../../../../assets/images/iconosnavbar/logo.png"
            alt=""
          />
        </Navbar.Toggle>
        <Avatar alt={user?.name} src={`/images/user/${user?.avatar}`} />
        <img
              className="glow-up-img m-3"
              onClick={() => navigate("/landingclient")}
              style={{ height: "20px" }}
              src="../../../../assets/images/logos/logoGlow.png"
              alt=""
            /> 
        <Navbar.Collapse className="m-1" id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxWidth: "100px" }}
            navbarScroll
          >
            {/* <img
              className="glow-up-img"
              onClick={() => navigate("/landingclient")}
              style={{ height: "20px" }}
              src="../../../../assets/images/logos/logoGlow.png"
              alt=""
            /> */}
          </Nav>
          <BotonRosa onClick={isLogOut} titulo="Cerrar sesión" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};