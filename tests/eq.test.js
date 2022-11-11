import eq from '../src/eq';

// Test that eq should return true if the two values are equal
test('eq should return true if the two values are equal', () => {
    expect(eq(1, 1)).toEqual(true);
});

// Test that eq should return false if the two values are not equal
test('eq should return false if the two values are not equal', () => {
    expect(eq(1, 2)).toEqual(false);
});














