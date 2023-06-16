import React from 'react'
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BotonRosa } from '../botonrosa/BotonRosa';

import "./navbarglow.scss"

export const NavbarGlow = () => {

  const navigate = useNavigate();

  return (
    // ----------------- NAVBAR LANDING PAGE ----------------- //

      <Navbar className="colornavbarglow" expand="lg">
      <Container fluid>
        <Navbar.Toggle className="botonmenuglow m-2" aria-controls="navbarScroll" />
        <Navbar.Collapse className='m-2' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavDropdown className="menunavbar" title="GLOW UP" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Conócenos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Servicios
              </NavDropdown.Item>
              <NavDropdown.Item>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item>
                Reservar cita
              </NavDropdown.Item>
              <NavDropdown.Item>
                Contáctanos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                ES español
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <BotonRosa 
            onClick={()=>navigate('/login')} 
            titulo="Iniciar sesión"/>
            &nbsp;&nbsp;
            {/* <BotonRosa 
            onClick={()=>navigate('/register')}  
            titulo="UNÉTE"/> */}
        </Navbar.Collapse>

      </Container>
    </Navbar>
    
  )
}
