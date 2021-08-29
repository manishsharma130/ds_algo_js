/**
 * De-queue implementation using linked-list
 * we can also implement double-linkedlist in order to make
 * one operation easy "dequeueRear"
 */

function DQNode(data) {
	this.data = data;
	this.next = null;
}
function DQLL() {
	this.queue = this.front = this.rear = null;
}

DQLL.prototype.enqueueFront = function (data) {
	let newNode = this.crateNode(data);
	if (this.isEmpty()) this.queue = this.front = this.rear = newNode;
	else {
		newNode.next = this.front;
		this.front = newNode;
	}
};
DQLL.prototype.enqueueRear = function (data) {
	let newNode = this.crateNode(data);
	if (this.isEmpty()) this.queue = this.rear = this.front = newNode;
	else {
		this.rear.next = newNode;
		this.rear = newNode;
	}
};
DQLL.prototype.dequeueRear = function () {
	if (this.isEmpty()) console.log("De-queue is empty");
	else {
		/*
        In order to make this operation easy we can use double linked list
        But Double linked list come with some extra previous pointer maintenance
        */
		let temp = this.front;
		let prevNode = temp;
		while (temp.next !== null) {
			prevNode = temp;
			temp = temp.next;
		}
		prevNode.next = null;
		this.rear = prevNode;
	}
};
DQLL.prototype.dequeueFront = function () {
	if (this.isEmpty()) console.log("De-Queue is empty");
	else this.front = this.front.next;
};

DQLL.prototype.getSize = function () {
	let count = 0;
	let temp = this.front;
	while (temp !== null) {
		count++;
		temp = temp.next;
	}
	return count;
};
DQLL.prototype.printQueue = function () {
	let temp = this.front;
	let str = "";
	while (temp !== null) {
		str += ` ${temp.data}`;
		temp = temp.next;
	}
	console.log(str);
};
DQLL.prototype.frontPeek = function () {
	if (this.isEmpty()) return -1;
	else return this.front.data;
};
DQLL.prototype.rearPeek = function () {
	if (!this.rear) return -1;
	else return this.rear.data;
};
DQLL.prototype.crateNode = function (data) {
	const newNode = new DQNode(data);
	if (!newNode) console.log("Memory Error");
	return newNode;
};
DQLL.prototype.isEmpty = function () {
	return this.front === null;
};

const q1 = new DQLL();

q1.enqueueFront(10);
q1.enqueueFront(20);
q1.enqueueFront(30);
q1.enqueueFront(40);
q1.printQueue();
q1.enqueueRear(10);
q1.enqueueRear(20);
q1.enqueueRear(30);
q1.enqueueRear(40);
q1.printQueue();

q1.dequeueFront();
q1.dequeueFront();
q1.printQueue();
q1.dequeueRear();
q1.dequeueRear();
q1.printQueue();
