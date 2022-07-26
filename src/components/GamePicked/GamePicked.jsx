import React, { useEffect } from "react";
import { BtnPicked, GamePickedWrapper } from "./GamePicked.style";

export default function GamePicked({
  currentPlayerChoice,
  setCurrentPlayerChoice,
  currentIaChoice,
  setCurrentIaChoice,
  result,
  loading,
  setLoading,
}) {
  // Fake loading ia choice
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Replay the game
  const handleClick = (e) => {
    e.preventDefault();

    setCurrentPlayerChoice(null);
    setCurrentIaChoice(null);
    setLoading(null);
  };

  return (
    <GamePickedWrapper>
      <div className="player-picked">
        <h2>you picked</h2>
        {/* Paper  */}
        <BtnPicked className={`btnWrapper-${currentPlayerChoice}`}>
          <div className={`content-btn ${currentPlayerChoice}-bg`}>
            <div className="shadow-btn">
              <button
                className={`btn btn-${currentPlayerChoice}`}
                value="paper"
                disabled={true}
              ></button>
            </div>
          </div>
        </BtnPicked>
      </div>
      {!loading && (
        <div className="result">
          <h2>{result}</h2>
          <button onClick={handleClick}>play again</button>
        </div>
      )}
      <div className="ia-picked">
        <h2>the house picked</h2>
        {loading ? (
          <div className="loading-ia"></div>
        ) : (
          <BtnPicked className={`btnWrapper-${currentIaChoice}`}>
            <div className={`content-btn ${currentIaChoice}-bg`}>
              <div className="shadow-btn">
                <button
                  className={`btn btn-${currentIaChoice}`}
                  value="paper"
                  disabled={true}
                ></button>
              </div>
            </div>
          </BtnPicked>
        )}
      </div>
    </GamePickedWrapper>
  );
}
