import "./SectionSecond.css";
import TopPartEmpty from "./SectionSecondComponents/TopPartEmpty";
import SecondSectionCarInfo from "./SectionSecondComponents/SecondSectionCarInfo";
import SecondSectionInfo from "./SectionSecondComponents/SecondSectionInfo";
import BottomPartEmpty from "./SectionSecondComponents/BottomPartEmpty";

const SectionSecond = () => {
  return (
    <div className="section-second__container">
      <TopPartEmpty />
      <div className="section-second-info__container">
        <SecondSectionCarInfo />

        <SecondSectionInfo />
      </div>
      <BottomPartEmpty />
    </div>
  );
};

export default SectionSecond;
