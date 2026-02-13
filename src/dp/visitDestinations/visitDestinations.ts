export const dpVisitDestinations = ({
  maxTime,
  destinations,
  ratings,
  times
}: {
  maxTime: number;
  destinations: string[];
  ratings: number[];
  times: number[];
}) => {
  const dp = Array.from({ length: destinations.length + 1 }, () =>
    Array.from({ length: maxTime * 2 + 1 }, () => {
      const el: [number, string] = [0, ""];
      return el;
    })
  );

  for (let i = 1; i < destinations.length + 1; i++) {
    const currentRating = ratings[i - 1];
    const currentTime = times[i - 1];
    for (let j = 1; j < maxTime * 2 + 1; j++) {
      const valueAbove = dp[i - 1][j][0];

      let pick = 0;
      const canFit = currentTime <= j / 2;
      if (canFit) {
        pick = currentRating + dp[i - 1][j - currentTime * 2][0];
      }

      if (valueAbove > pick) {
        dp[i][j][0] = valueAbove;
        dp[i][j][1] += dp[i - 1][j][1];
      } else {
        dp[i][j][0] = pick;
        dp[i][j][1] +=
          destinations[i - 1] + "," + dp[i - 1][j - currentTime * 2][1];
      }
    }
  }
  const res = dp[destinations.length][maxTime * 2][1];
  return res.slice(0, res.length - 1).split(",");
};
