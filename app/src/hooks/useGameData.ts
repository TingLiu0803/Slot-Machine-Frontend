"use client";

import { useCallback, useEffect, useState } from "react";
import { GameSetting, slotMachineDB } from "../db/slot_machine_db";
import { generateArrayOfRandomInt } from "../utilities/helpers/generateArrayOfRandomInt";
import { findMostFrequentElement } from "../utilities/helpers/findMostFrequentElement";

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

  useEffect(() => {
    setLoading(true);
    setData(slotMachineDB.gameSetting.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!data) {
      setError(true);
    }
  }, [data]);

  // Local state
  const [isBeforePlay, setIsBeforePlay] = useState(true);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [tokenCount, setTokenCount] = useState<number>(data.tokenCount);
  const [randomCardSetIndexes, setRandomCardSetIndexes] = useState<number[]>(
    data.cardsIndex,
  );

  // Minimal game data to function
  // Initial card set get replaced by random card set on click represented as indexes
  // Token count inital data get replaced by tokenCount state
  const gameSetting = {
    ...data,
    cardsIndex: randomCardSetIndexes,
    tokenCount: tokenCount,
  };
  // Local state handlers
  const handleCloseTutorialModal = useCallback(() => {
    setIsTutorialOpen(!isTutorialOpen);
  }, [isTutorialOpen]);

  // Handles what happens after play button click
  const handleClickPlay = useCallback(() => {
    if (tokenCount >= 10) {
      const cardsIndex = generateArrayOfRandomInt(
        gameSetting.choicesCount,
        gameSetting.cardCount,
      );
      setRandomCardSetIndexes(cardsIndex);
    }
  }, [tokenCount, gameSetting.choicesCount, gameSetting.cardCount]);

  // Handles token calculation
  const handleTokenCalculation = () => {
    // handle initial state
    if (isBeforePlay) {
      setIsBeforePlay(false);
      return;
    }

    const areAllIndexesSame = randomCardSetIndexes.every(
      (index) => index === randomCardSetIndexes[0],
    );

    const isLongestSameIndexGreaterThanTwoThirdOfRandomCardSetIndexes =
      findMostFrequentElement(randomCardSetIndexes).length >=
      Math.floor((randomCardSetIndexes.length * 2) / 3);

    // if randomCardSetIndexes gets two third of the same indexes, it means the player wins minor
    // if randomCardSetIndexes gets all same indexes, it means the player wins major
    // minor plus data.minorReward
    // major plus data.majorReward
    if (areAllIndexesSame) {
      setTokenCount(
        () => tokenCount + gameSetting.majorReward - data.tokenCostPerPlay,
      );
    } else if (isLongestSameIndexGreaterThanTwoThirdOfRandomCardSetIndexes) {
      setTokenCount(
        () => tokenCount + gameSetting.minorReward - data.tokenCostPerPlay,
      );
    } else {
      setTokenCount(() => tokenCount - data.tokenCostPerPlay);
    }
  };

  useEffect(() => {
    handleTokenCalculation();
  }, [randomCardSetIndexes]);

  return {
    apiRawData: { data, error, loading },
    handlers: {
      handleCloseTutorialModal,
      handleClickPlay,
    },
    localStates: {
      gameSetting,
      isTutorialOpen,
    },
  };
};
