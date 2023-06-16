import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import axios from "axios";
import { Row, Col, Container, Card, Nav, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./perfilcliente.scss";

import { NavbarClient } from "../../../components/navbarclient/NavbarClient";

export const PerfilCliente = () => {
  const [activeCard, setActiveCard] = useState("personal");
  // const id = useParams().id;
  const navigate = useNavigate();
  const { user, clientContext } = useContext(ColorAIContext);
  const [history, setHistory] = useState([]);
  const [service, setService] = useState([]);
  const [telas, setTelas] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/visit/getHistory/${clientContext?.user_id}`)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clientContext]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/service/allServices")
      .then((res) => {
        setService(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/fabric/showAllFabrics")
      .then((res) => {
        console.log(res);
        setTelas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/answer/getAnswerColor/${clientContext?.user_id}`
      )
      .then((res) => {
        console.log(res);

        setAnswer(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clientContext]);

  const showFabric = (answer) => {
    const fabricIndex = parseInt(answer?.answer) - 1;
    if (fabricIndex >= 0 && fabricIndex < telas.length) {
      return telas[fabricIndex]?.fabric_img;
    }
    return null;
  };

  return (
    <>
      <NavbarClient />
      <div className="fondoClient">
        <Row className="d-flex flex-column justify-content-center align-items-center pt-3">
          <Col className="d-flex flex-column justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="text-center ">¡Hola {user?.name}! </h1>
            </div>
            <div className="imgPerfil">
              <Avatar
                className="avatarClient"
                alt={user?.name}
                src={`/images/user/${user?.avatar}`}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Nav variant="tabs" defaultActiveKey="personal">
            <Nav.Item className="pestañas">
              <Nav.Link
                eventKey="personal"
                onClick={() => setActiveCard("personal")}
              >
                <span className="nav-text iconPestaña">DATOS PERSONALES</span>
                <img
                  src="../../../../assets/images/logos/datospers.png"
                  className="nav-icon"
                  alt="Datos Personales"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="contact"
                onClick={() => setActiveCard("contact")}
              >
                <span className="nav-text iconPestaña">
                  HISTORIAL DE SERVICIOS
                </span>
                <img
                  src="../../../../assets/images/logos/historial.png"
                  className="nav-icon"
                  alt="Historial"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="history"
                onClick={() => setActiveCard("history")}
              >
                <span className="nav-text iconPestaña">COLORIMETRIA</span>
                <img
                  src="../../../../assets/images/logos/colorimetria.png"
                  className="nav-icon"
                  alt="Colorimetria"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        {activeCard === "personal" && (
          <Card className="client-card m-3">
            <br />
            <Row>
              <Col className="editarCliente d-flex justify-content-end col-12">
                {/* <img onClick={()=>navigate(`/editClient/${user.user_id}`)} src="../../../assets/images/logos/editar.png" alt="" height={30}/> */}
                <img
                  onClick={() => navigate(`/editClient/${user?.user_id}`)}
                  src="../../../assets/images/logos/editar.png"
                  alt=""
                  height={30}
                />
              </Col>
            </Row>
            {/* <br /> */}
            <h6 className="m-3 d-flex">Nombre: </h6>
            <p>{user?.name}</p>
            <div className="linea"></div>
            <h6 className="m-3">Apellidos: </h6>
            <span>{user?.last_name}</span>
            <div className="linea"></div>
            <h6 className="m-3">Teléfono: </h6>
            <p>{user?.phone}</p>
            <div className="linea"></div>
            <h6 className="m-3">Email: </h6>
            <p>{user?.email}</p>
            <div className="linea"></div>
            <h6 className="m-3">Fecha de Nacimiento: </h6>
            <p>
              {" "}
              {user?.birth_date.replace(
                /^(\d{4})-(\d{2})-(\d{2})$/g,
                "$3/$2/$1"
              )}
            </p>
            <div className="linea"></div>
            <h6 className="m-3">Tono de piel: </h6>
            <p>{user?.skin_tone}</p>
          </Card>
        )}
        {activeCard === "contact" && (
          <Card className="client-card">
            <table className="text-start">
              <thead className="moradoCliente font-white">
                <tr>
                  <th>Fecha</th>
                  <th>Servicio realizado</th>
                </tr>
              </thead>
              <tbody className="morado-claroCliente font-white">
                {history?.map((elem) => {
                  return (
                    <tr>
                      <td>{elem.date}</td>
                      <td>
                        {
                          service.filter(
                            (e) => e.service_id === elem.service_id
                          )[0].service_name
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        )}
        {activeCard === "history" && (
          <Card className="client-card">
            <Row className="mt-3">
              <Col
                xs={12}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[0]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 1: <br /> CONTRASTE{" "}
                  </h6>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[1]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 2:
                    <br />
                    CONTRASTE PERS.
                  </h6>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[2]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 3: <br /> PROFUNDIDAD{" "}
                  </h6>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[3]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 4:
                    <br />
                    INTENSIDAD
                  </h6>
                </div>
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[4]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 5:
                    <br />
                    SUBTONO
                  </h6>
                </div>
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[5]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 6:
                    <br />
                    TEMPERATURA
                  </h6>
                </div>
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="font-white text-center">
                  <div className="div-circulo-colorimetriaCliente m-2">
                    <img
                      src={`http://localhost:4000/images/telas/${showFabric(
                        answer[6]
                      )}`}
                      alt=""
                    />
                  </div>
                  <h6 className="my-4">
                    PASO 7:
                    <br />
                    ESTACIONES
                    <br />
                  </h6>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="font-white info-cliente">
                <h6>Fecha de la última colorimetría</h6>
                {/* <p>No disponible</p> */}
              </Col>
            </Row>
            <Row>
              <Col className="font-white info-cliente">
                <h6>Resultados</h6>
                {/* <p>No disponible</p> */}
              </Col>
            </Row>
          </Card>
        )}
      </div>
    </>
  );
};
