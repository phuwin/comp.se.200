import add from '../src/add';

// Test add first number is positive and second number is positive
test('add first number is positive and second number is positive', () => {
  expect(add(1, 1)).toBe(2);
});

// Test add first number is positive and second number is negative
test('add first number is positive and second number is negative', () => {
  expect(add(1, -1)).toBe(0);
});

// Test add first number is negative and second number is positive
test('add first number is negative and second number is positive', () => {
  expect(add(-1, 1)).toBe(0);
});

// Test add first number is negative and second number is negative
test('add first number is negative and second number is negative', () => {
  expect(add(-1, -1)).toBe(-2);
});

// Test add first number is positive and second number is zero
test('add first number is positive and second number is zero', () => {
  expect(add(1, 0)).toBe(1);
});

// Test add first number is negative and second number is zero
test('add first number is negative and second number is zero', () => {
  expect(add(-1, 0)).toBe(-1);
});

// Test add first number is zero and second number is positive
test('add first number is zero and second number is positive', () => {
  expect(add(0, 1)).toBe(1);
});

// Test add first number is zero and second number is negative
test('add first number is zero and second number is negative', () => {
  expect(add(0, -1)).toBe(-1);
});

// Test add first number is zero and second number is zero
test('add first number is zero and second number is zero', () => {
  expect(add(0, 0)).toBe(0);
});

// Test add 2 strings and return failed if not a number
test('add 2 strings and return failed if not a number', () => {
  expect(add('a', 'b')).toThrow();
});

// Test add first number is string and second number is number
test('add first number is string and second number is number', () => {
  expect(add('a', 1)).toThrow();
});

// Test add first number is number and second number is string
test('add first number is number and second number is string', () => {
  expect(add(1, 'a')).toThrow();
});

// Test add undefined and undefined, return failed if not a number
test('add undefined and undefined', () => {
  expect(add(undefined, undefined)).toThrow();
});

// Test add undefined and 1, return failed if not a number
test('add undefined and 1', () => {
  expect(add(undefined, 1)).toThrow();
});

// Test add 1 and undefined, return failed if not a number
test('add 1 and undefined', () => {
  expect(add(1, undefined)).toThrow();
});

// Test add null and null, return failed if not a number
test('add null and null', () => {
  expect(add(null, null)).toThrow();
});

// Test add null and 1, return failed if not a number
test('add null and 1', () => {
  expect(add(null, 1)).toThrow();
});

// Test add 1 and null, return failed if not a number
test('add 1 and null', () => {
  expect(add(1, null)).toThrow();
});

// Test add empty string and empty string, return failed if not a number
test('add empty string and empty string', () => {
  expect(add('', '')).toThrow();
});













