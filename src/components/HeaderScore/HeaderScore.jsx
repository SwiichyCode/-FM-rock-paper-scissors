import React from "react";
import { HeaderScoreWrapper } from "./HeaderScore.style";

export default function HeaderScore({ score }) {
  return (
    <HeaderScoreWrapper>
      <h2>score</h2>
      <span>{score.player}</span>
    </HeaderScoreWrapper>
  );
}
