import React from "react";
import {
  HardcoreGameChoiceWrapper,
  BtnWrapper,
} from "./HardcoreGameChoice.style";

export default function HardcoreGameChoice({ handlePlayerChoice }) {
  return (
    <HardcoreGameChoiceWrapper>
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
      <BtnWrapper className={"btnWrapper-scissors btn-w"}>
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
      <BtnWrapper className={"btnWrapper-rock btn-w"}>
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
      <BtnWrapper className={"btnWrapper-lizard btn-w"}>
        <div className="content-btn lizard-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-lizard"
              value="lizard"
              onClick={handlePlayerChoice}
            ></button>
          </div>
        </div>
      </BtnWrapper>
      <BtnWrapper className={"btnWrapper-spock btn-w"}>
        <div className="content-btn spock-bg">
          <div className="shadow-btn">
            <button
              className="btn btn-spock"
              value="spock"
              onClick={handlePlayerChoice}
            ></button>
          </div>
        </div>
      </BtnWrapper>
    </HardcoreGameChoiceWrapper>
  );
}
