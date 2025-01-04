import React, { useState } from "react";
import "./accordion.css";
import AccordionItem from "./AccordionItem";
import data from "./data";
import AccordionSingle from "./AccordionSingle";

function Accordion() {
  // state for single item open

  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <div className="accordion-container">
        <h3 className="faq">Frequently Asked Questions (FAQ's)</h3>
        {data.map((item, index) => (
          <AccordionItem item={item} number={index} key={index} />
        ))}

        <h3 className="faq">----------------------------------</h3>
        {data.map((item, index) => (
          <AccordionSingle
            item={item}
            number={index}
            key={index}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
