import React, { useCallback,useRef,useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Webcam from "react-webcam";
import axios from "axios";
import './cameraComp.scss'


const videoConstraints = {
    width: { min: 1024, ideal: 1080, max: 1920 },
    height: { min: 1024, ideal: 1080, max: 1920 },
    facingMode: "user",
  };

export const CameraComp = () => {
// Estado para guardar cada imagen en un array
  const [imageSrc, setImageSrc] = useState([]);
  // Estado para añadir un ID a la imagen
  const [imgId, setImgId] = useState(1);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    // Incrementa el ID en 1
    setImgId(imgId + 1);

    // Guarda las imágenes en un array de obejetos con los atributos "id" y "url"
    setImageSrc([
      {
        id: imgId,
        url: webcamRef.current.getScreenshot(),
      },
      ...imageSrc,
    ]);
  }, [webcamRef, imageSrc, imgId]);








  const handlerSubmit = (url) => {
    

    let dataPic64 = url.split(",")[1]
    let picName = `${Date.now()}.jpg`
    let data = {
      dataPic64,
      picName
    } 

    axios

 

      .post("http://localhost:4000/answer/addPicture", data )

      .then((res)=>{console.log(res)})
      .catch((Err)=>console.log(Err));
  }


  return (
    <Container fluid>
      <Row className="cam-section">
        <Col className="d-flex flex-column align-items-center">
          <div className="cam-back d-flex justify-content-center align-items-center">
            {/* WEBCAM */}
            <Webcam
              className="cam"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              screenshotQuality={1}
              imageSmoothing
              minScreenshotHeight={1080}
              minScreenshotWidth={1080}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button onClick={capture}>Hacer foto</Button>
          </div>
        </Col>
      </Row>
      {imageSrc.length > 0 && (
        <Row className="images justify-content-center">
          {imageSrc.map(({ id, url }) => {
            return (
              <Col key={id} className="d-flex flex-column align-items-center">
                <div className={""}>
                  <div className="text-center">
                    <img src={url} alt="" />
                  </div>
                </div>
            
                {/* <div>
                  <a className="btn btn-primary my-3" href={url} download="../prueba.jpg">
                    Descargar
                  </a>
                 
                </div> */}
                <button onClick={()=>handlerSubmit(url)}>Subir img</button>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  )
}
