import "./SectionFifth.css";
import TireMarks from "../../images/tireMarks.png";
import FifthTopPart from "./SectionFifthComponents/FifthTopPart";
import FifthBottomPart from "./SectionFifthComponents/FifthBottomPart";

const SectionFifth = () => {
  return (
    <div className="section-five">
      <FifthTopPart />
      <FifthBottomPart />
      <img className="tire-marks" src={TireMarks} />
    </div>
  );
};

export default SectionFifth;
