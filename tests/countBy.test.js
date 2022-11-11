import countBy from '../src/countBy';

// Test that countBy should return an object with the correct counts
test('countBy should return an object with the correct counts', () => {
    const fruits = [
        { 'type': 'apple', 'color': 'red' },
        { 'type': 'apple', 'color': 'green' },
        { 'type': 'banana', 'color': 'yellow' },
    ];

    expect(countBy(fruits, fruit => fruit.color)).toEqual({
        'red': 1,
        'green': 1,
        'yellow': 1
    });
});

// Test that countBy should failed if the collection is not an array or object
test('countBy should failed if the collection is not an array or object', () => {
    expect(() => countBy('a', 'a')).toThrow();
});

// Test that countBy should failed if the iteratee is not a function 
test('countBy should failed if the iteratee is not a function', () => {
    expect(() => countBy([1, 2, 3], 'a')).toThrow();
});

// Test that countBy should failed if the iteratee value is not available
test('countBy should failed if the iteratee value is not available', () => {
    expect(() => countBy([1, 2, 3], () => { })).toThrow();
});

