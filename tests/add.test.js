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

// Test add 2 strings
test('add 2 strings', () => {
  expect(add('a', 'b')).toBe('ab');
});

// Test add 1 string and 1 number
test('add 1 string and 1 number', () => {
  expect(add('a', 1)).toBe('a1');
});

// Test add 1 number and 1 string
test('add 1 number and 1 string', () => {
  expect(add(1, 'a')).toBe('1a');
});

// Test add undefined and undefined, should return default value: 0
test('add undefined and undefined', () => {
  expect(add(undefined, undefined)).toBe(0);
});

// Test add undefined and 1, should return 1
test('add undefined and 1', () => {
  expect(add(undefined, 1)).toBe(1);
});

// Test add 1 and undefined, should return 1
test('add 1 and undefined', () => {
  expect(add(1, undefined)).toBe(1);
});

// Test add null and null, should return default value: 0
test('add null and null', () => {
  expect(add(null, null)).toBe(0);
});

// Test add null and 1, should return 1
test('add null and 1', () => {
  expect(add(null, 1)).toBe(1);
});

// Test add 1 and null, should return 1
test('add 1 and null', () => {
  expect(add(1, null)).toBe(1);
});

// Test add empty string and empty string, should return default value: 0
test('add empty string and empty string', () => {
  expect(add('', '')).toBe('');
});













