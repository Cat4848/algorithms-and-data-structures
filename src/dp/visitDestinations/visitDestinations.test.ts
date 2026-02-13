import { dpVisitDestinations } from "./visitDestinations";

test("if returns the correct destinations to visit", () => {
  const maxTime = 2;
  const destinations = [
    "Westminster Abbey",
    "Globe Theater",
    "National Gallery",
    "British Museum",
    "St Paul's Cathedral"
  ];
  const ratings = [7, 6, 9, 9, 8];
  const times = [0.5, 0.5, 1, 2, 0.5];
  const correctDestinations = [
    "Westminster Abbey",
    "National Gallery",
    "St Paul's Cathedral"
  ];

  const result = dpVisitDestinations({ maxTime, destinations, ratings, times });
  const resultSet = new Set(result);
  const allIncluded = correctDestinations.every((d) => resultSet.has(d));
  expect(allIncluded).toBe(true);
});
