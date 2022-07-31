import React, { useCallback, useEffect, useState } from "react";
import { Modal, Switch } from "@mui/material";
import { GameParamsWrapper, Params } from "./GameParams.style";

export default function GameParams({ gameMode, setGameMode }) {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      return setGameMode("hardcore");
    } else {
      return setGameMode("normal");
    }
  }, [setGameMode, isActive]);

  return (
    <GameParamsWrapper>
      <button onClick={handleOpen}>Params</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Params>
          <Switch onChange={handleChange} /> / Mode: {gameMode}
        </Params>
      </Modal>
    </GameParamsWrapper>
  );
}
