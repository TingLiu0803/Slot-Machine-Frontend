"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import { InfoModal } from "../views/view_groups/InfoModal";
import { TutorialModalHandlers } from "../controllers/SlotMachineController";
import { GameSetting } from "../db/slot_machine_db";

type ButtonGroupLayout = {
  tutorialmodalHandlers: TutorialModalHandlers;
  gameSetting: GameSetting;
  buttonOne?: React.ReactElement;
  buttonTwo?: React.ReactElement;
};

export const ButtonGroupLayout: React.FC<ButtonGroupLayout> = ({
  tutorialmodalHandlers,
  gameSetting,
  buttonOne,
  buttonTwo,
}) => {
  return (
    <Stack direction="row" spacing={2} className="items-center">
      {buttonOne}
      {buttonTwo}
      <InfoModal
        open={tutorialmodalHandlers.isTutorialOpen}
        onClose={() => tutorialmodalHandlers.handleCloseTutorialModal()}
        gameSetting={gameSetting}
      />
    </Stack>
  );
};
