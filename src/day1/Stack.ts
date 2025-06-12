// export default class Stack<T> {
//     public length: number;
//     constructor() {}
//     push(item: T): void {}
//     pop(): T | undefined {}
//     peek(): T | undefined {}
// }

// Stack Implementation in TypeScript
// The exercise is to implement a Stack where the last element added is the first one to be removed (LIFO).
// also known as a Last In First Out (LIFO) data structure.
// Definition: A stack is a collection of elements that supports two main operations: push (adding an element to the top) and pop (removing the top element). It follows the LIFO principle, meaning the last element added is the first one to be removed.
// A stack is often used in scenarios where you need to manage function calls, undo operations, or backtracking algorithms.
// O(n) time complexity for most operations, O(1) for push and pop, O(1) space complexity.
// Usage: npx jest Stack


export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = new Node(item); // = {value: item} as Node<T>;
    this.length++;

    node.next = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;  // this.length = Math.max(0, this.length); // Ensure length doesn't go negative
      if (this.length === 0) {
          this.head = undefined; // Clear head if stack is empty
      }

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
