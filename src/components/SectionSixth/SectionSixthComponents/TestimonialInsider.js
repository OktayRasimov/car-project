import "./TestimonialInsider.css";
import joro from "../../../images/joroMMA.png";
import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialInsider = ({ person }) => {
  return (
    <div className="testimonial-inside">
      <h3>"{person.comment}"</h3>
      <div className="testimonial-customer">
        <img src={person.img} />
        <div>
          <h2>{person.name}</h2>
          <p>{person.city}</p>
        </div>
      </div>
      <RiDoubleQuotesR className="testimonial-quote__icon" />
    </div>
  );
};

export default TestimonialInsider;
