import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import GameChoice from "../GameChoice/GameChoice";
import GamePicked from "../GamePicked/GamePicked";

export default function App() {
  const [currentPlayerChoice, setCurrentPlayerChoice] = useState(null);
  const [currentComputerChoice, setCurrentComputerChoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPlayerChoice(e.target.value);
  };

  const replay = () => {
    setCurrentPlayerChoice(null);
    setCurrentComputerChoice(null);
    setResult(null);
  };

  return (
    <Container>
      <Header score={score} />
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
        <GameChoice handleClick={handleClick} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
`;
