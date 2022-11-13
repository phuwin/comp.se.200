import map from '../src/map.js';
import jest from 'jest-mock';

// check that map function is run
test('map function is run', () => {
  const mockCallback = jest.fn(x => 420 + x);
  map([0], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(1);
});

// should throw error when map function is not a function
test('should throw error when map function is not a function', () => {
  expect(() => map([0], 420)).toThrow();
});

// Test map 1 number
test('map number', () => {
  expect(map([1], (n) => n * n)).toEqual([1]);
});

// Test map 1 string
test('map string', () => {
  expect(map(['a'], (n) => n + n)).toEqual(['aa']);
});

// Test map 1 boolean
test('map boolean', () => {
  expect(map([true], (n) => !n)).toEqual([false]);
});

test('empty array', () => {
  expect(map([], (n) => n)).toEqual([]);
});

test('no array', () => {
  expect(map(undefined, (n) => n)).toEqual([]);
});



