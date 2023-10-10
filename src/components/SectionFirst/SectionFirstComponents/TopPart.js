import "./TopPart.css";
import {
  AiOutlineCrown,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineSegment } from "react-icons/md";
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

  // navbar active check
  const [navbar, setNavbar] = useState(false);

  const navbarChecker = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div
        style={{ left: navbar && 0, display: navbar && "flex" }}
        className={
          !navbar
            ? `mobile-navbar__container`
            : `mobile-navbar__container active`
        }
      >
        <AiOutlineClose
          onClick={navbarChecker}
          className="navbar-inside__icon"
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
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <MdOutlineSegment
                className="navbar-mobile"
                onClick={navbarChecker}
              />
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
            <motion.button
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              Available on the app store{" "}
              <HiOutlineArrowNarrowRight className="arrow-icon" />
            </motion.button>
            <motion.button
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="additional-button"
              onClick={() => {
                gsap.to(window, {
                  duration: 0.6,
                  scrollTo: ".booking-container",
                });
              }}
            >
              Book Car Now
            </motion.button>
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
