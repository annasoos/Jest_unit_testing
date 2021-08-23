const monkeyTalk = require("./monkeyTalk");

test('should return Ook.', () => {
  const result = monkeyTalk("")
  expect(result).toBe("Ook.");
});

test('should return Ook.', () => {
  const result = monkeyTalk("Hello")
  expect(result).toBe("Ook.");
});

test('should return Ook eek.', () => {
  const result = monkeyTalk("Hello Anna")
  expect(result).toBe("Ook eek.");
});
