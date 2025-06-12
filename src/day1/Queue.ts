// export default class Queue<T> {
//     public length: number;
//     constructor() {}
//     enqueue(item: T): void {}
//     deque(): T | undefined {}
//     peek(): T | undefined {}
// }

// The exercise is to implement a Queue where the first element added is the first one to be removed (FIFO).
// also known as a First In First Out (FIFO) data structure.
// Definition: A queue is a collection of elements that supports two main operations: enqueue (adding an element to the end) and dequeue (removing an element from the front). It follows the FIFO principle, meaning the first element added is the first one to be removed.
// A queue is often used in scenarios where you need to manage tasks or requests in the order they arrive, such as in scheduling algorithms, print queues, or breadth-first search algorithms.
// O(n) time complexity for most operations, O(1) for prepend and append, O(1) space complexity.
// Usage: npx jest Queue

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = new Node(item); // = {value: item, next: undefined} as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    const head = this.head; // Save the current head to return its value
    
    // Move the head pointer to the next node
    this.head = this.head.next;
    head.next = undefined; // Clear the next pointer of the old head
    this.length--;

    if (this.length === 0) this.tail = undefined;

    return value;  
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

class Node<T> {
  value: T;
  next?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}
