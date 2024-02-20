// FIFO
// lookup O(n)
// enqueue O(1) add an item
// dequeue O(1) remove the first item
// peek O(1) the top of the item

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) return null;

    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue);
