/**
 * De-queue (Double ended queue)
 * This De-queue is so powerfull and it is used in most of the data structure
 ** Application:-
 *  1. The deque can be used as a stack and queue; therefore, it can perform both redo and undo operations.
 *  2. It can be used as a palindrome checker means that if we read the string from both ends, then the string would be the same.
 *
 * Implementation of Double ended Queue using circular array
 */
const MAXSIZE = 10;

function DeQueue(capacity = MAXSIZE) {
	this.rear = this.front = -1;
	this.capacity = capacity;
	this.queue = new Array(this.capacity).fill(undefined);
}

// These four function are very crucial
DeQueue.prototype.enqueueFront = function (data) {
	if (this.isFull()) {
		console.log("De-queue is full");
	} else if (this.front === -1 && this.rear === -1) {
		this.front = this.rear = 0;
		this.queue[this.front] = data;
	} else if (this.front === 0) {
		this.front = this.capacity - 1;
		this.queue[this.front] = data;
	} else {
		this.front--;
		this.queue[this.front] = data;
	}
};
DeQueue.prototype.enqueueRear = function (data) {
	if (this.isFull()) {
		console.log("De-queue is full");
	} else if (this.front === -1 && this.rear === -1) {
		this.rear = 0;
		this.queue[this.front] = data;
	} else if (this.rear === this.capacity - 1) {
		this.rear = 0;
		this.queue[this.rear] = data;
	} else {
		this.rear++;
		this.queue[this.rear] = data;
	}
};
DeQueue.prototype.dequeueFront = function () {
	if (this.isEmpty()) {
		console.log("De-queue is empty");
	} else if (this.front === this.rear) {
		this.front = this.rear = -1;
	}
	if (this.front === this.capacity - 1) {
		this.front = 0;
	} else {
		this.front++;
	}
};
DeQueue.prototype.dequeueRear = function () {
	if (this.isEmpty()) {
		console.log("De-Queue is empty");
	} else if (this.front === this.rear) {
		this.rear = this.front = -1;
	} else if (this.rear === 0) {
		this.rear = this.capacity - 1;
	} else {
		this.rear--;
	}
};

DeQueue.prototype.getSize = function () {
	let count = 0;
	if (this.isEmpty()) {
		count = 0;
	} else {
		for (let i = 0; i !== this.rear; i++) count++;
		count++;
	}
	return count;
};
DeQueue.prototype.printDeQueue = function () {
	let i = this.front;
	let str = "";
	while (i !== this.rear) {
		str += ` ${this.queue[i]}`;
		i = (i + 1) % this.capacity;
	}
	if (this.queue[i]) str += ` ${this.queue[i]}`;
	console.log(str);
};
DeQueue.prototype.peek = function () {
	if (this.isEmpty()) return -1;
	else return this.queue[this.front];
};
DeQueue.prototype.isEmpty = function () {
	return this.front === -1 && this.rear === -1;
};
DeQueue.prototype.isFull = function () {
	return (
		(this.front === 0 && this.rear == this.capacity - 1) ||
		this.front === this.rear + 1
	);
};

const cdq1 = new DeQueue(10);

cdq1.enqueueFront(10);
cdq1.enqueueFront(20);
cdq1.enqueueFront(30);
cdq1.enqueueRear(10);
cdq1.enqueueRear(20);
cdq1.enqueueRear(30);
cdq1.enqueueRear(31);
cdq1.enqueueRear(32);
cdq1.enqueueRear(33);
cdq1.enqueueRear(34);

cdq1.printDeQueue();

cdq1.dequeueFront();
cdq1.dequeueFront();
cdq1.dequeueRear();
cdq1.dequeueRear();
cdq1.printDeQueue();
