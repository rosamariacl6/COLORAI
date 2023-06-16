import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';

export const Photographies = () => {
  return (
    <div className='row'>
      {/* seccion fotografias  */}
      <Container className='my-4'>
        <Row>
          <Col>
            <p className='text-center font-white'>Asegúrate de que el cliente va sin maquillar, lleva el pelo recogido y viste de negro.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center font-white'>Las fotografías deben realizarse frente a un fondo neutro y con luz blanca.</p>
          </Col>
        </Row>
        {/* primeras 2 fotos */}
        <Row className='m-4'>
          <Col sm={6} md={6} lg={3} className='d-flex align-items-center justify-content-center'>
            <div className='font-white text-center'>
              <div className='div-foto-cliente d-flex align-items-center justify-content-center m-2'>
                <PlusCircleFill size={50}/>
              </div>
              <h6 className='m-4'>Rostro frontal</h6>
            </div>
          </Col>
          <Col sm={6} md={6} lg={3} className='d-flex align-items-center justify-content-center'>
            <div className='font-white text-center'>
              <div className='div-foto-cliente d-flex align-items-center justify-content-center m-2'>
                <PlusCircleFill size={50}/>
              </div>
              <h6 className='m-4'>Rostro de perfil</h6>
            </div>
          </Col>
        </Row>
        {/* segundas 2 fotos */}
        <Row className='m-4'>
          <Col sm={6} md={6} lg={3} className='d-flex align-items-center justify-content-center'>
            <div className='font-white text-center'>
              <div className='div-foto-cliente d-flex align-items-center justify-content-center m-2'>
                <PlusCircleFill size={50}/>
              </div>
              <h6 className='m-4'>Cabeza cenital sup.</h6>
            </div>
          </Col>
          <Col sm={6} md={6} lg={3} className='d-flex align-items-center justify-content-center'>
            <div className='font-white text-center'>
              <div className='div-foto-cliente d-flex align-items-center justify-content-center m-2'>
                <PlusCircleFill size={50}/>
              </div>
              <h6 className='m-4'>Hombro</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
