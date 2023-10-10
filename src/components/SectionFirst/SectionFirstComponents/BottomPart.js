import Porche from "../../../images/final.png";
import Lambo from "../../../images/lambofinal.png";
import Mercedes from "../../../images/mercedes.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import "./BottomPart.css";

const BottomPart = () => {
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
    <div ref={ref} className="bottom-part__container">
      <motion.img
        variants={{
          hidden: { x: "-63%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 1.8 }}
        src={Porche}
        alt="porche"
        className="porche"
      />
      <motion.img
        variants={{
          hidden: { x: "-154%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 1.8 }}
        src={Lambo}
        alt="lambo"
        className="lambo"
      />
      <motion.img
        variants={{
          hidden: { x: "-115%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 1.7 }}
        src={Mercedes}
        alt="mercedes"
        className="mercedes"
      />
    </div>
  );
};

export default BottomPart;
