/**
 * Basic version of queue
 * *- ADT (Abstract data type)
 *   1. Enqueue
 *   2. Dequeue
 *   3. IsEmpty
 *   4. IsFull
 *   5. Peek
 * *- Working of Queue
 * *- Queue operation work as follow
 *   1. two pointer FRONT and REAR
 *   2. FRONT tract the first element of the queue
 *   3. REAR  track the last element of the queue
 *   4. Initially, set value of FRONT and REAR to -1
 */

const MAXSIZE = 10;
function Queue(capacity) {
	this.front = this.rear = -1;
	this.capacity = capacity || MAXSIZE;
	this.queue = new Array(this.capacity).fill(undefined);
}

Queue.prototype.enqueue = function (data) {
	if (this.isFull()) console.log("Queue is full");
	else {
		if (this.front === -1) this.front = 0;
		this.rear++;
		this.queue[this.rear] = data;
	}
	return;
};
Queue.prototype.dequeue = function () {
	if (this.isEmpty()) console.log("Queue is Empty");
	else {
		this.front++;
		if (this.front > this.rear) {
			// initializing the front and rear pointer
			this.front = this.rear = -1;
		}
	}
	return;
};
Queue.prototype.isEmpty = function () {
	// if initial value get changed then it comes
	return this.front === -1;
};
Queue.prototype.isFull = function () {
	return this.rear === this.capacity - 1;
};
Queue.prototype.peek = function () {
	if (this.isEmpty()) {
		return -1;
	} else return this.queue[this.front];
};
Queue.prototype.getQueueSize = function () {
	return this.rear + 1;
};

Queue.prototype.printQueue = function () {
	let str = "";
	for (let i = this.front; i <= this.rear; i++) {
		str += ` ${this.queue[i]}`;
	}
	console.log(str);
};

const q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
q1.enqueue(50);

q1.printQueue();
q1.dequeue();
q1.printQueue();
q1.dequeue();
q1.printQueue();
q1.dequeue();
q1.printQueue();
q1.dequeue();
q1.printQueue();
q1.dequeue();
