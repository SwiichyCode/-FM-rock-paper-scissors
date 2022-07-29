import React from "react";
import { GameInformationsWrapper } from "./GameInformations.style";

export default function GameInformations({ score, winrate, gameMode }) {
  return (
    <GameInformationsWrapper>
      <ul>
        <li>
          [Mode] : <span>{gameMode}</span>
        </li>
        <li className="score">
          [Score] : <span>-Player: {score.player}</span>
          <span>-Computer: {score.computer}</span>
        </li>
        <li>[Winrate] : {winrate}%</li>
      </ul>
    </GameInformationsWrapper>
  );
}
