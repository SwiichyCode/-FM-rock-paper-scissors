import React, { useEffect, useState } from "react";
import GameChoice from "../GameChoice/GameChoice";
import Header from "../Header/Header";
import { AppWrapper } from "./App.style";

export default function App() {
  const [currentPlayerChoice, setCurrentPlayerChoice] = useState(null);
  const [currentIaChoice, setCurrentIaChoice] = useState(null);
  const [score, setScore] = useState({ player: 0, ia: 0 });
  const [result, setResult] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    // Get the players choice
    setCurrentPlayerChoice(e.target.value);
    playIa();
  };

  // Play the IA
  const playIa = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setCurrentIaChoice(randomChoice);
  };

  // Init rules
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

  // Get the winner
  const getWinner = (player, ia) => {
    console.log(currentPlayerChoice, currentIaChoice);
    const winner = rules[player][ia];
    return winner;
  };

  // Get the game result
  const getGameResult = (currentPlayer, currentIa) => {
    const winner = getWinner(currentPlayer, currentIa);
    if (winner === "win") {
      return "You win!";
    } else if (winner === "lose") {
      return "You lose!";
    } else {
      return "Draw!";
    }
  };

  // Get the score
  const getScore = (currentPlayer, currentIa) => {
    const winner = getWinner(currentPlayer, currentIa);
    if (winner === "win") {
      setScore({ player: score.player + 1, ia: score.ia });
    } else if (winner === "lose") {
      setScore({ player: score.player, ia: score.ia + 1 });
    } else {
      setScore({ player: score.player, ia: score.ia });
    }
  };

  useEffect(() => {
    if (currentPlayerChoice && currentIaChoice) {
      setResult(getGameResult(currentPlayerChoice, currentIaChoice));
      getScore(currentPlayerChoice, currentIaChoice);
      setCurrentPlayerChoice(null);
      setCurrentIaChoice(null);
    }
  }, [currentPlayerChoice, currentIaChoice]);

  return (
    <AppWrapper>
      <Header score={score} />
      <GameChoice />
      {/* <button type="button" value="paper" onClick={handleClick}>
        Papper
      </button>
      <button value="scissors" onClick={handleClick}>
        Scissors
      </button>
      <button value="rock" onClick={handleClick}>
        Rock
      </button>

      <span>{result}</span>
      <span>
        {score.player} / {score.ia}
      </span> */}
    </AppWrapper>
  );
}
