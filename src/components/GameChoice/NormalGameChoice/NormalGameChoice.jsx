import React from "react";
import GameButton from "../../GameButton/GameButton";
import { NormalGameChoiceWrapper } from "./NormalGameChoice.style";

export default function NormalGameChoice({ handlePlayerChoice, gameMode }) {
  return (
    <NormalGameChoiceWrapper>
      {/* Paper  */}
      <GameButton
        gameMode={gameMode}
        action={handlePlayerChoice}
        value={"paper"}
      />
      {/* Scissors */}
      <GameButton
        gameMode={gameMode}
        action={handlePlayerChoice}
        value={"scissors"}
      />
      {/* Rock */}
      <GameButton
        gameMode={gameMode}
        action={handlePlayerChoice}
        value={"rock"}
      />
    </NormalGameChoiceWrapper>
  );
}
