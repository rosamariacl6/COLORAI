import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';

import "./botonoverlay.scss"



export const BotonOverlay = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>
        <Button className="botonoverlay">
            <img 
              onClick={() => navigate("/glowup")}
              className="tamañooverlay" 
              src="../../../../assets/images/iconosbotones/papelera.png" 
              alt="icono papelera" 
            />
            <img 
              onClick={() => navigate("/cameravisor")}
              className="tamañooverlay1" 
              src="../../../../assets/images/iconosbotones/hacerfotonueva.png" 
              alt="icono para hacer una foto nueva" 
            />
            <img 
              onClick={() => navigate("/cameravisor")}
              className="tamañooverlay" 
              src="../../../../assets/images/iconosbotones/subirfoto.png" 
              alt="icono para subir foto" 
            />
        </Button>
    </div>
    
    </>
  )
}
