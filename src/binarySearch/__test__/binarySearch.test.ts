import binarySearch from "../binarySearch";

test("that the value is found", () => {
  const num = [2, 4, 6, 7, 8, 10];
  const v = 6;
  const index = 2;

  const result = binarySearch(num, v);
  expect(result).toBe(index);
});
