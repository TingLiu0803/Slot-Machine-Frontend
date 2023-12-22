"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import { InfoModal } from "../views/view_groups/InfoModal";
import {
  GameHandlers,
  TutorialModalHandlers,
} from "../controllers/SlotMachineController";
import { GameSetting } from "../db/slot_machine_db";

type ButtonGroupLayout = {
  tutorialmodalHandlers: TutorialModalHandlers;
  gameHandlers: GameHandlers;
  gameSetting: GameSetting;
};

export const ButtonGroupLayout: React.FC<ButtonGroupLayout> = ({
  tutorialmodalHandlers,
  gameHandlers,
  gameSetting,
}) => {
  return (
    <Stack direction="row" spacing={2} className="items-center">
      <Button
        variant="contained"
        size="large"
        color="success"
        className="bg-green-900"
        onClick={() => {
          if (gameSetting.tokenCount >= 10) {
            gameHandlers.onClickPlay();
          }
          if (gameSetting.tokenCount < 10) {
            window.location.reload();
          }
        }}
      >
        {gameSetting.tokenCount >= 10 ? "Play!" : "Start Over?"}
      </Button>
      <Button variant="contained" disabled className="bg-yellow-900">
        <span>
          <StarIcon color="action" />
        </span>
        <span className="text-center text-lg px-2 pt-0.5">
          {gameSetting.tokenCount}
        </span>
      </Button>
      <InfoModal
        open={tutorialmodalHandlers.isTutorialOpen}
        onClose={() => tutorialmodalHandlers.handleCloseTutorialModal()}
        gameSetting={gameSetting}
      />
    </Stack>
  );
};
