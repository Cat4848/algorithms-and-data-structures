/**
 * Largest Common Multiple
 * What is the largest number that
 * is divided by both numbers with no remainder?
 */
export const lcm = (x: number, y: number) => {
  let lcm = x * y;
  const higher = Math.max(x, y);
  for (let i = higher; i < lcm; i++) {
    if (i % x === 0 && i % y === 0) {
      return i;
    }
  }
  return lcm;
};
