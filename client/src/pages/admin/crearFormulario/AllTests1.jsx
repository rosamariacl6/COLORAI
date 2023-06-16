import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { BotonMoradoGlow } from "../../../components/botonmoradoglow/BotonMoradoGlow";
import { NavbarAdmin } from "../../../components/navbarAdmin/NavbarAdmin";

export const AllTests1 = () => {
  const navigate = useNavigate();

  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/test/allTest")
      .then((res) => {
        setTest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delTest = (id) => {
    axios
      .delete(`http://localhost:4000/test/deleteTest/${id}`)
      .then((res) => {
        setTest(test.filter((elem) => elem.test_id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Row>
      <NavbarAdmin/>
        <Row className="info m-0">
            <Col className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-3">
                  <button
                    className="botonatrasedit"
                    onClick={() => navigate("/homeAdmin")}>Atrás
                  </button>
                </div>
            <div className="">
                <h2 className='text-center text-white pt-4 pb-4'>TODOS TUS FORMULARIOS</h2>
                    {test.map((test)=>{return(
                    <>
                    <div className='text-center edittestcard1 pt-5'>
                        <p className='text-white fs-4'>{test?.test_name}</p>
                        <div className='pt-3 m-auto botones-all-test d-flex align-items-center justify-content-center'>
                            <button 
                              className='botonelige'
                              onClick={()=>navigate(`/EditTest/${test.test_id}`)}>Editar test</button>
                            &nbsp;&nbsp;
                            <button
                              className='botonfinalizaryenviar'
                              onClick={()=>delTest(test.test_id)}
                              >Borrar test</button>
                        </div>
                    </div>
                    &nbsp;&nbsp;
                  </>
                );
              })}
            </div>
        </Col>
        </Row>
    </Row>
    </>
 
  )
}

