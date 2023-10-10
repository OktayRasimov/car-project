import "./TestimonialsBottom.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customerInfo from "./CUSTOMER_INFO";
import TestimonialInsider from "./TestimonialInsider";
import { useState, useEffect } from "react";

const TestimonialsBottom = () => {
  const [id, setId] = useState(0);

  const customerL = customerInfo.length;

  return (
    <div className="testimonial-container">
      <button>
        <FaArrowLeft
          onClick={() => {
            id === 0 ? setId(customerL - 1) : setId((prev) => prev - 1);
          }}
        />
      </button>
      <TestimonialInsider person={customerInfo[id]} />
      <button>
        <FaArrowRight
          onClick={() => {
            id === customerL - 1 ? setId(0) : setId((prev) => prev + 1);
          }}
        />
      </button>
    </div>
  );
};

export default TestimonialsBottom;
