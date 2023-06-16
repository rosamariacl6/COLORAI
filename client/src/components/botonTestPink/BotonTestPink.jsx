import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';

import "./botontestpink.scss"



export const BotonTestPink = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>
        <Button className="botontestpink">
            <p 
              onClick={() => navigate("")}
              className="sizebtntest">Comenzar</p>
               
            
            
        </Button>
    </div>
    
    </>
  )
}

