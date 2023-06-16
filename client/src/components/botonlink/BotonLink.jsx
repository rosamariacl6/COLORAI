import React from 'react'

import { Button } from 'react-bootstrap';

import "./botonlink.scss"

export const BotonLink = ({titulo}) => {
  return (
    <>
    <Button className="botonlink">{titulo=titulo}</Button>

    </>
  )
}
