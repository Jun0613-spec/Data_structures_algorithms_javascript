//LIFO
// lookup O(n)
// pop O(1) remove the last item
// push O(1) add an item
// peek O(1) the top of the item

const strings = [];

strings.push("google");
strings.push("udemy");
strings.push("youtube");

console.log(strings);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("Udemy");
myStack.push("youtube");
myStack.pop();

console.log(myStack);
