import "./SecondSectionCarInfo.css";
import CarInfo from "./CarInfo";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import CAR_DATA from "./CAR_DATA";
import {
  motion,
  AnimatePresence,
  delay,
  useInView,
  useAnimation,
} from "framer-motion";

const SecondSectionCarInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(`isInView`);
    }
  }, [isInView]);

  const [car, setCar] = useState();
  const [carId, setCarId] = useState(0);
  const carL = CAR_DATA.length;
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { overflow: "hidden" },
        visible: { overflow: "visible" },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: 2.6 }}
      viewport={{ once: true }}
      className="second-section__filler"
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="second-section__carinfo"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="car-info__icons"
        >
          <HiArrowLeft
            onClick={() => {
              carId === 0 ? setCarId(carL - 1) : setCarId((prev) => prev - 1);
            }}
          />
          <HiArrowRight
            onClick={() => {
              carId === carL - 1 ? setCarId(0) : setCarId((prev) => prev + 1);
            }}
          />
        </motion.div>

        <div className="section-car-info__container">
          <CarInfo car={CAR_DATA[carId]} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SecondSectionCarInfo;
