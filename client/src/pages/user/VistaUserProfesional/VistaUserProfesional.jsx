import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ColorAIContext } from "../../../context/ColorAIProvider";
import ResponsiveAppBar from "../../../components/navbarSuperior/NavbarSuperior";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

//bootstrap
import { Row, Col, Button, Card } from "react-bootstrap";

//sass
import "./vistaUserProfessional.scss";
import { Avatar } from "@mui/material";

export const VistaUserProfesional = () => {
  // const [showForm, setShowForm] = useState(false);

  const { user } = useContext(ColorAIContext);
  const navigate = useNavigate();

  return (
    <>
      <Row className="info">
        <ResponsiveAppBar />
        <Row className="font-white perfil-del-usuario text-center">
          <Col>
            <h1 className="m-4">Perfil del usuario</h1>
            <div className="m-4 align-items-center justify-content-center">
              <Card
                style={{ width: "25rem" }}
                className="ficha-profesional mt-5"
              >
                <Avatar
                  className="user-avatar-profile"
                  alt={user?.name}
                  src={`/images/user/${user?.avatar}`}
                />
                <Card.Body>
                  <Card.Text>
                    <h4 className="m-2">Nombre: {user?.name}</h4>
                    <h4 className="m-2">Apellido(s): {user?.last_name}</h4>
                    <h4 className="m-2">Email: {user?.email}</h4>
                    <h4 className="m-2">Género: {user?.gender}</h4>
                    <h4 className="m-2">
                      Fecha de nacimiento:{" "}
                      {user?.birth_date.replace(
                        /^(\d{4})-(\d{2})-(\d{2})$/g,
                        "$3/$2/$1"
                      )}
                    </h4>
                  </Card.Text>
                  <Button
                    onClick={() => navigate(`/editUser/${user.user_id}`)}
                    className="text-white p-3"
                    variant="contained"
                    sx={{ p: 2 }}
                    style={{ backgroundColor: "#cd65a7" }}
                  >
                    EDITAR PERFIL <ModeEditIcon />
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};
