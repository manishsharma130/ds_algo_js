/**
 * circularQueueV1
 * *The complexity of the enqueue and dequeue operations of a circular queue is O(1) for (array implementations).
 *
 ** Applications of Circular Queue
    1. CPU scheduling
    2. Memory management
    3. Traffic Management
 */

const MAXSIZE = 10;

// Circular
function CQ(capacity = MAXSIZE) {
	this.front = this.rear = -1;
	this.capacity = capacity;
	this.queue = new Array(this.capacity).fill(undefined);
}

CQ.prototype.enqueue = function (data) {
	if (this.isFull()) {
		console.log("Queue is full");
	} else {
		if (this.front === -1) this.front = 0;
		this.rear = (this.rear + 1) % this.capacity;
		this.queue[this.rear] = data;
	}
};
CQ.prototype.dequeue = function () {
	if (this.isEmpty()) {
		console.log("Queue is empty");
	} else {
		if (this.front === this.rear) {
			this.front = -1;
			this.rear = -1;
		} else {
			this.front = (this.front + 1) % this.capacity;
		}
	}
};
CQ.prototype.isEmpty = function () {
	return this.front === -1;
};
CQ.prototype.isFull = function () {
	return (
		this.front === this.rear + 1 ||
		(this.front === 0 && this.rear === this.capacity - 1)
	);
};
CQ.prototype.getQueueSize = function () {
	if (this.isEmpty()) return -1;
	return Math.abs(this.rear - this.front + 1);
};
CQ.prototype.printQueue = function () {
	let str = "";
	for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity)
		str += ` ${this.queue[i]}`;
	// checking the data at rear pointer
	if (this.queue[this.rear]) str += ` ${this.queue[this.rear]}`;
	console.log(str);
};

const cq1 = new CQ();
console.log(cq1.front, cq1.rear);
cq1.enqueue(10);
console.log(cq1.front, cq1.rear);
cq1.dequeue();
console.log(cq1.front, cq1.rear);
cq1.printQueue();
console.log(cq1.front, cq1.rear);

// cq1.enqueue(10);
// cq1.enqueue(20);
// cq1.enqueue(30);
// cq1.enqueue(40);
// cq1.enqueue(50);
// cq1.enqueue(60);
// cq1.enqueue(70);
// cq1.enqueue(80);
// cq1.enqueue(90);
// cq1.enqueue(100);

// console.log(cq1.getQueueSize());

// cq1.printQueue();

// cq1.dequeue();
// cq1.dequeue();
// cq1.dequeue();
// cq1.dequeue();
// cq1.printQueue();
// cq1.enqueue(70);
// cq1.enqueue(80);
// cq1.enqueue(90);
// cq1.enqueue(100);
// cq1.printQueue();
