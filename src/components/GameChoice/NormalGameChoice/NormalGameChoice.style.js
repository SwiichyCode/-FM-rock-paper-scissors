import styled from "styled-components";
import GameChoicePattern from "../../../assets/bg-triangle.svg";
import Paper from "../../../assets/icon-paper.svg";
import Scissors from "../../../assets/icon-scissors.svg";
import Rock from "../../../assets/icon-rock.svg";
import Lizard from "../../../assets/icon-lizard.svg";
import Spock from "../../../assets/icon-spock.svg";

export const NormalGameChoiceWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 476px;
  height: 430px;
  background-image: url(${GameChoicePattern});
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 64px;
`;

export const BtnWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  width: 198px;
  height: 203px;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: initial;

  &.btnWrapper-paper {
    left: 0;
    background: #2a45c2;
  }
  &.btnWrapper-scissors {
    right: 0;
    background: #c76c1b;
  }
  &.btnWrapper-rock {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
    background: #babfd4;
    border-radius: 50%;
  }

  .btn {
    position: relative;
    width: 152px;
    height: 144px;
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
  }
  .btn-scissors {
    background-image: url(${Scissors});
  }
  .btn-rock {
    background-image: url(${Rock});
  }
  .btn-lizard {
    background-image: url(${Lizard});
  }
  .btn-spock {
    background-image: url(${Spock});
  }
`;
