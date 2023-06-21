import "./MainFooter.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import SectionFour from "../../SectionFour/SectionFour";

const MainFooter = () => {
  return (
    <>
      <div className="footer-number">
        <h1>Book a car by getting in touch with us</h1>
        <h2>
          <AiFillPhone className="footer-icon" />
          <span> (</span>+033<span>)</span> 125 033
        </h2>
      </div>
      <div className="company-info__container">
        <div className="company-info__each">
          <h1>
            <span>CAR</span> Rental
          </h1>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="final-lil__info">
            <a>
              <AiFillPhone />
              (033) -125-033
            </a>
            <a>
              <AiFillMail />
              gustoX@gmail.com
            </a>
            <a>Design by RasimovInc</a>
          </div>
        </div>
        <div className="company-info__each">
          <h1>COMPANY</h1>
          <a>Asenovgrad</a>
          <a>Careers</a>
          <a>Mobile</a>
          <a>Blog</a>
          <a>How we work</a>
        </div>
        <div className="company-info__each">
          <h1>WORKING HOURS</h1>
          <p className="full-time__work">Mon - Fri: 4:00AM - 11:00PM</p>
          <p className="full-time__work">Sat: 5:00AM - 10:00PM</p>
          <p className="full-time__work">Sun: Closed</p>
        </div>
        <div className="company-info__each">
          <h1>SUBSCRIPTION</h1>
          <p>Subscribe your Email address for latest news & updates.</p>
          <div className="final-buttons__container">
            <input
              className="final-input"
              placeholder="Enter Email Address"
            ></input>
            <button className="final-submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
