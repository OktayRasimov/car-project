import "./Accordion.css";
import { useState } from "react";

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const shower = (i) => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };

  const questions = [
    {
      main: "1.What is special about comparing rental car deals ?",
      second:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      main: "2. How do I find the car rental deals?",
      second:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      main: "3. How do I find such low rental car prices?",
      second:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

  return (
    <div className="accordion-container">
      {questions.map((question, i) => {
        return (
          <div className="accordion-each">
            <div
              className="accordion-question"
              onClick={() => {
                shower(i);
              }}
            >
              <h2>{question.main}</h2>
              <span>{select === i ? "-" : "+"}</span>
            </div>
            <div
              className={
                select === i ? "accordion-answer show" : "accordion-answer"
              }
            >
              <p>{question.second}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
