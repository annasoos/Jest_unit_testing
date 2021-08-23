const palindromeChainLength = require("./palindromeChainLength");

test('should be palindrome', () => {
  const result = palindromeChainLength(1)
  expect(result).toBe(0)
});

test('should be palindrome', () => {
  const result = palindromeChainLength(323)
  expect(result).toBe(0)
});

test('should NOT be palindrome', () => {
  const result = palindromeChainLength(10)
  expect(result).toBe(1)
});

test('should NOT be palindrome', () => {
  const result = palindromeChainLength(629)
  expect(result).toBe(4)
});
