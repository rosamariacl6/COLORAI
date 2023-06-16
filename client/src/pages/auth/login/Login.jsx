import React, { useContext, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import axios from "axios";

// sass
import "./login.scss";

const initialValue = {
  email: "",
  password: "",
};

export const Login = () => {
  const [login, setLogin] = useState(initialValue);
  const [msgError, setMsgError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setUser, setIsLogged } = useContext(ColorAIContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const onSubmit = () => {
    if (!login.email || !login.password) {
      setMsgError("Usuario no registrado");
    } else {
      axios
        .post("http://localhost:4000/users/login", login)
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);

          setUser(res.data.user);
          setIsLogged(true);

          const type = res.data.user.type;

          if (type === 1) {
            navigate("/landingProfessional");
          } else if (type === 2) {
            navigate("/landingClient");
          } else if (type === 3) {
            navigate("/homeAdmin");
          }
        })
        .catch((err) => {
          console.log(err);
          setMsgError(
            "Error de Login. Por favor, revisa tus credenciales e inténtalo de nuevo."
          );
          handleShow();
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [showPwd, setShowPwd] = useState(false);

  return (
    <Row>
      <Col className="col-12 col-sm-4 p-0">
        <img src="../assets/images/fondos/fondoRegister.png" alt="" className="img-register w-100" />
      </Col>
      <Col className="align-items-center col-12 col-sm-8">
        <div class="d-flex flex-column signupFrm">
          <div className="glowup"></div>
          <form action="" class="form text-center">
            <h3 className="register">Inicia sesión</h3>
            <br />
            <p>
              Si no tienes cuenta, contacta con nuestro equipo para darte de
              alta.
            </p>
            <div className="form-floating mt-4">
              <input
                type="text"
                label="Correo electrónico"
                className="form-control position-relative "
                name="email"
                onChange={handleChange}
                value={login.email}
                placeholder="email"
              />
              <label htmlFor="email">Correo electrónico</label>
            </div>

            <div className="form-floating mt-3">
              <input
                type={showPwd ? "text" : "password"}
                className="form-control position-relative "
                name="password"
                onChange={handleChange}
                value={login.password}
                placeholder="contraseña"
              />
              <label htmlFor="password">Contraseña</label>
              <div
                className="position-absolute pointer pwd-icon"
                onClick={() => setShowPwd(!showPwd)}
              >
                {showPwd ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={"1.5rem"}
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={"1.5rem"}
                  >
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>
                )}
              </div>
              <Modal
                show={showModal}
                onHide={handleClose}
                centered
                className="modern-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Error de Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex justify-content-center align-items-center">
                    {msgError}
                  </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                  <Button
                    variant="secondary"
                    className="pink-button"
                    onClick={handleClose}
                  >
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* <div className="remember-forgot-password"> */}
            {/* <Form.Check aria-label="option 1" /> &nbsp; */}
            {/* <label className="remember">Recúerdame</label> */}
            {/* <span

            onClick={() => navigate("/reviewemail")}
            className="forgot-password"
          >
            ¿Olvidaste tu contraseña?
          </span> */}
            {/* </div> */}
            <Button onClick={onSubmit} className="boton-form mt-3">
              Iniciar sesión
            </Button>
            <label className="remember text-center mt-2">
              <p>Iniciando sesión, aceptas la</p>
              <p>
                <span className="forgot-password"> Política de privacidad</span>
                &nbsp; y<span className="forgot-password">Términos de uso</span>
              </p>
            </label>
          </form>
        </div>
      </Col>
    </Row>
  );
};
