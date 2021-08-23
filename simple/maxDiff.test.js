const maxDiff = require("./maxDiff");

test('should return 0', () => {
  const result = maxDiff([])
  expect(result).toBe(0);
});

test('should return 0', () => {
  const result = maxDiff([1])
  expect(result).toBe(0);
});

test('should return 2', () => {
  const result = maxDiff([1, 2, 3])
  expect(result).toBe(2);
});

test('should return 10', () => {
  const result = maxDiff([2, 0, 10, 6, 9])
  expect(result).toBe(10);
});
