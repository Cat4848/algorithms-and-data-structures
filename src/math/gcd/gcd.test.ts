import { gcd } from "./gcd";

test("gcd", () => {
  const x = 12;
  const y = 18;
  const result = gcd(x, y);
  expect(result).toBe(6);
});
