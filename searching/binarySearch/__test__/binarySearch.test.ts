import binarySearch from "../binarySearch";

test("that the values is found", () => {
  const num = [2, 4, 6, 7, 8, 10];
  const v = 4;
  const index = 1;

  const result = binarySearch(num, v);
  expect(result).toBe(index);
});
