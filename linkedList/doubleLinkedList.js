// doubleLinkedList

// Double linkedlist node
function Node(data) {
	this.data;
	this.next = null;
	this.prev = null;
}

function DoubleLinkedList() {
	this.list = null;
}
DoubleLinkedList.prototype.printDDLList = function () {
	let temp = this.list;
	let str = "";

	while (temp !== null) {
		str += ` ${temp.data}`;
		temp = temp.next;
	}
	console.log(str);
};

DoubleLinkedList.prototype.getListLength = function () {
	let temp = this.list;
	let count = 0;
	while (temp !== null) {
		count++;
		temp = temp.next;
	}
	return count;
};

/**
 * We are maintaning three cases for insertion and deletion
 * * case:1
 *   : inserting at the begining of DLL
 * * case:2
 *   : inserting at the tail of DLL
 * * case:3
 *   : inserting at specified position (if in case position value is not provided then it can behave like case:1 or case:2 (its all upto you))
 */

DoubleLinkedList.prototype.insertIntoDLL = function (data, position = 1) {
	let newNode = new Node(),
		temp,
		k = 1;
	if (newNode === null) {
		console.log("Memory error");
		return;
	}
	newNode.data = data;
	if (position === 1) {
		/**
		 * if position is 1 then we are maintainin the case:1
		 */
		newNode.next = this.list;
		newNode.prev = null;
		if (this.list) {
			this.list.prev = newNode;
		}
		this.list = newNode;
		return;
	}
	if (this.list) {
		temp = this.list;
		/**
		 *Basically we are iterating for the specified position but we stop the processing just before it so that we can add after it and achieve specfied position insertion of element.
		 */
		while (k < position - 1 && temp.next !== null) {
			temp = temp.next;
			k++;
		}
		if (k !== position - 1) {
			console.log("Desired position does not exits\n");
			return;
		}

		newNode.next = temp.next;
		newNode.prev = temp;
		if (temp.next) temp.next.prev = newNode;
		temp.next = newNode;
		return;
	} else {
		console.log("Desired position does not exits\n");
	}
};

DoubleLinkedList.prototype.deleteFromDLL = function (position = 1) {
	let k = 1;
	let temp;
	if (!this.list) {
		console.log("List is empty");
	}
	if (position === 1) {
		this.list = this.list.next;
		if (this.list) this.list.prev = null;
	} else {
		temp = this.list;

		while (k < position && temp.next !== null) {
			temp = temp.next;
			k++;
		}

		if (k !== position) {
			console.log(`element on specified ${position} position does not exist`);
			return;
		}

		temp.prev.next = temp.next;
		if (temp.next) {
			// checking if next node is there in way or not
			temp.next.prev = temp.prev;
		}
	}
};

const dllList = new DoubleLinkedList();

dllList.insertIntoDLL(10);
dllList.insertIntoDLL(20);
dllList.insertIntoDLL(30);
dllList.insertIntoDLL(40, 2);

dllList.printDDLList();

dllList.deleteFromDLL(5);

dllList.printDDLList();
// dllList.deleteFromDLL();
// dllList.printDDLList();
// dllList.deleteFromDLL();
// dllList.printDDLList();
// dllList.deleteFromDLL();