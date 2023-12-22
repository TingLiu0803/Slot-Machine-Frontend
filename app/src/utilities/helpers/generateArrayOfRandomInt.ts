export const generateArrayOfRandomInt = (
  maximumChoicesOfRandom: number,
  numberOfReels: number,
) => {
  return Array.from({ length: numberOfReels }, () =>
    Math.floor(Math.random() * maximumChoicesOfRandom),
  );
};
