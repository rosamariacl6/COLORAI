import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ColorAIContext } from "../../context/ColorAIProvider";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const Visit = () => {
  const [service, setService] = useState([]);
  const [visit, setVisit] = useState({ service_id: "", date: "" });
  const { clientContext } = useContext(ColorAIContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/service/allServices")
      .then((res) => {
        setService(res.data);
      
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeService = (e) => {
    setVisit({
      ...visit,
      service_id: e.target.value,
      user_id: clientContext.user_id,
    });
  };

  const handleChangeDate = (e) => {
    setVisit({ ...visit, date: e.target.value });
  };

  console.log(visit);

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/visit/addVisit", visit)
      .then((res) => {
        navigate(`/oneUser/${clientContext.user_id}`);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <h2 className="font-white p-4">Agregar nueva visita</h2>
      <input className="m-1 p-2" onChange={handleChangeDate} type="date" />
      <select className="m-1 p-2" onChange={handleChangeService}>
        <option disabled selected>
          Servicios
        </option>
        {service.map((elem) => {
          return <option value={elem?.service_id}>{elem?.service_name}</option>;
        })}
      </select>
      <br />
      <Button
        onClick={onSubmit}
        className="text-white m-1"
        variant="contained"
        sx={{ p: 2 }}
        style={{ backgroundColor: "#cd65a7" }}
      >
        <CheckIcon />
      </Button>
      <Button
        onClick={() => navigate(`/oneUser/${clientContext.user_id}`)}
        className="text-white m-1"
        variant="contained"
        sx={{ p: 2 }}
        style={{ backgroundColor: "#cd65a7" }}
      >
        <ClearIcon />
      </Button>
    </div>
  );
};
