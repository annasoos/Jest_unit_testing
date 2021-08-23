const declareWinner = require("./declareWinner");

test('should return First Fighter', () => {
	const first = { name: "First Fighter", health: 6, damagePerAttack: 1 }
	const second = { name: "Second Fighter", health: 3, damagePerAttack: 1 }
	const attacker = "First Fighter"

	const winner = declareWinner(first, second, attacker)
	expect(winner).toBe("First Fighter");
});


test('should return First Fighter', () => {
	const first = { name: "First Fighter", health: 2, damagePerAttack: 2 }
	const second = { name: "Second Fighter", health: 3, damagePerAttack: 2 }
	const attacker = "First Fighter"

	const winner = declareWinner(first, second, attacker)
	expect(winner).toBe("Second Fighter");
});


test('should return Second Fighter', () => {
	const first = { name: "First Fighter", health: 3, damagePerAttack: 1 }
	const second = { name: "Second Fighter", health: 5, damagePerAttack: 1 }
	const attacker = "Second Fighter"

	const winner = declareWinner(first, second, attacker)
	expect(winner).toBe("Second Fighter");
});

test('should return First Fighter', () => {
	const first = { name: "First Fighter", health: 100, damagePerAttack: 10 }
	const second = { name: "Second Fighter", health: 100, damagePerAttack: 10 }
	const attacker = "First Fighter"

	const winner = declareWinner(first, second, attacker)
	expect(winner).toBe("First Fighter");
});
