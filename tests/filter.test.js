import filter from '../src/filter';

// Test that filter should return an array of all elements predicate returns truthy for 
test('filter should return an array of all elements predicate returns truthy for', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
});

// Test that filter should return an empty array if the predicate returns false for all elements
test('filter should return an empty array if the predicate returns false for all elements', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    expect(filter(users, ({ active }) => !active)).toEqual([]);
});

// Test that filter should return an empty array if the collection is not an array or object
test('filter should return an empty array if the collection is not an array or object', () => {
    expect(filter(1, () => true)).toEqual([]);
});

// Test that filter should return an empty array if the predicate is not a function
test('filter should return an empty array if the predicate is not a function', () => {
    expect(filter([1, 2, 3], 1)).toEqual([]);
});

// Test that filter should return an empty array if the predicate value is not available
test('filter should return an empty array if the predicate value is not available', () => {
    expect(filter([1, 2, 3], () => { })).toEqual([]);
});













