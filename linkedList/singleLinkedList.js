/**
 * singleLinkedList
 */

function Node(data) {
	this.data = data;
	this.next = null;
}

function SingleList() {
	this.list = null;
}

// Insert element into single list
SingleList.prototype.insertInLinkedList = function (data, position = -1) {
	let k = 1,
		p,
		q,
		newNode = new Node();
	if (!newNode) {
		console.log("Memory Error");
		return;
	}
	newNode.data = data;
	p = this.list;
	// Consition for insertion of first element
	if (this.list === null) {
		this.list = newNode;
		return;
	}
	// Inserting at the begining
	if (position === 1) {
		newNode.next = p;
		this.list = newNode;
	} else {
		// Traverse the list until the position where we want to insert
		while (p !== null) {
			if (position > -1 && !(k < position)) break;
			k++;
			q = p;
			p = p.next;
		}
		// more optimum way to do this
		if (q) {
			q.next = newNode;
			newNode.next = p;
		}
	}
};

// Get length of list
SingleList.prototype.listLenght = function () {
	let current = this.list;
	let count = 0;
	while (current !== null) {
		count++;
		current = current.next;
	}
	return count;
};

// Delete node from list
SingleList.prototype.deleteNodeFromLinkedList = function (position = 1) {
	let k = 1;
	let p, q;
	if (this.list === null) {
		console.log("List Empty");
		return;
	}
	p = this.list;
	if (position === 1) {
		this.list = p.next;
		return;
	} else {
		// Traversing the list untill arriving the position from which we want to delete
		while (p !== null) {
			if (position && !(k < position)) break;
			k++;
			q = p;
			p = p.next;
		}

		if (p === null) {
			console.log("Position does not exist");
			return;
		} else if (q) {
			q.next = p.next;
		}
	}
};

// Display the linked list
SingleList.prototype.displayLikedList = function () {
	let current = this.list;
	let printStr = "";
	while (current !== null) {
		printStr += ` ${current.data}`;
		current = current.next;
	}
	console.log(printStr);
};

const list = new SingleList();

list.insertInLinkedList(1);
list.insertInLinkedList(11);
list.insertInLinkedList(21);
list.insertInLinkedList(41);
list.displayLikedList();
// console.log(list.listLenght());
list.deleteNodeFromLinkedList();
list.displayLikedList();
list.deleteNodeFromLinkedList(3);
list.displayLikedList();
