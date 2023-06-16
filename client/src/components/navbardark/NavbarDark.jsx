import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbardark.scss";
export const NavbarDark = () => {
  return (
    <Navbar className="navbardark fixed-left" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="flex-column">
            <div className='pb-5 ms-2 text-center'>
            <div className='fotoPerfil pb-4'>
              <img src="../../../../assets/images/person/person2.png" alt="persona 2" />
            </div>
            <div className='grupoIcon1 pb-4 pt-4'>
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/lupa.png" alt="lupa como buscador" />
            </div>
            <div>
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/logocasa.png" alt="logo que te lleva a home" />
            </div>
            </div>
            <div className='pb-4 pt-4 text-center'>
            <div className='pb-4 pt-4'>
              <img className="iconosnavbar " src="../../../../assets/images/iconosnavbar/agenda.png" alt="agenda para coger citas" />
            </div>
            <div className='pb-4 pt-4'>
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/buscadortelas.png" alt="buscador de telas" />
            </div>
            <div className='pb-4 pt-4'>
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/calendario.png" alt="calendario de citas" />
            </div>
            <div className='pb-4 pt-4'>
              <img className="iconosnavbar" src="../../../../assets/images/iconosnavbar/mensaje.png" alt="mensaje" />
            </div>
            </div>
            <div className='pt-5 text-center'>
            <img className='logo ' src="../../../../assets/images/iconosnavbar/colorai.png" alt="icono de colorAI" />
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};