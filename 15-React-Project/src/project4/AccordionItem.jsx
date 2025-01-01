import React from "react";

function AccordionItem({ item, number }) {
  return (
    <>
      <div className="accordion">
        <div className="accordion-header">
          <span className="accordion-icon">+</span>
          <span className="accordion-number">
            {number < 9 ? `0${number + 1}` : number + 1}
          </span>
          <span className="accordion-title">{item.question}</span>
        </div>

        <div className="accordion-content">
          <p>{item.answer}</p>
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
