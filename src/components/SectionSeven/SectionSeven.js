import "./SectionSeven.css";
import lamboBack from "../../images/lamboBack.png";
import Accordion from "./SectionSevenComponents/Accordion";
import SectionSevenInfo from "./SectionSevenComponents/SectionSevenInfo";

const SectionSeven = () => {
  return (
    <div className="section-seven">
      <SectionSevenInfo />
      <Accordion />
      <img src={lamboBack} className="accordion-lambo" />
    </div>
  );
};

export default SectionSeven;
