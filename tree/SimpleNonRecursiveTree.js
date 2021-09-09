function TreeNode(data) {
	this.data = data;
	this.left = this.right = null;
}
TreeNode.cretaeNode = (data) => {
	let node = new TreeNode(data);
	if (node) {
		return node;
	} else {
		console.log("Memory Error");
		return null;
	}
};

function Bst() {
	this.root = null;
}

Bst.prototype.insert = function (data) {
	const newNode = TreeNode.cretaeNode(data);

	let tempRoot = this.root;
	let prevNode = null;

	if (tempRoot === null) {
		this.root = newNode;
		return;
	}

	while (tempRoot !== null) {
		prevNode = tempRoot;
		if (data < tempRoot.data) {
			tempRoot = tempRoot.left;
		} else {
			tempRoot = tempRoot.right;
		}
	}

	if (prevNode === null) prevNode = newNode;
	else if (data < prevNode.data) prevNode.left = newNode;
	else prevNode.right = newNode;

	/**
	 * Returning the pointer where the new node is insrted
	 */
	return prevNode;
};

Bst.prototype.preOrderNonRecursive = function () {
	const stack = [];
	let str = "";
	let tempRoot = this.root;
	while (1) {
		while (tempRoot) {
			str += ` ${tempRoot.data}`;
			stack.push(tempRoot);
			tempRoot = tempRoot.left;
		}
		if (stack.length === 0) break;
		tempRoot = stack.pop();
		tempRoot = tempRoot.right;
	}
	console.log(str);
};

Bst.prototype.inOrderNonRecursive = function () {
	const stack = [];
	let str = "";
	let tempRoot = this.root;
	// console.log(tempRoot);
	while (1) {
		while (tempRoot) {
			stack.push(tempRoot);
			tempRoot = tempRoot.left;
		}

		if (stack.length === 0) break;
		tempRoot = stack.pop();
		str += ` ${tempRoot.data}`;
		tempRoot = tempRoot.right;
	}
	console.log(str);
};

Bst.prototype.postOrderNonRecursive = function () {
	let tempRoot = this.root;
	const stack = [];
	let str = "";
	let prevNode;
	do {
		while (tempRoot !== null) {
			stack.push(tempRoot);
			tempRoot = tempRoot.left;
		}
		while (tempRoot === null && stack.length !== 0) {
			tempRoot = stack[stack.length - 1];
			console.log(prevNode);
			if (tempRoot.right === null || prevNode === tempRoot.root) {
				str += ` ${tempRoot.data}`;
				prevNode = tempRoot;
				stack.pop();
				tempRoot = null;
			} else {
				tempRoot = tempRoot.right;
			}
		}
	} while (stack.length !== 0);
	console.log(str);
};

const bst = new Bst();

bst.insert(10);
bst.insert(40);
bst.insert(5);
bst.insert(2);
bst.insert(40);
bst.insert(15);
bst.insert(50);

// bst.inOrderNonRecursive();
// bst.preOrderNonRecursive();
bst.postOrderNonRecursive();
