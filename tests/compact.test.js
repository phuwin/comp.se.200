import compact from '../src/compact';

// Test that compact should not remove any values if there are no falsey values
test('compact should not remove any values if there are no falsey values', () => {
    expect(compact([1, 2, 3])).toEqual(
        expect.arrayContaining([1, 2, 3])
    );
});

// Test that compact should remove all falsey values from an array
test('compact should remove all falsey values from an array', () => {
    expect(compact([0, 1, false, 2, 3, "4", 'string'])).toEqual(
        expect.arrayContaining([1, 2, 3, "4", 'string'])
    );
});

// Test that compact should return an empty array if the input array is empty
test('compact should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
});

// Test that compact should return an empty array if the input array is null
test('compact should return an empty array if the input array is null', () => {
    expect(compact(null)).toEqual([]);
});

// Test that compact should return an empty array if the input array is undefined
test('compact should return an empty array if the input array is undefined', () => {
    expect(compact(undefined)).toEqual([]);
});
















