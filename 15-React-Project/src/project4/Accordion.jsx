import React from "react";
import "./accordion.css";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <>
      <div className="accordion-container">
        <h3 className="faq">Frequently Asked Questions (FAQ's)</h3>
        <AccordionItem />
      </div>
    </>
  );
}

export default Accordion;
