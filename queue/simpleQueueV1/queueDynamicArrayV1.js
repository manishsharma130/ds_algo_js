/**
 * queueDynamicArray
 *  * Basic version of queue
 * *- ADT (Abstract data type)
 *   1. Enqueue
 *   2. Dequeue
 *   3. IsEmpty
 *   4. IsFull
 *   5. Peek
 */

const MAXSIZE = 1;
function Queue(capacity = MAXSIZE) {
	this.front = this.rear = -1;
	this.capacity = capacity;
	this.queue = new Array(this.capacity).fill(undefined);
}
Queue.prototype.enqueue = function (data) {
	if (this.rear === this.capacity - 1) this.doubleQueueSize();

	if (this.front === -1) this.front = 0;
	this.rear++;
	this.queue[this.rear] = data;
};
Queue.prototype.doubleQueueSize = function () {
	this.queue = this.queue.concat(new Array(this.capacity).fill(undefined));
	this.capacity = this.capacity * 2;
};

Queue.prototype.dequeue = function () {
	if (this.isEmpty()) console.log("Queue is underflow");
	else {
		this.front++;
		if (this.front > this.rear) this.front = this.rear = -1;
	}
	return;
};
Queue.prototype.isEmpty = function () {
	return this.front === -1;
};
Queue.prototype.peek = function () {
	if (this.isEmpty()) return -1;
	else return this.queue[this.front];
};
Queue.prototype.getQueueSize = function () {
	return this.rear + 1;
};
Queue.prototype.printQueue = function () {
	let str = "";
	for (let i = this.front; i <= this.rear; i++) str += ` ${this.queue[i]}`;
	console.log(str);
};

const dq1 = new Queue();
dq1.enqueue(10);
dq1.enqueue(20);
dq1.enqueue(30);
dq1.enqueue(40);
dq1.enqueue(50);

dq1.printQueue();
dq1.dequeue();
dq1.printQueue();
dq1.dequeue();
dq1.printQueue();
dq1.dequeue();
dq1.printQueue();
dq1.dequeue();
dq1.printQueue();
