/**
 * Greatest Common Divisor or 2 numbers
 * What is the greatest number that divides
 * both x and y with no remainder?
 */
export const gcdIteration = (x: number, y: number) => {
  const lower = Math.min(x, y);
  let gcd = 1;
  for (let i = 2; i <= lower; i++) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

export const gcdRecursion = (x: number, y: number): number => {
  if (y === 0) return x;
  return gcdRecursion(y, x % y);
};
