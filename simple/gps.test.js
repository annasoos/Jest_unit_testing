const gps = require("./gps");

test('should return a result close to 1.8', () => {
  const result = gps(6000, [2, 3, 6])
  expect(result).toBeCloseTo(1.8);
});

test('should return 4', () => {
  const result = gps(3600, [1, 3, 7])
  expect(result).toBe(4);
});

test('should return 3', () => {
  const result = gps(3600, [-1, 2, 4])
  expect(result).toBe(3);
});