const findUnique = require("./findUnique");

test('should return undefined', () => {
  const result = findUnique([])
	console.log("Got an empty array")
  expect(result).toBe(undefined)
});

test('should return the only element', () => {
  const result = findUnique([1])
	console.log("Got only one element")
  expect(result).toBe(1)
});

test('should return 2', () => {
  const result = findUnique([1, 1, 2])
  expect(result).toBe(2)
});

test('should return 2', () => {
  const result = findUnique([1, 2, 1])
  expect(result).toBe(2)
});