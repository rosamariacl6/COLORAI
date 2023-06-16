import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row, Card, Button } from "react-bootstrap";
import { BtnMoradoPeq } from "../../../components/btnMoradopeq/BtnMoradoPeq";
import "./allclients.scss";
import { Avatar } from "@mui/material";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";
export const AllClients = () => {
  const navigate = useNavigate();
  const [user, setClient] = useState([]);
  const [users, setUsers] = useState();
  const [bool, setBool] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/allClients")
      .then((res) => {
        console.log(res);
        setClient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const delClient = (id) => {
    axios
      .delete(`http://localhost:4000/users/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        setClient(user.filter((elem) => elem.user_id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnable = (id, bool) => {
    console.log(bool);
    //CREO RUTAS PARA DESABILITAR
    let url = `http://localhost:4000/users/blockClient/${id}`;
    //si la ruta es estrictamente distina en status, entra en esta otra
    if (bool === 1) {
      url = `http://localhost:4000/users/toUnlockClient/${id}`;
    }
    axios
      //PASO LA URL COMO PARAMETRo
      .put(url)
      .then(() => {
        axios
          .get("http://localhost:4000/users/allClients")
          .then((res) => {
            setClient(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Row>
        <NavbarAdmin />
        <Row className="all-professional m-0">
          <Col className="d-flex flex-column justify-content-start align-items-center col-sm-12 col-md-12 col-lg-12 p-0">
            <div className="d-flex justify-content-between align-items-center m-3 filaone">
              <div className="back-button-container">
                <BtnMoradoPeq
                  className="btn-atras justify-content-start m-0"
                  onClick={() => navigate("/homeAdmin")}
                  titulo="Atrás"
                />
              </div>
              <div className="text-center w-200">
                <h1>LISTADO DE CLIENTES</h1>
              </div>
              <div className=""></div>
            </div>
            <div className="user-list">
              <Row>
                {user.map((user) => (
                  <Col xs={12} md={6} lg={3} key={user.user_id}>
                    <Card className="mb-4 text-center user-card">
                      <Card.Body>
                        <Avatar
                          className="m-1 avatar d-flex text-center"
                          alt={user?.name}
                          src={`/images/user/${user?.avatar}`}
                        />
                        <Card.Title>
                          {user?.name} {user?.last_name}
                        </Card.Title>
                        <Button
                          className="ml-2 btnturquesa"
                          onClick={() =>
                            handleEnable(user.user_id, user.is_blocked)
                          }
                        >
                          {user.is_blocked === 1 ? "Desbloquear" : "Bloquear"}
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                          variant="danger"
                          onClick={() => delClient(user.user_id)}
                        >
                          Borrar
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                          variant="warning"
                          onClick={() =>
                            navigate(`/editAdminClient/${user.user_id}`)
                          }
                        >
                          Editar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};