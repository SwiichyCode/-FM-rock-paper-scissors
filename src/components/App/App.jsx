import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import GameChoice from "../GameChoice/GameChoice";
import GamePicked from "../GamePicked/GamePicked";
import { AppWrapper } from "./App.style";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import GameOptions from "../GameOptions/GameOptions";
import GameRules from "../GameOptions/GameRules";
import GameParams from "../GameOptions/GameParams";
import { config } from "../../utils/config";
import GameInformations from "../GameInformations/GameInformations";

export default function App() {
  const initialMode = config.gameMode.default;
  const [gameMode, setGameMode] = useState(initialMode);
  const [currentPlayerChoice, setCurrentPlayerChoice] = useState(null);
  const [currentComputerChoice, setCurrentComputerChoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useLocalStorage("score", {
    player: 0,
    computer: 0,
  });
  const [winrate, setWinrate] = useState(0);

  const handlePlayerChoice = (e) => {
    e.preventDefault();
    setCurrentPlayerChoice(e.target.value);
  };

  const replay = () => {
    setCurrentPlayerChoice(null);
    setCurrentComputerChoice(null);
    setResult(null);
    setLoading(false);
  };

  const getWinrate = useCallback(() => {
    return setWinrate(
      Math.round((score.player / (score.player + score.computer)) * 100)
    );
  }, [score]);

  useEffect(() => {
    getWinrate();
  }, [winrate, getWinrate]);

  console.log(winrate);

  return (
    <AppWrapper>
      <Header score={score} winrate={winrate} gameMode={gameMode} />
      <GameInformations score={score} winrate={winrate} gameMode={gameMode} />
      {currentPlayerChoice ? (
        <GamePicked
          currentPlayerChoice={currentPlayerChoice}
          currentComputerChoice={currentComputerChoice}
          setCurrentComputerChoice={setCurrentComputerChoice}
          result={result}
          setResult={setResult}
          replay={replay}
          loading={loading}
          setLoading={setLoading}
          score={score}
          setScore={setScore}
        />
      ) : (
        <GameChoice
          handlePlayerChoise={handlePlayerChoice}
          gameMode={gameMode}
        />
      )}

      {/* Params / Rules */}
      <GameOptions>
        <GameParams setGameMode={setGameMode} />
        <GameRules />
      </GameOptions>
    </AppWrapper>
  );
}
