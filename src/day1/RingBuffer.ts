// A simple ring buffer implementation in TypeScript
// O(n) time complexity for most operations, O(1) for push and pop, O(1) space complexity.

// TODO: Add tests for the RingBuffer class and when the buffer is full, increase the array capacity (create a copy... )


export default class RingBuffer<T> {
  private buffer: (T | undefined)[];
  private head: number = 0;
  private tail: number = 0;
  private full: boolean = false;

  constructor(private readonly capacity: number) {
    if (capacity <= 0) throw new Error("Capacity must be greater than 0");
    this.buffer = new Array(capacity);
  }

  public push(item: T): void {
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;

    if (this.full) {
      // overwrite head
      this.head = (this.head + 1) % this.capacity;
    } else if (this.tail === this.head) {
      this.full = true;
    }
  }

  public pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    const item = this.buffer[this.head];
    this.buffer[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this.full = false;

    return item;
  }

  public peek(): T | undefined {
    return this.isEmpty() ? undefined : this.buffer[this.head];
  }

  public isEmpty(): boolean {
    return !this.full && this.head === this.tail;
  }

  public isFull(): boolean {
    return this.full;
  }

  public size(): number {
    if (this.full) return this.capacity;
    if (this.tail >= this.head) return this.tail - this.head;
    return this.capacity - this.head + this.tail;
  }

  public clear(): void {
    this.head = 0;
    this.tail = 0;
    this.full = false;
    this.buffer = new Array(this.capacity);
  }
}
