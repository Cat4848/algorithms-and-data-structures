export const knapsackProblem = ({
  maxWeight,
  values,
  weights
}: {
  maxWeight: number;
  values: number[];
  weights: number[];
}) => {
  const itemsLength = values.length;
  const dp = Array.from({ length: itemsLength + 1 }, () =>
    Array(maxWeight + 1).fill(0)
  );
  for (let i = 1; i < itemsLength + 1; i++) {
    const currentValue = values[i - 1];
    const currentWeight = weights[i - 1];
    for (let j = 1; j < maxWeight + 1; j++) {
      const valueAbove = dp[i - 1][j];

      let pick = 0;
      const doesItFit = j - currentWeight >= 0 ? true : false;
      if (doesItFit) {
        const remainingSpace = dp[i - 1][j - currentWeight];
        pick = currentValue + remainingSpace;
      }

      const newValue = Math.max(valueAbove, pick);
      dp[i][j] = newValue;
    }
  }
  return dp[itemsLength][maxWeight];
};
