import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ColorAIContext } from "../../context/ColorAIProvider";
import ResponsiveAppBar from "../../components/navbarSuperior/NavbarSuperior";
import axios from "axios";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import ChecklistIcon from "@mui/icons-material/Checklist";

//bootstrap
import { Row, Col, Container } from "react-bootstrap";

//sass
import "./user.scss";
import { Avatar, Button } from "@mui/material";
export const PerfilUser = () => {
  const [client, setClient] = useState();

  const id = useParams().id;

  const navigate = useNavigate();
  const { user, setClientContext, clientContext } = useContext(ColorAIContext);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/oneUser/${id}`)
      .then((res) => {
        setClient(res.data.resultUser[0]);
        setClientContext(res.data.resultUser[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Seccion info ficha cliente */}
      <div className="row info">
        <ResponsiveAppBar />
        <Row>
          <Col>
            <div className="d-flex justify-content-end m-4">
              <Button
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 2 }}
                style={{ backgroundColor: "#442739" }}
              >
                {client?.created_at}
              </Button>
              <Button
                onClick={() => navigate(`/editUser/${client?.user_id}`)}
                className="text-white m-1"
                variant="contained"
                sx={{ p: 2 }}
                style={{ backgroundColor: "#cd65a7" }}
              >
                EDITAR PERFIL
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={12} lg={5}>
            <div className="contenedor-fotoPerfil">
              <Avatar
                className="user-avatar"
                alt={client?.name}
                src={`/images/user/${client?.avatar}`}
              />
            </div>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <div className="">
              <div className="info-cliente">
                <div className="m-2 font-white">
                  <h5 className="titulo">Nombre</h5>
                  <p>{client?.name}</p>
                </div>

                <div className="m-2 font-white">
                  <h5 className="titulo">Apellido(s)</h5>
                  <p>{client?.last_name}</p>
                </div>
                <div className="m-2 font-white">
                  <h5 className="titulo">Fecha de nacimiento:</h5>
                  <p>
                    {client?.birth_date.replace(
                      /^(\d{4})-(\d{2})-(\d{2})$/g,
                      "$3/$2/$1"
                    )}
                  </p>
                </div>
              </div>
              <div className="info-cliente">
                <div className="m-2 font-white">
                  <h5 className="titulo">Tono de piel</h5>
                  <p>{client?.skin_tone}</p>
                </div>
                <div className="m-2 font-white">
                  <h5 className="titulo">Teléfono</h5>
                  <p>{client?.phone}</p>
                </div>
                <div className="m-2 font-white">
                  <h5 className="titulo">Email</h5>
                  <p>{client?.email}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center font-white">
              <hr />
            </div>
          </Col>
        </Row>
        {/* Botones usuario */}
        <Container className="contenedor-usuario">
          <Row>
            <Col className="botones-usuario font-white d-flex justify-content-center">
              <Button
                onClick={() => navigate("photographies")}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">REALIZAR ESTUDIO</span>
                <PhotoCameraIcon />
              </Button>
              <Button
                onClick={() => navigate("colorimetry")}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">
                  RESULTADO COLORIMETRÍA
                </span>
                <ColorLensIcon />
              </Button>
              <Button
                onClick={() => navigate("resultTest")}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">RESULTADO TESTS</span>
                <ChecklistIcon />
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col className="botones-usuario d-flex justify-content-center">
              <Button
                onClick={() => navigate(`/allTestClient/${client?.user_id}`)}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">
                  REALIZAR FORMULARIOS
                </span>
                <ArticleIcon />
              </Button>
              <Button
                onClick={() => navigate("history")}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">HISTORIAL CLIENTE</span>
                <FolderIcon />
              </Button>
              <Button
                onClick={() => navigate("visit")}
                className="text-white m-1 boton-user"
                variant="contained"
                sx={{ p: 1 }}
              >
                <span className="titulo-boton-user m-1">NUEVA VISITA </span>{" "}
                <AddBoxIcon />
              </Button>
            </Col>
          </Row>
          <div>
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};
