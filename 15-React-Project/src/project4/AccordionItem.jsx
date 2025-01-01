import React, { useState } from "react";

function AccordionItem({ item, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    // setIsOpen(!isOpen);
    // both are right
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div
        className={`accordion ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="accordion-header">
          <span className="accordion-icon"> {isOpen ? "-" : "+"} </span>
          <span className="accordion-number">
            {number < 9 ? `0${number + 1}` : number + 1}
          </span>
          <span className="accordion-title">{item.question}</span>
        </div>

        {isOpen && (
          <div className="accordion-content">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AccordionItem;
