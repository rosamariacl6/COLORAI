import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './botongoogle.scss';

export const BotonGoogle = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Button className="botongoogle">
          Regístrate con Google &nbsp;
          <img
            onClick={() => navigate('/cameravisor')}
            className="tamañogoogle"
            src="../../../../assets/images/logos/google.png"
            alt="inicioGoogle "
          />
        </Button>
      </div>
    </>
  );
};

