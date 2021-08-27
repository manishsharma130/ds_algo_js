/**
 * This Queue implementation using linkedlist in javascript
 */

function QNode(data) {
	this.data = data;
	this.next = null;
}

function QLL() {
	this.queue = null;
	this.front = this.rear = null;
}

QLL.prototype.enqueue = function (data) {
	let newNode = new QNode(data);
	if (this.isEmptyQueue()) {
		this.queue = this.front = this.rear = newNode;
	} else {
		this.rear.next = newNode;
		this.rear = newNode;
	}
	return;
};
QLL.prototype.dequeue = function () {
	if (this.isEmptyQueue()) return;
	else {
		let temp = this.front.data;
		this.front = this.front.next;
		return temp;
	}
};

QLL.prototype.isEmptyQueue = function () {
	return this.rear === null;
};

QLL.prototype.queueSize = function () {
	let count = 0;
	let temp = this.front;
	while (temp !== null) {
		count++;
		temp = temp.next;
	}
	return count;
};

QLL.prototype.printQueue = function () {
	let str = "";
	let temp = this.front;
	while (temp !== null) {
		if (temp.data) str += ` ${temp.data}`;
		temp = temp.next;
	}
	console.log(str);
};

const q1 = new QLL();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
console.log(q1.queueSize());
q1.printQueue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.printQueue();
