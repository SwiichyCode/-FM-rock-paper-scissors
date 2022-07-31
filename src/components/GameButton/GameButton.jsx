import React from "react";
import { GameButtonWrapper } from "./GameButton.style";

export default function GameButton({ gameMode, action, value }) {
  return (
    <GameButtonWrapper className={`btnWrapper-${value}`} gameMode={gameMode}>
      <div className={`content-btn ${value}-bg`}>
        <div className="shadow-btn">
          <button
            className={`btn btn-${value}`}
            value={`${value}`}
            onClick={action}
          ></button>
        </div>
      </div>
    </GameButtonWrapper>
  );
}
