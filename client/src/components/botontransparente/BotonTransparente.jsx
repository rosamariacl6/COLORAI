import React from 'react'

import { Button } from 'react-bootstrap';

import "./botontransparente.scss"

export const BotonTransparente = ({titulo, onClick}) => {
  return (
    <>
    <Button 
    onClick={onClick}
    className="botontransparente">{titulo=titulo}</Button>

    </>
  )
}
