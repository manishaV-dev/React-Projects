import React from "react";
import "./accordion.css";
import AccordionItem from "./AccordionItem";
import data from "./data";

function Accordion() {
  return (
    <>
      <div className="accordion-container">
        <h3 className="faq">Frequently Asked Questions (FAQ's)</h3>
        {data.map((item, index) => (
          <AccordionItem item={item} number={index} key={index} />
        ))}
      </div>
    </>
  );
}

export default Accordion;
