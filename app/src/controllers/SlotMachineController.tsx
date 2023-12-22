"use client";

import { CardCount, ChoicesCount, GameSetting } from "../db/slot_machine_db";
import { useGameData } from "../hooks/useGameData";
import { SlotMachine } from "../views/view_groups/SlotMachine";

export type GameHandlers = {
  onClickPlay: () => void;
  onSelectCardNumber: (value: CardCount) => void;
  onSelectVariation: (value: ChoicesCount) => void;
  setCardCount: (value: CardCount) => void;
  setChoicesCount: (value: ChoicesCount) => void;
};

export type TutorialModalHandlers = {
  isTutorialOpen: boolean;
  handleCloseTutorialModal: () => void;
};

export type SlotMachineController = {
  gameSetting: GameSetting;
  gameHandlers: GameHandlers;
  tutorialmodalHandlers: TutorialModalHandlers;
};

export const SlotMachineController: React.FC = () => {
  // API raw data
  const {
    apiRawData: { loading, error },
    localStates: { isTutorialOpen, gameSetting },
    handlers: {
      handleClickPlay,
      handleCloseTutorialModal,
      onSelectCardNumber,
      onSelectVariation,
      setCardCount,
      setChoicesCount,
    },
  } = useGameData();

  /**
   * Simple error handling and loading state due to limited time
   * TODO: implement proper error handling and loading state
   */
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handles for main game content interaction
  const gameHandlers = {
    onClickPlay: handleClickPlay,
    onSelectCardNumber,
    onSelectVariation,
    setCardCount,
    setChoicesCount,
  };

  // Handles for tutorial modal interaction
  const tutorialmodalHandlers = {
    isTutorialOpen: isTutorialOpen,
    handleCloseTutorialModal: handleCloseTutorialModal,
  };

  return (
    <SlotMachine
      gameSetting={gameSetting}
      gameHandlers={gameHandlers}
      tutorialmodalHandlers={tutorialmodalHandlers}
    />
  );
};
