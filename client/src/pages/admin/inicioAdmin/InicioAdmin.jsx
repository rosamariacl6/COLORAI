import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import "./inicioadmin.scss";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";

export const InicioAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="info">
        <NavbarAdmin />
        <section className="home-admin padding-section">
          <Row>
            <Col>
              <h2 className="text-center text-white fw-bold pt-5">
                ¿Por dónde empezamos?
              </h2>
            </Col>
          </Row>
          <div className="cards m-5">
            <Row className="justify-content-center text-center">
              <div
                onClick={() => navigate("/registerProfessional")}
                class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5"
              >
                <div class="card card-responsive" style={{ width: "20rem" }}>
                  <img
                    src="/assets/images/cuadradas/1.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="card-body overlay">
                    <p class="card-title">
                      Dar de alta a un profesional
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/allProfessional")}
                class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5"
              >
                <div class="card card-responsive" style={{ width: "20rem" }}>
                  <img
                    src="/assets/images/cuadradas/2.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="card-body overlay">
                    <p class="card-title">
                      Listado de profesionales
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/allClients")}
                class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5"
              >
                <div class="card card-responsive" style={{ width: "20rem" }}>
                  <img
                    src="/assets/images/cuadradas/3.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="card-body overlay">
                    <p class="card-title">Listado de clientes</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/createForm")}
                class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5"
              >
                <div class="card card-responsive" style={{ width: "20rem" }}>
                  <img
                    src="/assets/images/cuadradas/4.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="card-body overlay">
                    <p class="card-title">
                      Registrar nuevo formulario
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/test")}
                class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5"
              >
                <div class="card card-responsive" style={{ width: "20rem" }}>
                  <img
                    src="/assets/images/cuadradas/5.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="card-body overlay">
                    <p class="card-title">
                      Ver listado de formularios
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </section>
      </Row>
    </>
  );
};
