import React from "react";

function AccordionItem() {
  return (
    <>
      <div className="accordion">
        <div className="accordion-header">
          <span className="accordion-icon">+</span>
          <span className="accordion-number">01</span>
          <span className="accordion-title">What is Javascript</span>
        </div>

        <div className="accordion-content">
          <p>It is high level programming language</p>
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
