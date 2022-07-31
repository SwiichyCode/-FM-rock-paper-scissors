import React from "react";
import { GameChoiceWrapper } from "./GameChoice.style";
import HardcoreGameChoice from "./HardcoreGameChoice/HardcoreGameChoice";
import NormalGameChoice from "./NormalGameChoice/NormalGameChoice";

export default function GameChoice({ handlePlayerChoice, gameMode }) {
  return (
    <GameChoiceWrapper>
      {gameMode === "normal" ? (
        <NormalGameChoice
          handlePlayerChoice={handlePlayerChoice}
          gameMode={gameMode}
        />
      ) : (
        <HardcoreGameChoice
          handlePlayerChoice={handlePlayerChoice}
          gameMode={gameMode}
        />
      )}
    </GameChoiceWrapper>
  );
}
