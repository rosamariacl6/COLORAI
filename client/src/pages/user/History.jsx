import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ColorAIContext } from "../../context/ColorAIProvider";
import { BtnMoradoPeq } from "../../components/btnMoradopeq/BtnMoradoPeq";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const History = () => {
  const [history, setHistory] = useState([]);
  const { clientContext } = useContext(ColorAIContext);
  const [service, setService] = useState([]);

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
      })
      .catch((err) => console.log(err));
  }, []);

  const delVisit = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/visit/deleteVisit/${id}`)
      .then((res) => {
        console.log(res);
        setHistory(history.filter((elem) => elem.visit_id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <table className="text-center">
        <thead className="morado font-white">
          <tr>
            <th>Fecha</th>
            <th>Servicio realizado</th>
          </tr>
        </thead>
        <tbody className="morado-claro font-white">
          {history?.map((elem) => {
            return (
              <tr>
                <td>{elem.date}</td>
                <td>
                  {
                     service.filter((e) => e.service_id === elem?.service_id)[0]
                      ?.service_name
                  }
                  <Button
                    onClick={() => delVisit(elem.visit_id)}
                    className="text-white m-1"
                    variant="contained"
                    sx={{ p: 1.3}}
                    style={{ backgroundColor: "#cd65a7" }}
                  >
                    <ClearIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
