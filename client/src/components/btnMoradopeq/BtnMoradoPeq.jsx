import React from 'react'
import { Button } from 'react-bootstrap';
import "./btnmoradopeq.scss"

export const BtnMoradoPeq = ({titulo, onClick}) => {
  return (
    <>
    <Button 
      onClick={onClick} 
      className="btnMoradoPeq">
      {titulo=titulo}
    </Button>
    </>
  )
}
