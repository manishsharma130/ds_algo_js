/**
 * References:-1 :- https://www.geeksforgeeks.org/iterative-postorder-traversal/
 * References:-2 :- https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45648/three-ways-of-iterative-postorder-traversing-easy-explanation
 * Refereces:- 3 :- https://leetcode.com/problems/validate-binary-search-tree/discuss/32112/Learn-one-iterative-inorder-traversal-apply-it-to-multiple-tree-questions-(Java-Solution)
 */

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

// Bst.prototype.postOrderNonRecursive = function () {
// 	let tempRoot = this.root;
// 	const stack = [];
// 	let str = "";
// 	let prevNode;
// 	do {
// 		while (tempRoot !== null) {
// 			stack.push(tempRoot);
// 			tempRoot = tempRoot.left;
// 		}
// 		while (tempRoot === null && stack.length !== 0) {
// 			tempRoot = stack[stack.length - 1];
// 			console.log(prevNode);
// 			if (tempRoot.right === null || prevNode === tempRoot.root) {
// 				str += ` ${tempRoot.data}`;
// 				stack.pop();
// 				prevNode = tempRoot;
// 				tempRoot = null;
// 			} else {
// 				tempRoot = tempRoot.right;
// 			}
// 		}
// 	} while (stack.length !== 0);
// 	console.log(str);
// };

Bst.prototype.postOrderNonRecursiveV1 = function () {
	// This is the first way to solve it using single stack solution
	let tempRoot = this.root;
	let out = "";
	const stack = [];
	let prev = null;

	while (tempRoot !== null || stack.length !== 0) {
		if (tempRoot !== null) {
			stack.push(tempRoot);
			tempRoot = tempRoot.left;
		} else {
			tempRoot = stack[stack.length - 1];
			if (tempRoot.right === null || prev === tempRoot.right) {
				out += ` ${tempRoot.data}`;
				stack.pop();
				prev = tempRoot;
				tempRoot = null;
			} else {
				tempRoot = tempRoot.right;
			}
		}
	}
	console.log(out);
};

Bst.prototype.postOrderNonRecursiveV2 = function () {
	// This is the second way of solving using two stack
	const iterator = [];
	const path = [];
	let tempRoot = this.root;
	iterator.push(tempRoot);
	while (iterator.length !== 0) {
		tempRoot = iterator.pop();
		path.push(tempRoot.data);
		if (tempRoot && tempRoot.left !== null) iterator.push(tempRoot.left);
		if (tempRoot && tempRoot.right !== null) iterator.push(tempRoot.right);
	}
	console.log(path.reverse().join(" ").trim());
};
Bst.prototype.inOrderNonRecursiveV2 = function () {
	// This is the second way of solving using two stack
	let s = [],
		path = [];
	let tempRoot = this.root;
	// let str = "";
	while (tempRoot !== null || s.length !== 0) {
		if (tempRoot !== null) {
			s.push(tempRoot);
			tempRoot = tempRoot.left;
		} else {
			tempRoot = s[s.length - 1];
			// str += ` ${tempRoot?.data}`;
			s.pop();
			path.push(tempRoot?.data);
			if (tempRoot?.right !== null) {
				tempRoot = tempRoot.right;
			} else {
				tempRoot = null;
			}
		}
	}
	console.log(path.join(" ").trim());
};
Bst.prototype.preOrderNonRecursiveV2 = function () {
	// Solving problem using two stack
	let tempRoot = this.root;
	const path = [];
	const iterator = [];
	iterator.push(tempRoot);
	while (tempRoot !== null || iterator.length !== 0) {
		if (iterator.length !== 0) {
			tempRoot = iterator.pop();
			if (tempRoot !== null) path.push(tempRoot.data);
		}

		if (tempRoot && tempRoot.rigt !== null) iterator.push(tempRoot.right);
		if (tempRoot && tempRoot.left !== null) iterator.push(tempRoot.left);
	}
	console.log(path.join(" ").trim());
};

const bst = new Bst();

bst.insert(10);
bst.insert(40);
bst.insert(5);
bst.insert(2);
// bst.insert(40);
bst.insert(15);
bst.insert(50);

// bst.inOrderNonRecursive();
// bst.preOrderNonRecursive();
// bst.postOrderNonRecursiveV1();

// bst.inOrderNonRecursiveV2();

// bst.preOrderNonRecursiveV2();

bst.postOrderNonRecursiveV2();
