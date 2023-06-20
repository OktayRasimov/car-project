import "./TopPart.css";
import { AiOutlineCrown, AiOutlineArrowUp } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import phoneMain from "../../../images/phonemainpage.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState, useEffect, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const TopPart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(`isInView`);
    }
  }, [isInView]);

  const [isScrollFixed, setIsScrollFixed] = useState(false);

  // Update navbar fixed state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollFixed(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { x: "-100%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.8, delay: 0.2 }}
        className="top-part__container"
        viewport={{ once: true }}
      >
        <motion.div className="top-part__text">
          <div className="navbar">
            <h2>
              <AiOutlineCrown />
              Granite Rentals
            </h2>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="navbar-links"
            >
              <a>
                <Link to="/">Home</Link>
              </a>
              <a>About</a>
              <a>Vehicle Models</a>
              <a>Our Team</a>
              <a>Contact</a>
            </motion.div>
          </div>
          <motion.h1
            variants={{
              hidden: { y: -250, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}
          >
            DRIVE A NEW CAR EVERY MONTH.
          </motion.h1>

          <div className="top-part__additional">
            <button>
              Available on the app stote{" "}
              <HiOutlineArrowNarrowRight className="arrow-icon" />
            </button>
            <button
              className="additional-button"
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: ".booking-container",
                });
              }}
            >
              Book Car Now
            </button>
          </div>
        </motion.div>
        <motion.img
          variants={{
            hidden: { x: "50%", opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          alt="phone with car info"
          src={phoneMain}
        />
      </motion.div>
      {isScrollFixed && (
        <div
          onClick={() => {
            gsap.to(window, {
              duration: 0.8,
              scrollTo: ".navbar",
            });
          }}
          className="scroll"
        >
          <AiOutlineArrowUp className="scroll-icon" />
        </div>
      )}
    </>
  );
};

export default TopPart;
