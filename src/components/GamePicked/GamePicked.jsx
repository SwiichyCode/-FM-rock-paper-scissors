import React, { useCallback, useEffect } from "react";
import { BtnPicked, GamePickedWrapper } from "./GamePicked.style";
import { normalModeRules } from "../../utils/rules";
import { hardcoreModeRules } from "../../utils/rules";

export default function GamePicked({
  currentPlayerChoice,
  currentComputerChoice,
  setCurrentComputerChoice,
  result,
  setResult,
  replay,
  score,
  setScore,
  gameMode,
}) {
  const playComputer = useCallback(() => {
    const normalChoices = ["rock", "paper", "scissors"];
    const hardcoreChoices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNormalChoice = normalChoices[Math.floor(Math.random() * normalChoices.length)]; // prettier-ignore
    const randomHardcoreChoice = hardcoreChoices[Math.floor(Math.random() * hardcoreChoices.length)]; // prettier-ignore

    if (gameMode === "normal") {
      return setCurrentComputerChoice(randomNormalChoice);
    } else {
      return setCurrentComputerChoice(randomHardcoreChoice);
    }
  }, [setCurrentComputerChoice, gameMode]);

  // Play computer
  useEffect(() => {
    setTimeout(() => {
      playComputer();
    }, 1500);
  }, [playComputer]);

  // Get the winner
  const getWinner = useCallback(
    (rules) => {
      const winner = rules[currentPlayerChoice][currentComputerChoice];
      return setResult(winner);
    },
    [currentPlayerChoice, currentComputerChoice, setResult]
  );

  useEffect(() => {
    if (gameMode === "normal") {
      getWinner(normalModeRules);
    } else {
      getWinner(hardcoreModeRules);
    }
  }, [getWinner, gameMode]);

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

  return (
    <GamePickedWrapper result={result}>
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
