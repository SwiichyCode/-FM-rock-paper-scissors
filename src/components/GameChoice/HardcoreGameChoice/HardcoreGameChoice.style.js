import styled from "styled-components";
import GameHardcoreChoicePattern from "../../../assets/bg-pentagon.svg";
import Paper from "../../../assets/icon-paper.svg";
import Scissors from "../../../assets/icon-scissors.svg";
import Rock from "../../../assets/icon-rock.svg";
import Lizard from "../../../assets/icon-lizard.svg";
import Spock from "../../../assets/icon-spock.svg";

export const HardcoreGameChoiceWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 476px;
  height: 430px;
  background-image: url(${GameHardcoreChoicePattern});
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 48px;
`;

export const BtnWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  width: 145px;
  height: 148px;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: initial;

  &.btnWrapper-paper {
    right: 0;
    top: 100px;
    background: #2a45c2;
  }
  &.btnWrapper-scissors {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #c76c1b;
  }
  &.btnWrapper-rock {
    bottom: 0;
    right: 50px;
    /* transform: translateX(-50%); */
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
    width: 145px;
    height: 141.44px;
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
    width: 112px;
    height: 111px;
    background: #babfd4;
    border-radius: 50%;
  }

  .btn {
    position: relative;
    width: 111.31px;
    height: 104.99px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 2;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .btn-paper {
    background-image: url(${Paper});
    background-size: 54px;
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
