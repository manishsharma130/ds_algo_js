/**
 * This implementation is for static array size just fot learning
 * as we know, javascript provide very easy way to use stack with Array built in Api's
 */

const MAXSIZE = 10;

function Stack(capacity) {
	this.top = -1;
	this.capacity = capacity || MAXSIZE;
	this.array = new Array(this.capacity).fill(undefined);
}
Stack.prototype.isEmptyStack = function () {
	return this.top === -1;
};
Stack.prototype.isFullStack = function () {
	return this.top === this.capacity - 1;
};

Stack.prototype.push = function (data) {
	if (this.isFullStack()) {
		console.log("Stack Overflow");
	} else {
		this.array[++this.top] = data;
	}
};
Stack.prototype.pop = function () {
	if (this.isEmptyStack()) {
		console.log("Stack is Empty (Underflow)");
	} else {
		this.array[this.top] = undefined;
		return this.array[this.top--];
	}
};
Stack.prototype.deleteStack = function () {
	this.array = new Array(this.capacity);
	this.top = -1;
};
Stack.prototype.printStack = function () {
	let str = "";
	if (this.array)
		for (let i = 0; i < this.array.length; i++) {
			if (this.array[i]) str += ` ${this.array[i]}`;
		}
	console.log(str);
	console.log(this.top);
};

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.printStack();
stack.pop();
stack.pop();
stack.pop();
stack.printStack();
