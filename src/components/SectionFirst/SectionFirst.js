import TopPart from "./SectionFirstComponents/TopPart";
import BottomPart from "./SectionFirstComponents/BottomPart";
import "./SectionFirst.css";

const SectionFirst = () => {
  return (
    <div className="section-first__container">
      <TopPart />
      <BottomPart />
    </div>
  );
};

export default SectionFirst;
