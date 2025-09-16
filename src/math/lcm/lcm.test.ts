import { lcm } from "./lcm";

test("lcm", () => {
  const x = 5;
  const y = 6;
  const result = lcm(x, y);
  expect(result).toBe(30);
});
