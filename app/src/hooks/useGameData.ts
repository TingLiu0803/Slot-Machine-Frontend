"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CardCount,
  ChoicesCount,
  GameSetting,
  slotMachineDB,
} from "../db/slot_machine_db";
import { useSlotMachineLocalData } from "./useSlotMachineLocalData";

// Imitate fetching data from an API
export const useGameData = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // TODO: how to understand what the interface of initial data will look like including the many of cards and choices
  const [data, setData] = useState<GameSetting>({
    cardCount: 3,
    choicesCount: 8,
    tokenCount: 100,
    tokenCostPerPlay: 10,
    minorReward: 25,
    majorReward: 150,
    cardsIndex: [0, 0, 0],
  });

  const onSelectCardNumber = (choice: CardCount) => {
    slotMachineDB.gameSetting.data.cardCount = choice;
    setData({ ...data, cardCount: slotMachineDB.gameSetting.data.cardCount });
  };

  const onSelectVariation = (choice: ChoicesCount) => {
    slotMachineDB.gameSetting.data.choicesCount = choice;
    setData({
      ...data,
      choicesCount: slotMachineDB.gameSetting.data.choicesCount,
    });
  };

  const fetchDataAndSetStates = () => {
    setLoading(true);
    setData({ ...slotMachineDB.gameSetting.data });
    setLoading(false);
  };

  useEffect(() => {
    fetchDataAndSetStates();
  }, []);

  useEffect(() => {
    if (!data) {
      setError(true);
    }
  }, [data]);

  const {
    gameSetting,
    isTutorialOpen,
    tokenCount,
    setIsBeforePlay,
    setRandomCardSetIndexes,
    handleCloseTutorialModal,
    handleClickPlay,
    setCardCount,
    setChoicesCount,
  } = useSlotMachineLocalData(data);

  // Handles card pool update to initial icons when change in cardCount, choicesCount, tokenCount
  const handleMutateCardsPoolDB = useCallback(() => {
    if (tokenCount >= 10) {
      setIsBeforePlay(true);
      const cardsIndex = new Array(gameSetting.cardCount).fill(0);
      // mutate db like a POST request
      slotMachineDB.gameSetting.data.cardsIndex = cardsIndex;
      setRandomCardSetIndexes(cardsIndex);
    }
  }, [tokenCount, gameSetting.choicesCount, gameSetting.cardCount]);

  useEffect(() => {
    handleMutateCardsPoolDB();
  }, [data.cardCount, data.choicesCount, data.tokenCount]);

  return {
    apiRawData: { data, error, loading },
    handlers: {
      handleCloseTutorialModal,
      handleClickPlay,
      onSelectCardNumber,
      onSelectVariation,
      setCardCount,
      setChoicesCount,
    },
    localStates: {
      gameSetting,
      isTutorialOpen,
    },
  };
};
