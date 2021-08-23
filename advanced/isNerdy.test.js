const isNerdy = require("./isNerdy");
global.console.log = jest.fn();

//success

test("success type", async () => {
	fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve({ type: "success", categories: ["nerdy"] })})); 

	const result = await isNerdy();
	expect(result).toBe(true)
}); 

test("success type", async () => {
	fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve({ type: "success", categories: ["test"] })})); 

	const result = await isNerdy();
	expect(result).toBe(false)
}); 

//nosuchquote

test("NoSuchQuoteException type", async () => {

	fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve({ type: "NoSuchQuoteException" }),
		})
	);

	const result = await isNerdy();
	expect(result).toBeNull()
});

//unknown

test("unknown type", async () => {

	fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve({ type: "unknown"})})); 

	const result = await isNerdy();
	expect(Promise.reject("Unknown type"));
	expect(console.log).toHaveBeenCalledWith("unknown");
});

//catch error

test("catch error", async () => {

	fetch = jest.fn(() => Promise.reject("API is down"));
	
	const result = await isNerdy();
	expect(result).toBeNull();
	expect(console.log).toHaveBeenCalledWith("API is down");
});