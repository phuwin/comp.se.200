import eq from '../src/eq';

// Test that eq should return true if the two values are equal
test('eq should return true if the two values are equal', () => {
  expect(eq(1, 1)).toEqual(true);
});

// Test that eq should return false if the two values are not equal
test('eq should return false if the two values are not equal', () => {
  expect(eq(1, 2)).toEqual(false);
});

// Test that eq should return false if the two values  types are not the same
test('eq should return false if the two values types are not the same', () => {
  expect(eq(1, '1')).toEqual(false);
});

// Test that eq should return true if the two values are NaN
test('eq should return true if the two values are NaN', () => {
  expect(eq(NaN, NaN)).toEqual(true);
});

// Test that eq should return true if the two objects are equal
test('eq should return true if the two objects are equal', () => {
  expect(eq({ a: 1 }, { a: 1 })).toEqual(true);
});

// Test that eq should return false if the two objects are not equal
test('eq should return false if the two objects are not equal', () => {
  expect(eq({ a: 1 }, { a: 2 })).toEqual(false);
});

// Test that eq should return false if comparing an object to a string or number
test('eq should return false if comparing an object to a string or number', () => {
  expect(eq({ a: 1 }, 1)).toEqual(false);
});














