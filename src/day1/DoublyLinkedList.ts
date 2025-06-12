// export default class DoublyLinkedList<T> {
//     public length: number;

//     constructor() {}

//     prepend(item: T): void {}
//     insertAt(item: T, idx: number): void {}
//     append(item: T): void {}
//     remove(item: T): T | undefined {}
//     get(idx: number): T | undefined {}
//     removeAt(idx: number): T | undefined {}
// }

// Doubly Linked List Implementation in TypeScript
// This code provides a doubly linked list implementation with methods to prepend, append, insert at a specific index, remove an item, get an item by index, and remove an item by index.
// Definition: A doubly linked list is a data structure consisting of nodes, where each node contains a value and two pointers: one pointing to the next node and another pointing to the previous node. This allows traversal in both directions (forward and backward) and makes insertion and deletion operations more efficient compared to singly linked lists.
// O(n) time complexity for most operations, O(1) for prepend and append, O(1) space complexity.
// Usage: npx jest DoublyLinkedList 

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = new Node(item);  // = {value: item, prev: undefined, next: undefined} as Node<T>;
    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(item: T): void {
    const node = new Node(item); // = {value: item} as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) throw new RangeError('Index out of bounds');

    if (idx === 0) return this.prepend(item);
    if (idx === this.length) return this.append(item);

    this.length++;

    const node = new Node(item);
    let curr = this.head!;
    for (let i = 0; i < idx; i++) {
      curr = curr.next!;
    }

    node.prev = curr.prev;
    node.next = curr;

    if (curr.prev) curr.prev.next = node;
    curr.prev = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    while (curr) {
      if (curr.value === item) {
        return this.removeNode(curr);
      }
      curr = curr.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    let curr: Node<T> | undefined;
    if (idx < this.length / 2) {
      curr = this.head;
      for (let i = 0; i < idx; i++) curr = curr!.next;
    } else {
      curr = this.tail;
      for (let i = this.length - 1; i > idx; i--) curr = curr!.prev;
    }
    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined;

    let curr: Node<T> | undefined;
    if (idx === 0) {
      curr = this.head;
    } else if (idx === this.length - 1) {
      curr = this.tail;
    } else if (idx < this.length / 2) {
      curr = this.head;
      for (let i = 0; i < idx; i++) curr = curr!.next;
    } else {
      curr = this.tail;
      for (let i = this.length - 1; i > idx; i--) curr = curr!.prev;
    }

    return curr ? this.removeNode(curr) : undefined;
  }

  private removeNode(node: Node<T>): T {
    this.length--;

    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    return node.value;
  }
}

class Node<T> {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}
