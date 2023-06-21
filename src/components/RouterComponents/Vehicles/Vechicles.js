import "./Vehicles.css";
import MainNavbar from "../MainNavbar/MainNavbar";
import MainFooter from "../MainFooter/MainFooter";
import lambo from "../../../images/lamboVehicleModel.png";
import urus from "../../../images/urusVehicleModel.png";
import tesla from "../../../images/teslaVehicleModel.png";
import bmw from "../../../images/m5VehicleModel.png";
import rs3 from "../../../images/rs3VehicleModel.png";
import gt63s from "../../../images/gt63sVehicleModel.png";
import clio from "../../../images/clioVehicleModel.png";
import porche from "../../../images/porcheVehicleModel.png";
import range from "../../../images/rangeVehicleModel.png";

import { AiFillStar, AiFillCar } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";

const Vehicles = () => {
  return (
    <div className="vehicles-page">
      <MainNavbar name="Vehicle Models" />
      <div className="vehicles-container">
        <div className="car-list__grid">
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={lambo} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>Huracan EVO</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>250$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Lamborghini</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>2</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={urus} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>Urus</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>280$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Lamborghini</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Diesel</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={tesla} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>X Plaid</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>160$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Tesla</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>7/8</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Electric</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={bmw} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>M5</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>190$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>BMW</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={rs3} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>RS3</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>180$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Audi</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={clio} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>Clio 2 (Modded)</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>330$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Renault</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/2</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Manual</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={gt63s} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>gt63s Four-door</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>220$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Mercedes</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={porche} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>911 Turbo S</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>230$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Porche</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Petrol</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
          <div className="car ">
            <div className="car-inside__img-container">
              <img src={range} className="car-inside__img" />
            </div>

            <div className="car-inside__info">
              <div className="car-stats__top">
                <div className="car-stars__left">
                  <h1>Rover Sport</h1>
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
                <div className="car-stars__right">
                  <h1>140$</h1>
                  <p>per Day</p>
                </div>
              </div>
              <div className="car-stars__info">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Land Rover</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>4/5</h1>
                  <p>
                    <MdOutlineAirlineSeatReclineExtra className="car-info__icon" />
                  </p>
                </div>
              </div>
              <div className="car-start__info-bottom">
                <div className="car-stars__info-left">
                  <p>
                    <AiFillCar className="car-info__icon" />
                  </p>
                  <h1>Automatic</h1>
                </div>
                <div className="car-stars__info-right">
                  <h1>Diesel</h1>
                  <p>
                    <BsFillFuelPumpFill className="car-info__icon" />
                  </p>
                </div>
              </div>
            </div>
            <button>Book</button>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Vehicles;
