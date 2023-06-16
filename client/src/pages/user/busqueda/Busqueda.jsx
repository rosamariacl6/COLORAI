import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../../components/navbarSuperior/NavbarSuperior";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./busqueda.scss";
import { Avatar } from "@mui/material";
import { BotonRosa } from "../../../components/botonrosa/BotonRosa";

export const Busqueda = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4; // Cambiar a 5 para mostrar 5 clientes por página
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/browser")
      .then((res) => {
        setAllUsers(res.data);
        setSearchResult(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    setSearchUser(e.target.value);
    let arrayProvisional = allUsers.filter((elem) =>
      elem.last_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(arrayProvisional);
  };
  const onSubmit = (client_id) => {
    navigate(`/oneUser/${client_id}`);
  };

  // Obtener los índices de los usuarios a mostrar en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = searchResult.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Row>
      <ResponsiveAppBar />
      <Col className="info text-center d-flex align-items-center justify-content-center">
        <div className="buscador pt-5">
          <h5 className="text-white m-4">Busca al cliente por su apellido</h5>
          <input
            value={searchUser}
            onChange={onChange}
            type="text"
            placeholder="Buscar..."
            className="form-control"
          />
          <table>
            <thead className="morado font-white">
              <tr className="bg-curso text-white">
                <th>FOTO</th>
                <th>NOMBRE Y APELLIDO(S)</th>
                <th>PERFIL</th>
              </tr>
            </thead>
            <tbody className="morado-claro font-white">
              {currentUsers.map((value) => (
                <tr key={value.id}>
                  <td>
                    <Avatar
                      alt={value.name}
                      src={`/images/user/${value.avatar}`}
                    />
                  </td>
                  <td>
                    {value.name} {value.last_name}
                  </td>
                  <td>
                    <button className="boton-perfil" onClick={() => onSubmit(value.user_id)}>
                      Perfil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div>
            {searchResult.length > usersPerPage && (
              <nav>
                <ul className="pagination">
                  {Array.from(
                    { length: Math.ceil(searchResult.length / usersPerPage) },
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};
