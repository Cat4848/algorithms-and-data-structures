export const gcd = (x: number, y: number) => {
  const lower = Math.min(x, y);
  let gcd = 1;
  for (let i = 2; i <= lower; i++) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
