import styled from "styled-components";
import Paper from "../../assets/icon-paper.svg";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Lizard from "../../assets/icon-lizard.svg";
import Spock from "../../assets/icon-spock.svg";

export const GameButtonWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  width: ${({ gameMode }) => (gameMode === "normal" ? `198px` : `145px`)};
  height: ${({ gameMode }) => (gameMode === "normal" ? `203px` : `148px`)};
  border-radius: 50%;
  cursor: pointer;
  box-sizing: initial;

  &.btnWrapper-paper {
    top: ${({ gameMode }) => (gameMode === "normal" ? `initial` : `100px`)};
    left: ${({ gameMode }) => (gameMode === "normal" ? `0` : `initial`)};
    right: ${({ gameMode }) => (gameMode === "normal" ? `initial` : `0`)};
    background: #2a45c2;
  }
  &.btnWrapper-scissors {
    top: ${({ gameMode }) => (gameMode === "normal" ? `initial` : `0`)};
    left: ${({ gameMode }) => (gameMode === "normal" ? `initial` : `50%`)};
    right: ${({ gameMode }) => (gameMode === "normal" ? `0` : `initial`)};
    transform: ${({ gameMode }) =>
      gameMode === "normal" ? `initial` : `translateX(-50%)`};
    background: #c76c1b;
  }
  &.btnWrapper-rock {
    bottom: 0;
    left: ${({ gameMode }) => (gameMode === "normal" ? `50%` : `initial`)};
    right: ${({ gameMode }) => (gameMode === "normal" ? `initial` : `50px`)};
    transform: ${({ gameMode }) =>
      gameMode === "normal" ? `translateX(-50%)` : `initial`};
    background: #9d1634;
  }
  &.btnWrapper-lizard {
    bottom: 0;
    left: 50px;
    background: #5f37a8;
  }
  &.btnWrapper-spock {
    left: 0;
    top: 100px;
    background: #2d8dab;
  }

  .content-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 198px;
    height: 194px;
    width: ${({ gameMode }) => (gameMode === "normal" ? `198px` : `145px`)};
    height: ${({ gameMode }) => (gameMode === "normal" ? `194px` : `141.44px`)};
    border-radius: 50%;
  }

  .paper-bg {
    background: #4664f4;
  }
  .scissors-bg {
    background: #eb9f0e;
  }
  .rock-bg {
    background: #db2e4d;
  }
  .lizard-bg {
    background: #834ee3;
  }
  .spock-bg {
    background: #3fb7cd;
  }

  .shadow-btn {
    display: flex;
    align-items: flex-end;
    width: 152px;
    height: 152px;
    width: ${({ gameMode }) => (gameMode === "normal" ? `152px` : `112px`)};
    height: ${({ gameMode }) => (gameMode === "normal" ? `152px` : `111px`)};
    background: #babfd4;
    border-radius: 50%;
  }

  .btn {
    position: relative;
    width: 152px;
    height: 144px;
    width: ${({ gameMode }) => (gameMode === "normal" ? `152px` : `111.31px`)};
    height: ${({ gameMode }) => (gameMode === "normal" ? `144px` : `104.99px`)};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 2;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 73px 86px;
  }

  .btn-paper {
    background-image: url(${Paper});
    background-size: ${({ gameMode }) =>
      gameMode === "normal" ? `67.21px 80px` : `54px 63px`};
  }
  .btn-scissors {
    background-image: url(${Scissors});
    background-size: ${({ gameMode }) =>
      gameMode === "normal" ? `60px 80px` : `50px 58px`};
  }
  .btn-rock {
    background-image: url(${Rock});
    background-size: ${({ gameMode }) =>
      gameMode === "normal" ? `64px` : `55px 55px`};
  }

  .btn-lizard {
    background-image: url(${Lizard});
    background-size: ${({ gameMode }) =>
      gameMode === "normal" ? `auto` : `61.52px 59.78px`};
  }
  .btn-spock {
    background-image: url(${Spock});
    background-size: ${({ gameMode }) =>
      gameMode === "normal" ? `auto` : `44px 59px`};
  }
`;
