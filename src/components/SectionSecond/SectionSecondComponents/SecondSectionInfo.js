import "./SecondSectionInfo.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const SecondSectionInfo = () => {
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
    <div className="second-section__info" ref={ref}>
      <motion.h1
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.8, duration: 0.4 }}
        viewport={{ once: true }}
      >
        SELECT A VEHICLE FROM YOUR PHONE.
      </motion.h1>
      <motion.p
        variants={{
          hidden: { y: -150, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.6, duration: 0.3 }}
        viewport={{ once: true }}
      >
        Select from a wide range of luxury vehicles in our inventory. Drive it
        for a month,trade it the next for something else you have always wanted
        to own
      </motion.p>
    </div>
  );
};

export default SecondSectionInfo;
