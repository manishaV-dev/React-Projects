import { useState } from "react";
import "./App.css";

const initialBoard = () => Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard());
  console.log(board); // (9) [null, null, null, null, null, null, null, null, null]

  return (
    <>
      <div className="game">
        <div className="status">
          <h3 className="winBox">Player X Turn</h3>
          <button className="resetBtn">Reset Game</button>
        </div>
        <div className="board">
          {board.map((_, index) => (
            <button className="cell" key={index}>
              X
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
