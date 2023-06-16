import React from 'react'
import { Button } from 'react-bootstrap';
import "./botonmoradoglow.scss"

export const BotonMoradoGlow = ({titulo, onClick}) => {
  return (
    <>
    <Button 
      onClick={onClick} 
      className="botonmoradoglow">
      {titulo=titulo}
    </Button>
    </>
  )
}
