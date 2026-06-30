function isEmptySet(set) {
    return set.size === 0;
}

function add(set, element) {
    set.add(element);
}

function remove(set, element) {
    set.delete(element);
}

function has(set, element) {
    return set.has(element);
}

function size(set) {
    return set.size;
}

function values(set) {
    return [...set];
}

const mySet = new Set();
console.log(add(mySet, 4));
console.log(add(mySet, 11));
console.log(remove(mySet, 11));
console.log(has(mySet, 8));
console.log(mySet.size);
console.log(values(mySet));

module.exports = {isEmptySet, add, remove, has, size, values};