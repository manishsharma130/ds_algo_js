// circularLinkedList

function Node(data) {
	this.data = data;
	this.next = null;
}

function CircularLinkedList() {
	this.list = null;
}
CircularLinkedList.prototype.getCLLLength = function () {
	let count = 0;
	let temp = this.list;
	if (temp === null) return 0;
	do {
		count++;
		temp = temp.next;
	} while (temp !== this.list);
	return count;
};

CircularLinkedList.prototype.printCLL = function () {
	let temp = this.list;
	let str = "";
	if (temp === null) {
		console.log("List is empty now");
		return;
	}
	do {
		str += ` ${temp.data}`;
		temp = temp.next;
	} while (temp && temp !== this.list);
	console.log(str);
};

CircularLinkedList.prototype.insertAtEndInCLL = function (data) {
	let current = this.list;
	let newNode = new Node();
	if (!newNode) {
		console.log("Memory Error");
		return;
	}
	newNode.data = data;
	while (current && current.next !== this.list) current = current.next;
	newNode.next = newNode;

	if (this.list === null) {
		this.list = newNode;
		return;
	} else {
		newNode.next = this.list;
		current.next = newNode;
	}
};

CircularLinkedList.prototype.insertAtBeginInCLL = function (data) {
	let current = this.list;
	let newNode = new Node();
	if (!newNode) console.log("Memory Error");
	newNode.data = data;
	while (current && current.next !== this.list) current = current.next;
	newNode.next = newNode;
	if (this.list === null) {
		this.list = newNode;
		return;
	} else {
		newNode.next = this.list;
		current.next = newNode;
		this.list = newNode;
	}
};

CircularLinkedList.prototype.deleteLastNodeFromCLL = function () {
	let temp,
		current = this.list;
	if (this.list === null) {
		console.log("List Empty");
		return;
	}
	while (current.next !== this.list) {
		temp = current;
		current = current.next;
	}
	if (current === this.list) {
		this.list = null;
	} else {
		temp.next = current.next;
	}
	return;
};

CircularLinkedList.prototype.deleteFrontNodeFromCLL = function () {
	let current = this.list;

	if (current === null) {
		console.log("List is empty");
		return;
	}
	while (current.next !== this.list) current = current.next;

	if (current === this.list) {
		this.list = null;
	} else {
		current.next = this.list.next;
		this.list = this.list.next;
	}

	return;
};

const ccllist = new CircularLinkedList();

ccllist.insertAtBeginInCLL(10);
ccllist.insertAtBeginInCLL(20);
ccllist.insertAtBeginInCLL(30);
ccllist.insertAtBeginInCLL(40);
ccllist.insertAtBeginInCLL(50);

ccllist.printCLL();

// ccllist.deleteFrontNodeFromCLL();
ccllist.deleteLastNodeFromCLL();

ccllist.printCLL();

// ccllist.deleteFrontNodeFromCLL();
ccllist.deleteLastNodeFromCLL();

ccllist.printCLL();

// ccllist.deleteFrontNodeFromCLL();
ccllist.deleteLastNodeFromCLL();

ccllist.printCLL();

// ccllist.deleteFrontNodeFromCLL();
ccllist.deleteLastNodeFromCLL();

ccllist.printCLL();

// ccllist.deleteFrontNodeFromCLL();
ccllist.deleteLastNodeFromCLL();

ccllist.printCLL();
