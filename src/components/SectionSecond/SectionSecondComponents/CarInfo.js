import "./CarInfo.css";

import { IoIosSpeedometer } from "react-icons/io";
import { RiGasStationFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useRef, useEffect } from "react";

const CarInfo = ({ car }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(`isInView`);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: 1 }}
      viewport={{ once: true }}
      className="car-info__container"
    >
      <div className="car-info__main">
        <motion.h1
          key={Math.random()}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {car.carName}
        </motion.h1>

        <p>
          {car.carInfoName} {car.carYear}
        </p>
      </div>
      <div className="car-stats__container">
        <div className="car-mpg">
          <IoIosSpeedometer className="stats-icons" />
          <h2>Fuel Avg</h2>
          <h1>{car.carFuelAvg}</h1>
        </div>
        <div className="car-hp">
          <TbArrowBackUp className="stats-icons tweak" />
          <h2>HP</h2>
          <h1>{car.carHP}</h1>
        </div>
        <div className="car-avg">
          <RiGasStationFill className="stats-icons" />
          <h2>0-100</h2>
          <h1>{car.carTrack}</h1>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          key={Math.random()}
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="car-info__img"
        >
          <motion.img src={car.carImg} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CarInfo;
