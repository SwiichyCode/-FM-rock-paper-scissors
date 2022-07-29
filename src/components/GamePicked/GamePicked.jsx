import React, { useCallback, useEffect } from "react";
import { BtnPicked, GamePickedWrapper } from "./GamePicked.style";

export default function GamePicked({
  currentPlayerChoice,
  currentComputerChoice,
  setCurrentComputerChoice,
  result,
  setResult,
  replay,
  score,
  setScore,
}) {
  const playComputer = useCallback(() => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return setCurrentComputerChoice(randomChoice);
  }, [setCurrentComputerChoice]);

  // Play computer
  useEffect(() => {
    setTimeout(() => {
      playComputer();
    }, 3000);
  }, [playComputer]);

  // Get the winner
  const getWinner = useCallback(() => {
    const rules = {
      rock: {
        rock: "draw",
        paper: "lose",
        scissors: "win",
      },
      paper: {
        rock: "win",
        paper: "draw",
        scissors: "lose",
      },
      scissors: {
        rock: "lose",
        paper: "win",
        scissors: "draw",
      },
    };
    const winner = rules[currentPlayerChoice][currentComputerChoice];
    return setResult(winner);
  }, [currentPlayerChoice, currentComputerChoice, setResult]);

  useEffect(() => {
    getWinner();
  }, [getWinner]);

  const getScore = () => {
    if (result === "win") {
      setScore({ ...score, player: score.player + 1 });
    } else if (result === "lose") {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  // Update score
  useEffect(() => {
    getScore();
  }, [result]);

  console.log(score);

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
      {result && (
        <div className="result">
          <h2>You {result}</h2>
          <button onClick={replay}>play again</button>
        </div>
      )}
      <div className="ia-picked">
        <h2>the house picked</h2>
        {result ? (
          <BtnPicked className={`btnWrapper-${currentComputerChoice}`}>
            <div className={`content-btn ${currentComputerChoice}-bg`}>
              <div className="shadow-btn">
                <button
                  className={`btn btn-${currentComputerChoice}`}
                  value="paper"
                  disabled={true}
                ></button>
              </div>
            </div>
          </BtnPicked>
        ) : (
          <div className="content-loading-ia">
            <div className="loading-ia"></div>
          </div>
        )}
      </div>
    </GamePickedWrapper>
  );
}
