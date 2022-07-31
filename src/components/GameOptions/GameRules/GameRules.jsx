import React, { useState } from "react";
import { Modal } from "@mui/material";
import { GameRulesWrapper, Rules } from "./GameRules.style";
import rulesImg from "../../../assets/image-rules.svg";
import iconClose from "../../../assets/icon-close.svg";

export default function GameRules() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <GameRulesWrapper>
      <button onClick={handleOpen}>rules</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Rules>
          <div className="header-rules">
            <h1>RULES</h1>
            <img src={iconClose} alt="close" onClick={handleClose} />
          </div>
          <img src={rulesImg} alt="rules" />
        </Rules>
      </Modal>
    </GameRulesWrapper>
  );
}
