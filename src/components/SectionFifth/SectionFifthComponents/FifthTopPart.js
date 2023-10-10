import "./FifthTopPart.css";
import imgFrontRover from "../../../images/rangeFront.png";
import imgFrontTesla from "../../../images/teslaFront.png";
import imgFrontBMW from "../../../images/m5Front.png";

const FifthTopPart = () => {
  return (
    <div className="fifth-toppart__container">
      <img className="top-part__img1" src={imgFrontTesla} />
      <img className="top-part__img2" src={imgFrontBMW} />
      <img className="top-part__img3" src={imgFrontRover} />
    </div>
  );
};
export default FifthTopPart;
