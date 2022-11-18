import filter from '../src/filter';

// Test that filter should return an array of all elements predicate returns truthy for 
test('filter should return an array of all elements predicate returns truthy for', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
});

// Test that filter should return an array of all elements predicate returns falsy for
test('filter should return an array of all elements predicate returns falsy for', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    expect(filter(users, ({ active }) => !active)).toEqual[{ 'user': 'fred', 'active': false }];
});

// Test that filter should throw an error if the collection is not an array
test('filter should throw an error if the collection is not an array', () => {
    expect(filter(1, () => true)).toThrowError('The collection is not an array');
});

// Test that filter should throw an error if the predicate is not a function
test('filter should throw an error if the predicate is not a function', () => {
    expect(filter([], 1)).toThrow();
});

// Test that filter should return an empty array if the predicate value is not available
test('filter should return an empty array if the predicate value is not available', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    expect(filter(users, () => {})).toEqual([[]]);
});

// Test that filter should failed if the array is empty
test('filter should failed if the array is empty', () => {
    expect(filter([], () => true)).toEqual([[]]);
});

// Test that filter should failed if the array is null
test('filter should failed if the array is null', () => {
    expect(filter(null, () => true)).toEqual([[]]);
});











