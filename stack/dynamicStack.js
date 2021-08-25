/**
 * Stack implementation using dynamic array
 * Note:- Array size will get double if it seems full
 */

function DynamicStack() {
	this.top = -1;
	this.capacity = 1;
	this.array = new Array(this.capacity).fill(undefined);
}

DynamicStack.prototype.isEmptyStack = function () {
	return this.top === -1;
};
DynamicStack.prototype.isFullStack = function () {
	return this.top === this.capacity - 1;
};

DynamicStack.prototype.doubleStackCapacity = function () {
	console.log("Double Size happen");
	this.array = this.array.concat(new Array(this.capacity).fill(undefined));
	this.capacity = this.capacity * 2;
};
DynamicStack.prototype.push = function (data) {
	// this is something what different in camparison to single simpleStack
	if (this.isFullStack()) this.doubleStackCapacity();
	this.array[++this.top] = data;
};

DynamicStack.prototype.pop = function () {
	if (this.isEmptyStack()) {
		console.log("Stack is Empty (Underflow)");
	} else {
		this.array[this.top] = undefined;
		return this.array[this.top--];
	}
};

DynamicStack.prototype.deleteStack = function () {
	this.capacity = 1;
	this.array = new Array(this.capacity);
	this.top = -1;
};
DynamicStack.prototype.printStack = function () {
	let str = "";
	if (this.array)
		for (let i = 0; i < this.array.length; i++) {
			if (this.array[i]) str += ` ${this.array[i]}`;
		}
	console.log(str);
	console.log(this.top);
};

const dstack = new DynamicStack();

dstack.push(10);
dstack.push(20);
dstack.push(30);
dstack.push(40);
dstack.push(50);
dstack.push(60);
dstack.printStack();
dstack.pop();
dstack.pop();
dstack.pop();
dstack.printStack();
