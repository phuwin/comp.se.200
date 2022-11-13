import words from '../src/words';

test('words with undefined', () => {
  expect(words(undefined)).toEqual([]);
});

test('words with empty string', () => {
  expect(words('')).toEqual([]);
});

test('words with normal string', () => {
  expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  expect(words('fred, barney, & pebbles', /cc/g)).toEqual([]);
});