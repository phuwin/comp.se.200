import get from '../src/get';

const defaultVal = "default";

test('get object and path as string', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
  expect(get(object, 'a[0].b.c')).toBe(3);
});

test('get object and path as array', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
  expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
});

test('get object and path default value', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
  expect(get(object, 'a.b.c', defaultVal)).toBe(defaultVal);
});

test('get object null should return default', () => {
  expect(get(null, '', defaultVal)).toBe(defaultVal);
});

test('path null, return default', () => {
  expect(get({}, '', defaultVal)).toBe(defaultVal);
});

test('path empty array, return default', () => {
  expect(get({}, [], defaultVal)).toBe(defaultVal);
});

test('path empty string, return default', () => {
  expect(get({}, '', defaultVal)).toBe(defaultVal);
});
