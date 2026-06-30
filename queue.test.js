const Queue = require('./queue');

test('queue is empty after initialization', () => {
    const myQueue = new Queue();
    expect(myQueue.isEmpty()).toBe(true);
});

test('enqueue adds an element to the queue', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    expect(myQueue.isEmpty()).toBe(false);
})

test('front returns the first element in the queue without removing it', () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    expect(myQueue.front()).toBe(1);
});

test('rear returns the last element in the queue without removing it', () => {
    const myQueue = new Queue();
    myQueue.enqueue(10);
    myQueue.enqueue(30);
    myQueue.enqueue(11);
    expect(myQueue.rear()).toBe(11);        

})

test('size returns the number of elements in the queue', () => {
    const myQueue = new Queue();
    expect(myQueue.size()).toBe(0); 
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    expect(myQueue.size()).toBe(2); 
});