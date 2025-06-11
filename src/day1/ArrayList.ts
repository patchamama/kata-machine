// export default class ArrayList<T> {
//     public length: number;

//     constructor() {}

//     prepend(item: T): void {}
//     insertAt(item: T, idx: number): void {}
//     append(item: T): void {}
//     remove(item: T): T | undefined {}
//     get(idx: number): T | undefined {}
//     removeAt(idx: number): T | undefined {}
// }

// ArrayList Implementation in TypeScript
// The exercise is to implement an ArrayList where elements can be added, removed, and accessed by index.
// It is a dynamic array that can grow and shrink in size as needed.
// It supports operations like prepend, insert at a specific index, append, remove by value, get by index, and remove at a specific index.
// O(n) time complexity for most operations (queue, dequeue,... search), O(n) space complexity. O(1) to push, pop and peek.
// Usage: npx jest ArrayList


export default class ArrayList<T> {
  public length: number;
  private capacity: number;
  private data: (T | undefined)[];

  constructor(initialCapacity: number = 4) {
    this.length = 0;
    this.capacity = initialCapacity;
    this.data = new Array(this.capacity);
  }

  private resize() {
    this.capacity *= 2;
    const newData: (T | undefined)[] = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      throw new RangeError("Index out of bounds");
    }

    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > idx; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[idx] = item;
    this.length++;
  }

  append(item: T): void {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = item;
    this.length++;
  }

  remove(item: T): T | undefined {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return this.removeAt(i);
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    return this.data[idx];
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined;

    const item = this.data[idx];

    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    this.data[this.length] = undefined; // Clear the removed element

    return item;
  }
}
