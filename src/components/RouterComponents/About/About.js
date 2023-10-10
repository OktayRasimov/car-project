import "./About.css";
import Home from "../Home";
import MainNavbar from "../MainNavbar/MainNavbar";
import MainFooter from "../MainFooter/MainFooter";
import meeting from "../../../images/businessMeeting.png";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";

const About = () => {
  return (
    <div className="about-page">
      <MainNavbar name="About" />
      <div className="about-info__container">
        <div className="about-info">
          <h2>About Company</h2>
          <h1 className="about-info__lil">
            You start the engine and your adventure begins
          </h1>
          <p>
            Our dream began from a single renault car and slowly growing
            afterwards with each rent and reinvesting in the company with each
            month our customer base grew more and more and as of now we have
            expanded our inventory to exclusively on high end car with more to
            come
          </p>
          <div className="about-icon__container">
            <div className="test">
              <AiFillCar className="about-icons" />
              <span>9</span>
              <h1>Car types</h1>
            </div>
            <div className="test">
              <BsFillBuildingFill className="about-icons" />
              <span>15</span>
              <h1>Repair Shops</h1>
            </div>
            <div className="test">
              <RiBuilding2Fill className="about-icons" />
              <span>5</span>
              <h1>Rental Outlets</h1>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default About;
