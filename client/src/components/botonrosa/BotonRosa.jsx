import React from 'react'
import { Button } from 'react-bootstrap';
import "./botonrosa.scss"

export const BotonRosa = ({titulo, onClick}) => {
  return (
    <>
    <Button 
      onClick={onClick}
      className="botonrosa">
      {titulo=titulo}
    </Button>
    </>
  )
}
