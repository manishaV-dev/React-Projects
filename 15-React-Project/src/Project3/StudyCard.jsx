import React, { useState } from "react";
import "./studyCard.css";
import quizQuestions from "./data";

function StudyCard() {
  // using null- because first want to show only question
  // const [selectedId, setSelectedId] = useState('FC4IBr');
  const [selectedId, setSelectedId] = useState(null);

  //   when click on card only shows the answer

  function handleClick(id) {
    // when click on card it display answer and by clicking again it has to again shows only the question
    setSelectedId(id !== selectedId ? id : "");
  }
  return (
    <>
      <h2>Study Flash Card</h2>
      <div className="card-grid">
        {quizQuestions.map((que) => (
          <div
            className={`card ${que.id === selectedId ? "active" : ""}`}
            onClick={() => handleClick(que.id)}
            key={que.id}
          >
            {que.id === selectedId ? que.answer : que.question}
          </div>
        ))}
      </div>
    </>
  );
}

export default StudyCard;
