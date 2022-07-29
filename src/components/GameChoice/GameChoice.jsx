import React from "react";
import { GameChoiceWrapper, BtnWrapper } from "./GameChoice.style";

export default function GameChoice({ handlePlayerChoise }) {
  return (
    <GameChoiceWrapper>
      {/* Paper  */}
      <BtnWrapper className={"btnWrapper-paper btn-w"}>
        <div className="content-btn paper-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-paper"
              value="paper"
              onClick={handlePlayerChoise}
            ></button>
          </div>
        </div>
      </BtnWrapper>
      {/* Scissors */}
      <BtnWrapper className={"btnWrapper-scissors"}>
        <div className="content-btn scissors-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-scissors"
              value="scissors"
              onClick={handlePlayerChoise}
            ></button>
          </div>
        </div>
      </BtnWrapper>
      {/* Rock */}
      <BtnWrapper className={"btnWrapper-rock"}>
        <div className="content-btn rock-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-rock"
              value="rock"
              onClick={handlePlayerChoise}
            ></button>
          </div>
        </div>
      </BtnWrapper>
    </GameChoiceWrapper>
  );
}
