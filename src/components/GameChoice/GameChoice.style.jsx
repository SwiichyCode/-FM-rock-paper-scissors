import styled from "styled-components";
import GameChoicePattern from "../../assets/bg-triangle.svg";

export const GameChoiceWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 476px;
  height: 430px;
  background-image: url(${GameChoicePattern});
  background-repeat: no-repeat;
  background-position: center center;

  .shadow-box {
    position: absolute;
    width: 198px;
    height: 203px;
    border-radius: 50%;
    cursor: pointer;

    &:nth-child(1) {
      left: 0;
      background: #2a45c2;
    }
    &:nth-child(2) {
      right: 0;
      background: #c76c1b;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #9d1634;
    }
  }

  .content-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 198px;
    height: 194px;
    border-radius: 50%;
  }

  .papper-bg {
    background: #4664f4;
  }
  .scissors-bg {
    background: #eb9f0e;
  }
  .rock-bg {
    background: #db2e4d;
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
    width: 152px;
    height: 144px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }

  .papper {
    width: 67.21px;
    height: 80px;
    transform: rotate(-4deg);
  }
  .scissors {
    width: 60.21px;
    height: 80px;
  }
  .rock {
    width: 64px;
    height: 64px;
  }
`;
