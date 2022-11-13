import slice from '../src/slice';

// pairwise tests
test('slice with undefined', () => {
  expect(slice(undefined, 4, 4)).toEqual([]);
  expect(slice(undefined, -1, -1)).toEqual([]);
  expect(slice(undefined, undefined, undefined)).toEqual([]);
  expect(slice(undefined, 5, 5)).toEqual([]);
  expect(slice(undefined, 5, 4)).toEqual([]);
  expect(slice(undefined, -5, -1)).toEqual([]);
  expect(slice(undefined, 0, undefined)).toEqual([]);
  expect(slice(undefined, 4, 5)).toEqual([]);
  expect(slice(undefined, -1, 0)).toEqual([]);
});

test('slice with empty array', () => {
  expect(slice([], 4, -1)).toEqual([]);
  expect(slice([], -1, undefined)).toEqual([]);
  expect(slice([], undefined, 5)).toEqual([]);
  expect(slice([], -5, 0)).toEqual([]);
  expect(slice([], 0, 4)).toEqual([]);
  expect(slice([], 5, 4)).toEqual([]);
  expect(slice([], -5, -1)).toEqual([]);
  expect(slice([], 0, undefined)).toEqual([]);
  expect(slice([], 4, 5)).toEqual([]);
  expect(slice([], -1, 0)).toEqual([]);
});

test('slice with normal array', () => {
  expect(slice([1,2,3,4], -1, 5)).toEqual([4]);
  expect(slice([1,2,3,4], undefined, 0)).toEqual([]);
  expect(slice([1,2,3,4], 5, 0)).toEqual([]);
  expect(slice([1,2,3,4], -5, 4)).toEqual([1,2,3,4]);
  expect(slice([1,2,3,4], 0, -1)).toEqual([1,2,3]);
  expect(slice([1,2,3,4], 4, undefined)).toEqual([]);
  expect(slice([1,2,3,4], -5, 5)).toEqual([1,2,3,4]);
  expect(slice([1,2,3,4], 0, 0)).toEqual([]);
  expect(slice([1,2,3,4], 4, 0)).toEqual([]);
  expect(slice([1,2,3,4], -1, 4)).toEqual([4]);
  expect(slice([1,2,3,4], null, -1)).toEqual([1,2,3]);
  expect(slice([1,2,3,4], 5, null)).toEqual([]);
});










