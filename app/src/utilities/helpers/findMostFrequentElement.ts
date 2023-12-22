export const findMostFrequentElement = (arr: number[]): number[] => {
  if (arr.length === 0) return [];

  const frequencyMap = new Map<number, number>();
  let maxCount = 0;
  let mostFrequentElement = arr[0];

  // Count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    const count = (frequencyMap.get(arr[i]) || 0) + 1;
    frequencyMap.set(arr[i], count);

    // Update the most frequent element and max count
    if (count > maxCount) {
      maxCount = count;
      mostFrequentElement = arr[i];
    }
  }

  // Create an array with the most frequent element repeated maxCount times
  return Array(maxCount).fill(mostFrequentElement);
};
