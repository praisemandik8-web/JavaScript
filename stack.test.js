const Stack = require('./stack');

test('stack is empty after initialization', () => {
  const myStack = new Stack();
  expect(myStack.isEmpty()).toBe(true);
});
test('push adds an element to the stack', () => {
  const myStack = new Stack();
  myStack.push(1);
  expect(myStack.isEmpty()).toBe(false);
});

test('push adds an element to the top of the stack', () => {
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  expect(myStack.peek()).toBe(2); // The top element should be the last pushed element
});

test('pop removes and returns the top element from the stack', () => {
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  expect(myStack.pop()).toBe(2); // The top element should be the last pushed element
  expect(myStack.peek()).toBe(1); // After popping, the new top should be the previous element

});     

test('peek returns the top element without removing it', () => {
  const myStack = new Stack();
  myStack.push(1);
  expect(myStack.peek()).toBe(1);
  expect(myStack.isEmpty()).toBe(false); // Ensure the stack is not empty after peek
});

test('size returns the number of elements in the stack', () => {
  const myStack = new Stack();
  expect(myStack.size()).toBe(0); // Initially, the stack should be empty
  myStack.push(1);
  myStack.push(2);
  expect(myStack.size()).toBe(2); // After pushing two elements, size should be 2
});

test('clear removes all elements in the stack', () => {
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.clear();
  expect(myStack.isEmpty()).toBe(true); // After clearing, the stack should be empty
});

test('value returns all values in the stack', () => {
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  expect(myStack.value()).toEqual([1, 2, 3]); // The value should return all elements in the stack
});
