/**
 * Basic version of queue using Linkedlist DS
 */

function QLLNode(data) {
	this.data = data;
	this.next = null;
}

function QLL() {
	this.queue = null;
	this.front = this.rear = null;
}

QLL.prototype.enqueue = function (data) {
	let newNode = new QLLNode(data);
	if (this.isEmpty()) {
		this.queue = this.rear = this.front = newNode;
	} else {
		this.rear.next = newNode;
		this.rear = newNode;
	}
	return;
};

QLL.prototype.dequeue = function () {
	if (this.isEmpty()) console.log("Queue is underflow");
	else this.front = this.front.next;
	return;
};

QLL.prototype.isEmpty = function () {
	return this.rear === null;
};

QLL.prototype.getQueueSize = function () {
	let count = 0;
	let temp = this.front;
	while (!temp) {
		count++;
		temp = temp.next;
	}
	return count;
};

QLL.prototype.printQueue = function () {
	let str = "";
	for (let temp = this.front; temp !== null; temp = temp.next) {
		str += ` ${temp.data}`;
	}
	console.log(str);
};

const qll = new QLL();
qll.enqueue(10);
qll.enqueue(20);
qll.enqueue(30);
qll.enqueue(40);
qll.enqueue(50);

qll.printQueue();

qll.dequeue();
qll.printQueue();
qll.dequeue();
qll.printQueue();
qll.dequeue();
qll.printQueue();
qll.dequeue();
qll.printQueue();
