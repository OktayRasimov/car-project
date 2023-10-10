import "./Book.css";
import { BsCarFrontFill } from "react-icons/bs";
import { HiLocationMarker, HiExclamation } from "react-icons/hi";
import { IoIosCalendar } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import imgPorche from "../../../images/final.png";
import imgMercedes from "../../../images/mercedes.png";
import imgLambo from "../../../images/lambofinal.png";
import imgRover from "../../../images/rover.png";
import imgBMW from "../../../images/m5.png";
import imgAudi from "../../../images/rs3.png";
import imgClio from "../../../images/reno.png";
import imgUrus from "../../../images/Urus.png";
import imgTesla from "../../../images/tesla.png";
// front imgs
import imgLamboFront from "../../../images/lamboFront.png";
import imgUrusFront from "../../../images/urusFront.png";
import imgMercedesFront from "../../../images/63sFront.png";
import imgBMWFront from "../../../images/m5Front.png";
import imgClioFront from "../../../images/clioFront.png";
import imgPorcheFront from "../../../images/porcheFront.png";
import imgTeslaFront from "../../../images/teslaFront.png";
import imgRangeFront from "../../../images/rangeFront.png";
import imgAudiFront from "../../../images/rs3Front.png";

const Booking = () => {
  const [modal, setModal] = useState(false); //  class - active-modal
  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  //booking done state
  const [booking, setBooking] = useState(false);
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const hideMessage = () => {
    const errorMsg = document.querySelector(".booking-error");
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
    errorMsg.style.display = "none";
  };

  const openModal = (e) => {
    e.preventDefault();
    if (
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === ""
    ) {
      e.preventDefault();
      const errorMsg = document.querySelector(".booking-error");
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      e.preventDefault();
      const errorMsg = document.querySelector(".booking-error");
      errorMsg.style.display = "none";
    }
  };

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };
  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Lamborhgini Urus":
      imgUrl = imgUrusFront;
      break;
    case "Tesla X Plaid":
      imgUrl = imgTeslaFront;
      break;
    case "Porche 911 Turbo S":
      imgUrl = imgPorcheFront;
      break;
    case "Mercedes 63S":
      imgUrl = imgMercedesFront;
      break;
    case "Lamborghini Huracan EVO":
      imgUrl = imgLamboFront;
      break;
    case "Range Rover Sport":
      imgUrl = imgRangeFront;
      break;
    case "BMW M5":
      imgUrl = imgBMWFront;
      break;
    case "Audi RS3 Sportsback":
      imgUrl = imgAudiFront;
      break;
    case "Renault Clio 2 Modded":
      imgUrl = imgClioFront;
      break;
    default:
      imgUrl = "";
  }

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  return (
    <>
      <div className="booking-container">
        <h1 className="booking-container__header">Book a car</h1>
        <div className={`booking-done`}>
          <p>Booking is finished .Check you Email for more information</p>
          <AiOutlineCloseCircle
            className="booking-finished__icon"
            onClick={hideMessage}
          />
        </div>
        <div className={`booking-error`}>
          <p>Not all Information is filled</p>
          <AiOutlineCloseCircle
            className="booking-finished__icon"
            onClick={hideMessage}
          />
        </div>
        <div className="grid-items">
          <div className="grid-item__section">
            <div className="grid-item__header">
              <BsCarFrontFill className="grid-icons" />
              <p>Select Your Car Type</p>
            </div>
            <select
              className="grid-item__select"
              value={carType}
              onChange={handleCar}
            >
              <option>Select Your Car Type</option>
              <option value="Lamborhgini Urus">Lamborghini Urus</option>
              <option value="Tesla X Plaid">Tesla X Plaid</option>
              <option value="Porche 911 Turbo S">Porche 911 Turbo S</option>
              <option value="Mercedes 63S">Mercedes 63S</option>
              <option value="Lamborghini Huracan EVO">
                Lamborghini Huracan EVO
              </option>
              <option value="Range Rover Sport">Range Rover Sport</option>
              <option value="BMW M5">BMW M5</option>
              <option value="Audi RS3 Sportsback">Audi RS3 Sportsback</option>
              <option value="Renault Clio 2 Modded">
                Renault Clio 2 Modded
              </option>
            </select>
          </div>
          <div className="grid-item__section">
            <div className="grid-item__header">
              <HiLocationMarker className="grid-icons" />
              <p>Pick-up</p>
            </div>
            <select
              className="grid-item__select"
              value={pickUp}
              onChange={handlePick}
            >
              <option>Choose Pick up</option>
              <option value="Plovdiv">Plovdiv</option>
              <option value="Asenovgrad">Asenovgrad</option>
              <option value="Sofia">Sofia</option>
              <option value="Burgas">Burgas</option>
              <option value="Zapada">Zapada</option>
            </select>
          </div>
          <div className="grid-item__section">
            <div className="grid-item__header">
              <HiLocationMarker className="grid-icons" />
              <p>Drop-of</p>
            </div>
            <select
              className="grid-item__select"
              value={dropOff}
              onChange={handleDrop}
            >
              <option>Choose Drop of</option>
              <option value="Asenovgrad">Asenovgrad</option>
              <option value="Plovdiv">Plovdiv</option>
              <option value="Sofia">Sofia</option>
              <option value="Burgas">Burgas</option>
              <option value="Zapada">Zapada</option>
            </select>
          </div>
          <div className="grid-item__section">
            <div className="grid-item__header">
              <IoIosCalendar className="grid-icons" />
              <p>Pick-up Date</p>
            </div>
            <input
              className="grid-item__select"
              type="date"
              value={pickTime}
              onChange={handlePickTime}
            />
          </div>
          <div className="grid-item__section">
            <div className="grid-item__header">
              <IoIosCalendar className="grid-icons" />
              <p>Drop-of Date</p>
            </div>
            <input
              className="grid-item__select"
              type="date"
              value={dropTime}
              onChange={handleDropTime}
            />
          </div>
          <button type="submit" onClick={openModal}>
            Submit
          </button>
        </div>
      </div>

      {/* /////////MODAL PLACE////////// */}
      <div
        className={`cover ${modal ? "active" : ""}`}
        onClick={openModal}
      ></div>
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <h1 className="booking-modal__opening">
          Complete Order
          <AiOutlineCloseCircle
            onClick={() => {
              setModal(false);
            }}
            className="booking-modal__close"
          />
        </h1>
        <div className="booking-modal__information">
          <h2>
            <HiExclamation className="booking-info__icon" /> Upon completing
            this order you will receive:
          </h2>
          <p>
            Your rental car order number with all necessary information and free{" "}
            <span>24/7</span> customer support number
          </p>
        </div>
        <div className="booking-full__info">
          <div className="booking-full__left">
            <h2>Location & Date</h2>
            <div className="booking-info__container">
              <div className="booking-left__confirminfo">
                <HiLocationMarker className="booking-icon" />
                <p>Pick-Up Date & Time</p>
              </div>
              <div className="booking-info__time">
                {pickTime} /<input type="time" className="input-time"></input>
              </div>
            </div>
            <div className="booking-info__container">
              <div className="booking-left__confirminfo">
                <HiLocationMarker className="booking-icon" />
                <p>Drop-Off Date & Time</p>
              </div>
              <div className="booking-info__time">
                {dropTime}/<input type="time" className="input-time"></input>
              </div>
            </div>
            <div className="booking-info__container">
              <div className="booking-left__confirminfo">
                <IoIosCalendar className="booking-icon" />
                <p>Pick-Up Location</p>
              </div>
              {pickUp}
            </div>
            <div className="booking-info__container">
              <div className="booking-left__confirminfo">
                <IoIosCalendar className="booking-icon" />
                <p>Drop-Off Location</p>
              </div>
              {dropOff}
            </div>
          </div>
          <div className="booking-full__right">
            <h1>
              Car - <span>{carType}</span>
            </h1>
            <img src={imgUrl} />
          </div>
        </div>
        <div className="recenter-grid">
          <div className="booking-personal__info">
            <h2 className="bootleg-text">Personal Information</h2>
            <div className="personal-info__containers grid-1">
              <h2>First Name</h2>
              <input placeholder="Enter your first name" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-2">
              <h2>Last Name</h2>
              <input placeholder="Enter your last name" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-3">
              <h2>Phone Number</h2>
              <input placeholder="Enter your phone number" type="tel" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-4">
              <h2>Age</h2>
              <input placeholder="Enter your age" type="number" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-5">
              <h2>Email</h2>
              <input placeholder="Enter your email" type="email" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-6">
              <h2>Address</h2>
              <input placeholder="Enter your adress" type="text" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-7">
              <h2>City</h2>
              <input placeholder="Enter your city" type="text" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
            <div className="personal-info__containers grid-8">
              <h2>ZipCode</h2>
              <input placeholder="Enter your zipcode" type="number" />
              <p>
                <span>*</span>This field is required
              </p>
            </div>
          </div>
        </div>
        <div className="booking-confirm__button">
          <button onClick={confirmBooking}>Confirm</button>
        </div>
      </div>
    </>
  );
};

export default Booking;
