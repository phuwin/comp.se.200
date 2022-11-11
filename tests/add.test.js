import add from '../src/add';

// add 2 valid numbers
test('add 2 valid numbers', () => {
  expect(add(1, 2)).toBe(3);
});

// add 2 invalid numbers
test('add 2 invalid numbers', () => {
  expect(add('a', 'b')).toBe(NaN);
});

// add first number is valid and second number is invalid
test('add 1 valid number and 1 invalid number', () => {
  expect(add(1, 'b')).toBe(NaN);
});

// add first number is invalid and second number is valid
test('add 1 valid number and 1 invalid number', () => {
  expect(add('b', 1)).toBe(NaN);
});

// add first number is valid and second number is undefined
test('add 1 valid number and 1 undefined number', () => {
  expect(add(1, undefined)).toBe(NaN);
});

// add first number is undefined and second number is valid
test('add 1 undefined number and 1 valid number', () => {
  expect(add(undefined, 1)).toBe(NaN);
});

// add first number is valid and second number is null
test('add 1 valid number and 1 null number', () => {
  expect(add(1, null)).toBe(1);
});

// add first number is null and second number is valid
test('add 1 null number and 1 valid number', () => {
  expect(add(null, 1)).toBe(1);
});

// add first number is valid and second number is empty string
test('add 1 valid number and 1 empty string', () => {
  expect(add(1, '')).toBe(1);
});

// add first number is empty string and second number is valid
test('add 1 empty string and 1 valid number', () => {
  expect(add('', 1)).toBe(1);
});