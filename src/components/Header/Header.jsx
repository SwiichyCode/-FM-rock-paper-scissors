import React from "react";
import { HeaderWrapper } from "./Header.style";
import Logo from "../../assets/logo.svg";
import HeaderScore from "../HeaderScore/HeaderScore";

export default function Header({ score, winrate, gameMode }) {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo" />
      <HeaderScore score={score} winrate={winrate} />
    </HeaderWrapper>
  );
}
