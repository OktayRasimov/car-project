import "./Contact.css";
import MainNavbar from "../MainNavbar/MainNavbar";
import MainFooter from "../MainFooter/MainFooter";
import world from "../../../images/worldMap.png";
import { AiFillPhone, AiFillMail, AiOutlineSend } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

const Contact = () => {
  const [word, setWord] = useState("");

  const remover = (e) => {
    e.target.value = setWord("");
  };

  return (
    <div className="contact-page">
      <MainNavbar name="Contact" />
      <div className="contact-page__container">
        <div className="contact-page__containers">
          <div className="contact-info__left">
            <h1>Need additional information ?</h1>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <h2>
              <AiFillPhone /> (033)125 033
            </h2>
            <h2>
              <AiFillMail /> gustoX@gmail.com
            </h2>
            <h2>
              <HiLocationMarker /> Plovdiv,Asenovgrad
            </h2>
          </div>
          <div className="contact-info__right">
            <div className="contact-info__right-container item-1">
              <h2>Full Name</h2>
              <input
                placeholder="E.g 'Joe Shmoe'"
                maxLength="50"
                minLength="4"
              />
            </div>
            <div className="contact-info__right-container item-2">
              <h2>Email</h2>
              <input
                type="email"
                placeholder="Youremail@example.com'"
                maxLength="50"
                minLength="4"
              />
            </div>
            <div className="contact-info__right-container item-3">
              <h2>Tell us about it</h2>
              <textarea placeholder="Write here..." maxLength="200" />
            </div>
            <button onClick={remover}>
              <AiOutlineSend />
              Submit
            </button>
          </div>
        </div>
        <img src={world} className="contact-background" />
      </div>
      <MainFooter />
    </div>
  );
};

export default Contact;
