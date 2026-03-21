const maxWeight: number = 4;
const values: number[] = [1500, 3000, 2000];
const weights: number[] = [1, 4, 3];

const len: number = values.length;
const dp: number[][] = Array.from({length: len + 1}, () => {
  return Array(maxWeight + 1).fill(0);
})
console.log("dp", ((): void => {
  for (const row of dp) {
    console.log("row", row);
  }
})());

for (let i: number = 1; i < len + 1; i++) {
  for (let j: number = 1; j < maxWeight + 1; j++) {
    const valueAbove: number = dp[i - 1][j];
    const currValue: number = values[i - 1];

    let take2: number = 0;
    const currWeight: number = weights[i - 1];
    if (j >= currWeight) {
      take2 = currValue + dp[i - 1][j - currWeight];
    }
    dp[i][j] = Math.max(valueAbove, take2);
  }
}

console.log("dp", ((): void => {
  for (const row of dp) {
    console.log("row", row);
  }
})());

const gcd = (a: number, b: number): number => {
  console.log("a", a);
  console.log("b", b);
  if(b === 0) return a;
  const r = a % b;
  a = b;
  b = r;
  return gcd(a, b);
}
const a: number = 18;
const b: number = 12;
console.log("gcd", gcd(a, b));