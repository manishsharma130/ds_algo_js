function ListNode(data) {
	this.data = data;
	this.next = null;
}

function LlStack() {
	this.list = null;
}

LlStack.prototype.push = function (data) {
	// All the time we are adding in front of stack
	let newNode = new ListNode(data);
	if (!newNode) {
		console.log("Memory Error");
		return;
	}
	newNode.next = this.list;
	this.list = newNode;
};

LlStack.prototype.pop = function () {
	// Just removing first element from the list
	if (!this.list) {
		console.log("Stack underflow");
		return;
	}
	this.list = this.list.next;
};

LlStack.prototype.isEmptyStack = function () {
	// checking list is empty or not
	return this.list === null;
};

LlStack.prototype.top = function () {
	if (this.isEmptyStack()) return;
	else {
		return this.list.data;
	}
};

LlStack.prototype.print = function () {
	let temp = this.list;
	let str = "";
	while (temp) {
		str += ` ${temp.data}`;
		temp = temp.next;
	}
	console.log(str);
};

const lls = new LlStack();

lls.push(10);
lls.push(20);
lls.push(30);
lls.push(40);
lls.push(50);

lls.print();
console.log(lls.top());

lls.pop();
lls.pop();
lls.print();
