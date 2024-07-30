import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, resetGame, getStatusMessage, handleClick } =
    useTicTacToe();

  return (
    <>
      <div className="game">
        <div className="status">
          <h3 className="winBox">{getStatusMessage()}</h3>
          <button className="resetBtn" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((el, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={el !== null} // if not null then disabled
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
