export const fisherYatesShuffle = <T>(arr: T[]) => {
  const random: T[][] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    random.push(arr);
  }
  return random;
};
