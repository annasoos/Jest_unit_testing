const uniqueInOrder = require("./uniqueInOrder");

test('should return empty array', () => {
	const result = uniqueInOrder([])
	expect(result).toStrictEqual([]);
});

test('should return all elements', () => {
	const result = uniqueInOrder([1, 2, 3])
	expect(result).toContain(1, 2, 3);
});

test('should return 1, 2, 3', () => {
	const result = uniqueInOrder([1, 2, 3, 3, 3])
	expect(result).toContain(1, 2, 3);
});

test('should return 1, 2', () => {
	const result = uniqueInOrder([1, 2, 2, 2, 2])
	expect(result).toContain(1, 2);
});


