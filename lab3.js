class CircularQueue {

    constructor(k) {
      this.queue = new Array(k);
      this.head = 0;
      this.tail = 0;
      this.size = 0;
      this.capacity = k;
    }
    enqueue(value) {
      if (this.isFull()) {
        return false;
      }
      this.queue[this.tail] = value;
      this.tail = (this.tail + 1) % this.capacity;
      this.size++;
      return true;
    }
    dequeue() {
      if (this.isEmpty()) {
        return false;
      }
      this.head = (this.head + 1) % this.capacity;
      this.size--;
      return true;
    }
    front() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.head];
    }
    rear() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[(this.tail - 1 + this.capacity) % this.capacity];
    }
    isEmpty() {
      return this.size === 0;
    }
    isFull() {
      return this.size === this.capacity;
    }
  }
  
  const q = new CircularQueue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.dequeue());
  q.enqueue(4);
  console.log(q.front());
  console.log(q.rear()); 
