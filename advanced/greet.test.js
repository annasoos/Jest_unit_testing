const greet = require("./greet");

 /* beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 8, 16, 9, 0));
});

afterAll(() => {
  jest.useRealTimers();
});  */

const mockDate1 = new Date(2021, 8, 16, 9, 0)
const mockDate2 = new Date(2021, 8, 16, 18, 0)
const mockDate3 = new Date(2021, 8, 16, 10, 0)

// isMorning 

test('should console log "Heyho!"', () => {
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate1)

  console.log = jest.fn(); //create a mock function
  greet(29)
  expect(console.log).toHaveBeenCalledWith("Heyho!")
});

test('should console log "Good morning"', () => {
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate1)

  console.log = jest.fn();
  greet(30)
  expect(console.log).toHaveBeenCalledWith("Good morning")
});

//isEvening

test('should console log "Hello..."', () => {
  console.log = jest.fn();
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate2)

  greet(29)
  expect(console.log).toHaveBeenCalledWith("Hello...")
});

test('should console log "Good evening"', () => {
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate2)

  console.log = jest.fn();
  greet(30)
  expect(console.log).toHaveBeenCalledWith("Good evening")
});

//else

test('should console log "Hi"', () => {
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate3)

  console.log = jest.fn();
  greet(29)
  expect(console.log).toHaveBeenCalledWith("Hi")
});

test('should console log "Good day"', () => {
  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate3)
  
  console.log = jest.fn();
  greet(30)
  expect(console.log).toHaveBeenCalledWith("Good day")
});