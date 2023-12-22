// immitate a database for slot machine since it's all frontend and no backend

export type ChoicesCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type CardCount = 1 | 2 | 3 | 4 | 5 | 6;

export type TokenCostPerPlay = 10 | 20 | 30 | 40 | 50;

export type GameSetting = {
  cardCount: CardCount;
  choicesCount: ChoicesCount;
  tokenCount: number;
  tokenCostPerPlay: TokenCostPerPlay;
  minorReward: number;
  majorReward: number;
  cardsIndex: number[];
};

export let slotMachineDB = {
  gameSetting: {
    data: {
      cardCount: 3 as CardCount,
      choicesCount: 8 as ChoicesCount,
      tokenCount: 100,
      tokenCostPerPlay: 10 as TokenCostPerPlay,
      minorReward: 25,
      majorReward: 150,
      cardsIndex: [0, 0, 0],
    },
  },
};
