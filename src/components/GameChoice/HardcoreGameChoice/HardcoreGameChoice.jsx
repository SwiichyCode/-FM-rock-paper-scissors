import React from "react";
import GameButton from "../../GameButton/GameButton";
import { HardcoreGameChoiceWrapper } from "./HardcoreGameChoice.style";

export default function HardcoreGameChoice({ handlePlayerChoice, gameMode }) {
  return (
    <HardcoreGameChoiceWrapper>
      {/* paper */}
      <GameButton
        action={handlePlayerChoice}
        gameMode={gameMode}
        value={"paper"}
      />
      {/* scissors */}
      <GameButton
        action={handlePlayerChoice}
        gameMode={gameMode}
        value={"scissors"}
      />
      {/* rock */}
      <GameButton
        action={handlePlayerChoice}
        gameMode={gameMode}
        value={"rock"}
      />
      {/* lizard */}
      <GameButton
        action={handlePlayerChoice}
        gameMode={gameMode}
        value={"lizard"}
      />
      {/* spock */}
      <GameButton
        action={handlePlayerChoice}
        gameMode={gameMode}
        value={"spock"}
      />
    </HardcoreGameChoiceWrapper>
  );
}
