import { knapsackProblem } from "./knapsack";

test("if returns the correct result", () => {
  const maxWeight = 4;
  const values = [1500, 3000, 2000];
  const weights = [1, 4, 3];
  const result = knapsackProblem({ maxWeight, values, weights });
  expect(result).toBe(3500);
});
