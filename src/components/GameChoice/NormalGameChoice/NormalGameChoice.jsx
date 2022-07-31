import React from "react";
import { NormalGameChoiceWrapper, BtnWrapper } from "./NormalGameChoice.style";

export default function NormalGameChoice({ handlePlayerChoice }) {
  return (
    <NormalGameChoiceWrapper>
      {/* Paper  */}
      <BtnWrapper className={"btnWrapper-paper btn-w"}>
        <div className="content-btn paper-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-paper"
              value="paper"
              onClick={handlePlayerChoice}
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
              onClick={handlePlayerChoice}
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
              onClick={handlePlayerChoice}
            ></button>
          </div>
        </div>
      </BtnWrapper>
    </NormalGameChoiceWrapper>
  );
}
