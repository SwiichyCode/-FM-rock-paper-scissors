import React from "react";
import { HeaderWrapper } from "./Header.style";
import LogoNormalMode from "../../assets/logo.svg";
import LogoHardcoreMode from "../../assets/logo-bonus.svg";
import HeaderScore from "../HeaderScore/HeaderScore";

export default function Header({ score, winrate, gameMode }) {
  return (
    <HeaderWrapper>
      {gameMode === "normal" ? (
        <img src={LogoNormalMode} alt="logo" />
      ) : (
        <img src={LogoHardcoreMode} alt="logo" />
      )}

      <HeaderScore score={score} winrate={winrate} />
    </HeaderWrapper>
  );
}
