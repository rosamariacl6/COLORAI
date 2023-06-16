import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import Webcam from "react-webcam";
import { idGen } from "../../utils/utils";
import { ColorAIContext } from "../../context/ColorAIProvider";
import "../compoCamara/CameraStyle.scss";
import { BotonRosa } from "../botonrosa/BotonRosa";

const videoConstraints = {
  width: { min: 1024, ideal: 1080, max: 1920 },
  height: { min: 1024, ideal: 1080, max: 1920 },
  facingMode: "user",
};

export const Capture1 = ({ setPictures, pictures }) => {
  const user_id = useContext(ColorAIContext);
  // const [url, setUrl] = useState();

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    // setUrl(webcamRef.current.getScreenshot())
    let provisional = [...pictures];
    provisional[0] = {
      url: webcamRef.current.getScreenshot(),
      userId: 1,
    };
    console.log("--------", provisional);
    setPictures(provisional);
  }, [webcamRef]);

  const onsubmit = () => {
    capture();
  };

  return (
    <>
      <h3 className="tituloFotos">Foto Frontal</h3>
      <div className="d-flex cam">
        <Webcam
          className="webcam2"
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
      <div className="btnCapturar">
        <BotonRosa
          className="btnRosaCapture "
          titulo="Capturar"
          onClick={onsubmit}
        />
      </div>
    </>
  );
};
