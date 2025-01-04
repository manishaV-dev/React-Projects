function AccordionSingle({ item, number, curOpen, setCurOpen }) {
  const isOpen = number === curOpen;

  function handleToggle() {
    // open only that according which you clicked and when you clicked on other accordion item prev will be close and curr accordion will open but when you clicked on opened item it will not closed
    // setCurOpen(number);

    // here in this -- same as above plus when you clicked on open item it will be closed
    setCurOpen(isOpen ? null : number);

    // Explanation - suppose my 2nd item is active for that i will be having number==1 and curOpen==1(as index start from 0) so that time the condition - (setCurOpen(isOpen)) - became true, so if that condition is true and again we click on same item this is already true - setCurOpen(isOpen) then have to display null which means no answer will displayed if it is false - (setCurOpen(isOpen) then i have to update the number and that updated number will pass to the curOpen state
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

export default AccordionSingle;
