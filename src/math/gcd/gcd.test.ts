import { gcdIteration, gcdRecursion } from "./gcd";

test("gcdIteration", () => {
  const x = 12;
  const y = 18;
  const result = gcdIteration(x, y);
  expect(result).toBe(6);
});

test("gcdRecursion", () => {
  const x = 210;
  const y = 45;
  const result = gcdRecursion(x, y);
  expect(result).toBe(15);
});
