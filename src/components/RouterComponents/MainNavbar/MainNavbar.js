import { AiOutlineCrown, AiOutlineArrowUp } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import lamboMain from "../../../images/lamboUrusDriving.png";
import { MdOutlineSegment } from "react-icons/md";
import "./MainNavbar.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const MainNavbar = ({ name }) => {
  const [navbar, setNavbar] = useState(false);

  const navbarChecker = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div
        className={
          !navbar
            ? `mobile-navbar__container-router`
            : `mobile-navbar__container-router active`
        }
      >
        <AiOutlineClose
          onClick={navbarChecker}
          className="navbar-inside__icon-router"
        />
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
        <a>
          <Link to="/vehicles">Vehicle Models</Link>
        </a>
        <a>
          <Link to="/team">Our Team</Link>
        </a>
        <a>
          <Link to="/contact">Contact</Link>
        </a>
      </div>
      <div className="main-navbar">
        <h2>
          <AiOutlineCrown />
          Granite Rentals
        </h2>
        <div className="main-navbar-links">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/vehicles">Vehicle Models</Link>
          </a>
          <a>
            <Link to="/team">Our Team</Link>
          </a>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </div>
        <MdOutlineSegment
          className="navbar-mobile__router"
          onClick={navbarChecker}
        />
        <div className="main-navbar__info">
          <h1>
            <span>Home</span>/{name}
          </h1>
        </div>
        <img src={lamboMain} className="main-img" />
      </div>
    </>
  );
};

export default MainNavbar;
