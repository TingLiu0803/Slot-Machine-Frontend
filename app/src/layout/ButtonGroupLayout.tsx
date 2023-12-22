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
  className?: string;
};

export const ButtonGroupLayout: React.FC<ButtonGroupLayout> = ({
  tutorialmodalHandlers,
  gameSetting,
  buttonOne,
  buttonTwo,
  className = "",
}) => {
  const description = `Deduct ${gameSetting.tokenCostPerPlay} tokens per spin.
  Award ${gameSetting.minorReward} tokens if two third of symbols match;
  Award ${gameSetting.majorReward} tokens if all symbols match.`;

  return (
    <Stack direction="row" spacing={2} className={`items-center ${className}`}>
      {buttonOne}
      {buttonTwo}
      <InfoModal
        open={tutorialmodalHandlers.isTutorialOpen}
        onClose={() => tutorialmodalHandlers.handleCloseTutorialModal()}
        title="How To Win Tokens"
        subtitle="Click 'Play!' to start the game"
        description={description}
      />
    </Stack>
  );
};
