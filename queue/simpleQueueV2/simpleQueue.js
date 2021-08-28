// simpleQueue
/**
 * This Queue implementation using array is static
 * * - This is the next level implementation of queue in which
 *   we prevent all those which rare bring removed by maintaining
 *   the deueue operation.
 */
const MAXSIZE = 10;

function Queue(capacity) {
	this.front = 0;
	this.rear = 0;
	this.capacity = capacity || MAXSIZE;
	this.queue = new Array(this.capacity).fill(undefined);
}

Queue.prototype.enqueue = function (data) {
	if (this.rear === this.capacity) console.log("\n Queue is full\n");
	else {
		this.queue[this.rear] = data;
		this.rear++;
	}
	return;
};

Queue.prototype.dequeue = function () {
	if (this.isEmptyQueue()) console.log("Queue is empty");
	else {
		// shift all the elements from index 2 till rear
		// to the left by one
		for (let i = 0; i < this.rear - 1; i++) this.queue[i] = this.queue[i + 1];

		this.rear--;
	}
};

Queue.prototype.isEmptyQueue = function () {
	return this.rear === this.front;
};
Queue.prototype.queueSize = function () {
	return this.rear;
};

Queue.prototype.printQueue = function () {
	let str = "";
	for (let i = 0; i < this.rear; i++) {
		if (this.queue[i]) str += ` ${this.queue[i]}`;
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
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();

q1.printQueue();

console.log(q1.queueSize());
