/**
 * queueDynamicArray
 * This queue implementation is based on dynamic array
 */

const MAXSIZE = 1;

function DQueueArray(capacity) {
	this.front = this.rear = 0;
	this.capacity = capacity | MAXSIZE;
	this.queue = new Array(this.capacity).fill(undefined);
}

DQueueArray.prototype.enqueue = function (data) {
	if (this.isFullEmpty()) this.doubleQueueCapacity();
	this.queue[this.rear++] = data;
};

DQueueArray.prototype.doubleQueueCapacity = function () {
	this.queue = this.queue.concat(new Array(this.capacity).fill(undefined));
	this.capacity = this.capacity * 2;
};

DQueueArray.prototype.isFullEmpty = function () {
	return this.rear === this.capacity;
};

DQueueArray.prototype.dequeue = function () {
	if (this.isEmptyQueue()) return;
	else {
		for (let i = 0; i < this.rear - 1; i++) this.queue[i] = this.queue[i + 1];
		this.rear--;
	}
};

DQueueArray.prototype.isEmptyQueue = function () {
	return this.rear === this.front;
};

DQueueArray.prototype.printQueue = function () {
	let str = "";
	for (let i = 0; i < this.rear; i++) {
		str += ` ${this.queue[i]}`;
	}
	console.log(str);
};

DQueueArray.prototype.queueSize = function () {
	return this.rear;
};

const dqa = new DQueueArray(1);
dqa.enqueue(10);
dqa.enqueue(20);
dqa.enqueue(30);
dqa.enqueue(40);
dqa.enqueue(50);

dqa.printQueue();

dqa.dequeue();
dqa.dequeue();
dqa.dequeue();

dqa.printQueue();
