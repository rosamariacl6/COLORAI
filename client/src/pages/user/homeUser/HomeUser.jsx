import React, { useContext } from "react";
import {
  Col,
  Row,
  ProgressBar,
  Button,
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
  ButtonGroup,
} from "react-bootstrap";
// import { NavbarDark } from "../../../components/navbardark/NavbarDark";
import "./homeuser.scss";
import { useNavigate } from "react-router-dom";
import { BotonTestPink } from "../../../components/botonTestPink/BotonTestPink";
import ResponsiveAppBar from "../../../components/navbarSuperior/NavbarSuperior";

export const HomeUser = () => {
  let now = 80;
  let ahora2 = 50;
  let ahora3 = 20;
  let ahora4 = 0;
  let ahora5 = 0;

  const navigate = useNavigate();

  const ContextAwareToggle = ({ eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Button
  onClick={decoratedOnClick}
  variant={isCurrentEventKey ? "pink" : "outline-pink"}
  className={`menuDesplegableArriba px-2 ${
    isCurrentEventKey ? "arrow-down" : ""
  }`}
  style={{ width: "90%" }}
>
<Row className="align-items-center" >
  <Col className="col-4 d-flex justify-content-start">
      {eventKey === "0" ? "Cuidados del cabello" : ""}
      {eventKey === "1" ? "Hábitos de peinado" : ""}
      {eventKey === "2" ? "¿Cómo sientes tu pelo?" : ""}
      {eventKey === "3" ? "Conociendo tu estilo" : ""}
      </Col>
  <Col className="col-4 globo px-2 d-flex align-items-start justify-content-center">
      {eventKey === "0" ? "Tiempo estimado: 2-3 min" : ""}
      {eventKey === "1" ? "Tiempo estimado: 5 min" : ""}
      {eventKey === "2" ? "Tiempo estimado: 2-3 min" : ""}
      {eventKey === "3" ? "Tiempo estimado: 15 min" : ""}
      </Col>
  <Col className="col-4 d-flex align-items-end justify-content-end">
    <div className="img-container">
      <img
        className="img-derecha"
        src="../../../../assets/images/logos/btnDown.png"
        alt="abajo"
      />
    </div>
  </Col>
</Row>
</Button>

    );
  };

  return (
    <>
      <Row className="p-0">
      <ResponsiveAppBar />
        <Row className="crear-form info m-0"> 
          <div className="contenedor2">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <div className="p-2">
                <div className="empezando pt-5 align-items-center justify-content-start text-left">
                <h2>
              ¡Hola María!{" "}
              <span>
                <img src="/assets/images/logos/logoSaludo.png" alt="saludo" className="icono-saludo" />
              </span>
            </h2>
                  <h2>Empezando</h2>
                  <br />
                  <p>
                    ¡Obtén todas las ventajas que Colorai te ofrece para un
                    asesoramiento completo!
                  </p>
                  <p>Para ello, deberás completar una serie de preguntas</p>
                  <ProgressBar
                    className="progress-bar-relleno"
                    now={now}
                    variant="pink"
                    animated
                    striped
                    style={{ width: "93%" }}
                  />
                  <div
                    className="progress-bar-animated"
                    style={{
                      borderBottom: "2px solid #625B71",
                      width: "93%",
                      margin: "10px 0px",
                    }}
                  ></div>

                  <Accordion defaultActiveKey="0">
                    <Card className="desplegable">
                      <Card.Header>
                        <ContextAwareToggle eventKey="0" />
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="menuDesplegableAbajo">
                          <ButtonGroup className="d-flex">
                            <div className="col-8 col-md-10">
                              <p>Formulario incompleto</p>
                              <ProgressBar
                                className="progress-bar-relleno2"
                                now={ahora2}
                                variant="pink"
                                animated
                                striped
                                style={{ width: "65%" }}
                              />
                              <p className="questionNum">0/7 preguntas</p>
                            </div>
                            <div className="col-4 col-md-2 btnTestRosa">
                              <BotonTestPink />
                            </div>
                          </ButtonGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="desplegable">
                      <Card.Header>
                        <ContextAwareToggle eventKey="1" />
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className="menuDesplegableAbajo">
                          <ButtonGroup className="d-flex">
                            <div className="col-8 col-md-10">
                              <p>Formulario incompleto</p>
                              <ProgressBar
                                className="progress-bar-relleno2"
                                now={ahora3}
                                variant="pink"
                                animated
                                striped
                                style={{ width: "65%" }}
                              />
                              <p className="questionNum">0/7 preguntas</p>
                            </div>
                            <div className="col-4 col-md-2 btnTestRosa">
                              <BotonTestPink />
                            </div>
                          </ButtonGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="desplegable">
                      <Card.Header>
                        <ContextAwareToggle eventKey="2" />
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className="menuDesplegableAbajo">
                          <ButtonGroup className="d-flex">
                            <div className="col-8 col-md-10">
                              <p>Formulario incompleto</p>
                              <ProgressBar
                                className="progress-bar-relleno2"
                                now={ahora4}
                                variant="pink"
                                animated
                                striped
                                style={{ width: "65%" }}
                              />
                              <p className="questionNum">0/7 preguntas</p>
                            </div>
                            <div className="col-4 col-md-2 btnTestRosa">
                              <BotonTestPink />
                            </div>
                          </ButtonGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="desplegable">
                      <Card.Header>
                        <ContextAwareToggle eventKey="3" />
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className="menuDesplegableAbajo">
                          <ButtonGroup className="d-flex">
                            <div className="col-8 col-md-10">
                              <p>Formulario incompleto</p>
                              <ProgressBar
                                className="progress-bar-relleno2"
                                now={ahora5}
                                variant="pink"
                                animated
                                striped
                                style={{ width: "65%" }}
                              />
                              <p className="questionNum">0/10 preguntas</p>
                            </div>
                            <div className="col-4 col-md-2 btnTestRosa">
                              <BotonTestPink />
                            </div>
                          </ButtonGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Row>
    </>
  );
};
