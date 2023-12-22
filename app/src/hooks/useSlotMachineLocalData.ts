"use client";

import { useState, useCallback, useEffect } from "react";
import { findMostFrequentElement } from "../utilities/helpers/findMostFrequentElement";
import { generateArrayOfRandomInt } from "../utilities/helpers/generateArrayOfRandomInt";
import { CardCount, ChoicesCount, GameSetting } from "../db/slot_machine_db";

export const useSlotMachineLocalData = (data: GameSetting) => {
  // Local state
  const [isBeforePlay, setIsBeforePlay] = useState(true);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [tokenCount, setTokenCount] = useState<number>(data.tokenCount);
  const [randomCardSetIndexes, setRandomCardSetIndexes] = useState<number[]>(
    data.cardsIndex,
  );
  const [cardCount, setCardCount] = useState<CardCount>(data.cardCount);
  const [choicesCount, setChoicesCount] = useState<ChoicesCount>(
    data.choicesCount,
  );

  // Minimal game data to function
  // Initial card set get replaced by random card set on click represented as indexes
  // Token count inital data get replaced by tokenCount state
  const gameSetting = {
    ...data,
    cardsIndex: randomCardSetIndexes,
    tokenCount: tokenCount,
    cardCount: cardCount,
    choicesCount: choicesCount,
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
      Math.ceil((randomCardSetIndexes.length * 2) / 3);

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
    gameSetting,
    isTutorialOpen,
    tokenCount,
    handleCloseTutorialModal,
    handleClickPlay,
    setCardCount,
    setChoicesCount,
    setRandomCardSetIndexes,
    setIsBeforePlay,
  };
};
