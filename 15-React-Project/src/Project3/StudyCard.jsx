import React from "react";
import "./studyCard.css";
import quizQuestions from "./data";

function StudyCard() {
  return (
    <>
      <h3>Study Flash Card</h3>
      <div className="card-grid">
        {quizQuestions.map((que) => (
          <div className="card">{que.question}</div>
        ))}
      </div>
    </>
  );
}

export default StudyCard;
