const set = require('./set');

test('set is empty ', () => {
    const mySet = new Set();
    expect(set.isEmptySet(mySet)).toBe(true);
});

test('add method adds an element to the set if the value is not already present', () => {
    const mySet = new Set();
    set.add(mySet, 11);
    set.add(mySet, 32);
    set.add(mySet, 100);
    expect(mySet.size).toBe(3);
});

test('remove method removes an element from the set if the value is present', () => {
    const mySet = new Set();
    set.add(mySet, 11);
    set.add(mySet, 32);
    set.add(mySet, 100);
    set.add(mySet, 9)


    set.remove(mySet, 32);
    set.remove(mySet, 9);
    expect(mySet.size).toBe(2);
});

test('has method checks if an element is present in the set', () => {
    const mySet = new Set();
    set.add(mySet, 12);
    set.add(mySet, 63);
    set.add(mySet, 0);

    expect(mySet.has(63)).toBe(true);
});

test('size method returns the number of elements in the set', () => {
    const mySet = new Set();
    set.add(mySet, 101);
    set.add(mySet, 11);
    set.add(mySet, 77);
    set.add(mySet, 82);

    expect(mySet.size).toBe(4);
});

test('clear method removes all the elements in the set', () =>{
    const mySet = new Set();
    set.add(mySet, 3);
    set.add(mySet, 7);
    set.add(mySet, 13);
    set.add(mySet, 42);
    set.add(mySet, 39);

    mySet.clear();

    expect(mySet.size).toBe(0);
    expect(set.isEmptySet(mySet)).toBe(true);
});

test('values method returns all elements of the set', () => {
    const mySet = new Set();
    set.add(mySet, 3);
    set.add(mySet, 6);
    set.add(mySet, 9);
    set.add(mySet, 12);

    expect(set.values(mySet)).toEqual([3, 6, 9, 12]);
})
