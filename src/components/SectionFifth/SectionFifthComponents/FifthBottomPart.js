import "./FifthBottomPart.css";
import { BiCaretLeftCircle, BiBitcoin } from "react-icons/bi";
import { MdMoneyOff } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const FifthBottomPart = () => {
  return (
    <div className="fifth-bottompart__container">
      <div className="fifth-left__info">
        <h2>Why Choose Us</h2>
        <h1>Best valued deals you will ever find</h1>
        <p>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </p>
        <button
          onClick={() => {
            gsap.to(window, {
              duration: 0.8,
              scrollTo: ".booking-container",
            });
          }}
        >
          Book Now
        </button>
      </div>
      <div className="fifth-right__info">
        <div className="right-info__container">
          <BiCaretLeftCircle className="info-icons" />
          <div className="right-info__lil">
            <h1>Take the car for a test drive</h1>
            <p>
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
        </div>
        <div className="right-info__container">
          <BiBitcoin className="info-icons" />
          <div className="right-info__lil">
            <h1>Bitcoin Accepted</h1>
            <p>
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </p>
          </div>
        </div>
        <div className="right-info__container">
          <MdMoneyOff className="info-icons" />
          <div className="right-info__lil">
            <h1>No Hidden Fees !</h1>
            <p>
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthBottomPart;
