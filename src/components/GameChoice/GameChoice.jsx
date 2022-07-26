import React from "react";
import { GameChoiceWrapper } from "./GameChoice.style";
import Papper from "../../assets/icon-paper.svg";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";

export default function GameChoice() {
  return (
    <GameChoiceWrapper>
      <div className="shadow-box">
        <div className="content-btn papper-bg">
          <div className="shadow-btn">
            <button className="btn">
              <img src={Papper} alt="paper" className="papper" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-box">
        <div className="content-btn scissors-bg">
          <div className="shadow-btn">
            <button className="btn">
              <img src={Scissors} alt="scissors" className="scissors" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-box">
        <div className="content-btn rock-bg">
          <div className="shadow-btn">
            <button className="btn">
              <img src={Rock} alt="rock" className="rock" />
            </button>
          </div>
        </div>
      </div>
    </GameChoiceWrapper>
  );
}
