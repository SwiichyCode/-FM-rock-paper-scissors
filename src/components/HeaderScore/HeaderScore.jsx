import React from "react";
import { HeaderScoreWrapper } from "./HeaderScore.style";

export default function HeaderScore({ score, winrate }) {
  return (
    <HeaderScoreWrapper>
      <h2>
        score{" "}
        <span
          className="winrate"
          style={{ color: winrate > 50 ? "green" : "red" }}
        >
          {score.player || score.computer > 0 ? winrate : 0}%
        </span>
      </h2>
      <span className="score">
        {score.player} / {score.computer}
      </span>
    </HeaderScoreWrapper>
  );
}
