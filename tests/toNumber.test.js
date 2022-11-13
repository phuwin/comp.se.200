/**
 * Converts `value` to a number.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
import toNumber from '../src/toNumber';

test('toNumber', () => {
  expect(toNumber(3.2)).toBe(3.2);
  expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  expect(toNumber(Infinity)).toBe(Infinity);
  expect(toNumber('3.2')).toBe(3.2);
});

test('toNumber with NAN', () => {
  expect(toNumber(NaN)).toBe(NaN);
  expect(toNumber('abc')).toBe(NaN);
  expect(toNumber(Symbol.iterator)).toBe(NaN);
  expect(toNumber(undefined)).toBe(NaN);
  expect(toNumber(null)).toBe(0);
  expect(toNumber(true)).toBe(1);
  expect(toNumber(false)).toBe(0);
});

test('toNumber with js object', () => {
  expect(toNumber({})).toBe(NaN);
  expect(toNumber([])).toBe(0);
  expect(toNumber([1])).toBe(1);
  expect(toNumber([1, 2])).toBe(NaN);
  const date = new Date();
  expect(toNumber(date)).toBe(date.valueOf());
});

test('to Number with custom object', () => {
  const obj = {
    valueOf: "string",
  };
  expect(toNumber(obj)).toBe(NaN);
});

test('toNumber with binary values', () => {
  // binray
  expect(toNumber("0b11111111")).toBe(255);
  // octal
  expect(toNumber("0o377")).toBe(255);
  // bad signed hex
  expect(toNumber("-0x1")).toBe(NaN);
});