import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ResponsiveAppBar from '../../components/navbarSuperior/NavbarSuperior';
import { Col, Row } from 'react-bootstrap';

import "./alltestforclient.scss"

export const AllTestForClient = () => {
 const navigate = useNavigate();

  const [test, setTest] = useState([])
  const {user_id} =useParams();
  
  useEffect(() => {

    axios
    .get("http://localhost:4000/test/getTestTypeOneAndTwo")
    .then((res)=>{console.log(res)
    setTest(res.data)
  })
    .catch((err)=>{console.log(err)})
  }, [])

  return (
    <>
      <Row>
        <ResponsiveAppBar/>
        <Row className="info m-0">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className='formulario-test mt-3 d-flex flex-column justify-content-center align-items-center alltestforclient text-white'>
              <h2 className='pb-3 text-center'>Rellena los formularios:</h2>
                {test.map((e) => {
                   return (
                <>
                <tr key={e.test_id}>
                  <td className='fw-bold'>{e.test_name}</td>
                </tr>
                <div className='d-flex flex-column justify-content-center align-items-center p-3'>
                  <button 
                    className='botonalltestforclient'
                    onClick={()=>{e.type === 1 ? navigate(`/testTypeOne/${e?.test_id}/${user_id}`): navigate(`/testoption/${e?.test_id}/${user_id}`)}}>
                    Comenzar
                  </button>
                </div>
                <hr />
                </>
                  );
                })}
                <button 
                    className='botonalltestforclientVolver'
                    onClick={()=>navigate(-1)}>
                    Volver
                  </button>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  )
}
