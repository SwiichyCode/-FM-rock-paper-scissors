import React from "react";
import styled from "styled-components";

export default function GameOptions({ children }) {
  return <GameOptionsWrapper>{children}</GameOptionsWrapper>;
}

const GameOptionsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  gap: 1em;

  button {
    border: 1px solid #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #ffffff;
    padding: 11px 36px 10px 37px;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
  }
`;
