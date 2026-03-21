const climbStairs = (n: number, m: number = 0): number => {
  if (m === n || m === n - 1) return 1;
  return climbStairs(n, m + 1) + climbStairs(n, m + 2);
}
const res: number = climbStairs(3);