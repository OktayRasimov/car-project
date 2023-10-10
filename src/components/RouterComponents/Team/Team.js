import "./Team.css";
import MainNavbar from "../MainNavbar/MainNavbar";
import MainFooter from "../MainFooter/MainFooter";
import boss from "../../../images/boss.png";
import employee1 from "../../../images/employee1.png";
import employee2 from "../../../images/employee2.png";
import employee3 from "../../../images/employee3.png";
import employee4 from "../../../images/employee4.png";
import employee5 from "../../../images/employee5.png";

const Team = () => {
  return (
    <div className="team-page">
      <MainNavbar name="Our Team" />
      <div className="team-container">
        <div className="team-employee__container">
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={boss} className="employee-img" />
            </div>
            <h1>Eduardo</h1>
            <p>boss</p>
          </div>
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={employee1} className="employee-img" />
            </div>
            <h1>Jonas Lukarini</h1>
            <p>Salesman</p>
          </div>
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={employee2} className="employee-img" />
            </div>
            <h1>Francesca Paponi</h1>
            <p>Photographer</p>
          </div>
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={employee3} className="employee-img" />
            </div>
            <h1>Peter Ludogorec</h1>
            <p>Mechanic</p>
          </div>
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={employee4} className="employee-img" />
            </div>
            <h1>Renata Darius</h1>
            <p>Car detailist</p>
          </div>
          <div className="team-employee__each ">
            <div className="employee-img__container">
              <img src={employee5} className="employee-img" />
            </div>
            <h1>Donald Biden</h1>
            <p>Intern</p>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Team;
