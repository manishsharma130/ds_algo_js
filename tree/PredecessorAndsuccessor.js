// PredecessorAndsuccessor.js

function TreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}
TreeNode.cretaeNode = function (data) {
	let node = new TreeNode(data);
	if (node) return node;
	else {
		console.log("Memory Error");
		return null;
	}
};
function BST() {
	this.root = null;
}

BST.insertIterative = (bst, data) => {
	let root = bst.root;
	let prevNode = root;
	let newNode = TreeNode.cretaeNode(data);
	if (newNode === null) return null;
	// console.log("data:- ", data);
	if (root === null) {
		bst.root = newNode;
		return;
	}
	// console.log("Before while:- ", root);
	while (root !== null) {
		// console.log("root:- ", root);
		if (root.data <= data) {
			prevNode = root;
			root = root.right;
		} else if (root.data > data) {
			prevNode = root;
			root = root.left;
		}
	}
	if (prevNode !== null && prevNode.data <= data) prevNode.right = newNode;
	else prevNode.left = newNode;
};

BST.inOrderNonRecursive = function (bst) {
	const stack = [];
	let str = "";
	let tempRoot = bst.root;
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
	console.log("Inorder:- ", str);
};

BST.preOrderIterativeNRec = (bst) => {
	let root = bst.root;
	let iterator = [];
	let str = "";
	iterator.push(root);
	while (root !== null || iterator.length !== 0) {
		root = iterator.pop();
		str += ` ${root.data}`;
		if (root.right !== null) iterator.push(root.right);
		if (root.left !== null) iterator.push(root.left);
		root = null;
	}
	console.log("Preorder:- ", str);
};

// BST.postOrderRec = (bst) => {
// 	// L R N :--> this is the traversal order
// 	let str = "";
// 	const root = bst.root || null;

// 	const postOrder = (node) => {
// 		if (root) {
// 			const lstr = BSTRecursive.postOrder(root.left);
// 			const rstr = BSTRecursive.postOrder(root.right);
// 			str = `${lstr || ""}${rstr ? (lstr ? ", " : "") + rstr : ""}${
// 				root.data ? (rstr || lstr ? ", " : "") + root.data : ""
// 			}`;
// 		}
// 	};

// 	return str;
// };

BST.findPreOrderPredecessorRec = (bst, element) => {
	// Recursion implementation
	const root = bst.root;
	let predecessor = null;
	let isReq = true;
	const findPreOrderPredecessorRrcursive = (node = null) => {
		if (node === null) return;
		if (isReq) {
			if (node.data === element) isReq = false;
			else predecessor = node.data;
			findPreOrderPredecessorRrcursive(node.left);
			findPreOrderPredecessorRrcursive(node.right);
		}
	};
	findPreOrderPredecessorRrcursive(root);
	predecessor = isReq ? null : predecessor;
	return predecessor;
};

BST.findPreOrderSuccessorRec = (bst, element) => {
	// Recursive implementation
	const root = bst.root;
	let successor = null;
	let isReq = true;

	const findPreOrderSuccessorRercursive = (node = null) => {
		if (node === null) return;
		if (isReq) {
			if (node.data === element) isReq = false;
			findPreOrderSuccessorRercursive(node.left);
			findPreOrderSuccessorRercursive(node.right);
		} else if (successor === null) successor = node.data;
	};
	findPreOrderSuccessorRercursive(root);
	return successor;
};
BST.findInOrderPredecessorRec = (bst, element) => {
	const root = bst.root;
	let predecessor = null;
	let isReq = true;
	const findInOrderPredecessorRecursive = (node = null) => {
		if (node === null) return;
		if (isReq) {
			findInOrderPredecessorRecursive(node.left);
			if (node.data === element) {
				isReq = false;
				return;
			} else if (isReq) predecessor = node.data;

			findInOrderPredecessorRecursive(node.right);
		}
	};
	findInOrderPredecessorRecursive(root);
	predecessor = isReq ? null : predecessor;
	return predecessor;
};

BST.findInOrderSuccessorRec = (bst, element) => {
	const root = bst.root;
	let successor = null;
	let isReq = true;
	const findInOrderSuccessorRecursive = (node = null) => {
		if (node === null) return;
		if (successor === null) {
			findInOrderSuccessorRecursive(node.left);
			if (node.data === element) {
				isReq = false;
			} else if (!isReq && successor === null) successor = node.data;
			findInOrderSuccessorRecursive(node.right);
		}
	};
	findInOrderSuccessorRecursive(root);
	return successor;
};

BST.findPostOrderPredecessor = (bst, element) => {
	const root = bst.root;
	let predecessor = null;
	let isReq = true;

	const findPostOrderPredecessorRecursive = (node = null) => {
		if (node === null) return;
		if (isReq) findPostOrderPredecessorRecursive(node.left);
		if (isReq) findPostOrderPredecessorRecursive(node.right);
		if (element === node.data) isReq = false;
		else if (isReq) predecessor = node.data;
	};

	findPostOrderPredecessorRecursive(root);
	predecessor = isReq ? null : predecessor;
	return predecessor;
};

BST.findPostOrderSuccessor = (bst, element) => {
	const root = bst.root;
	let successor = null;
	let isReq = true;
	const findPostOrderSuccessorRecursive = (node = null) => {
		if (node === null) return;
		if (successor === null) findPostOrderSuccessorRecursive(node.left);
		if (successor === null) findPostOrderSuccessorRecursive(node.right);
		if (element === node.data) {
			isReq = false;
		} else if (!isReq && successor === null) {
			successor = node.data;
		}
	};
	findPostOrderSuccessorRecursive(root);
	return successor;
};

const bst1 = new BST();
BST.insertIterative(bst1, 10);
BST.insertIterative(bst1, 5);
BST.insertIterative(bst1, 40);
BST.insertIterative(bst1, 2);
BST.insertIterative(bst1, 15);
BST.insertIterative(bst1, 30);
BST.insertIterative(bst1, 50);
// BST.preOrderIterativeNRec(bst1);
// BST.inOrderNonRecursive(bst1);

// console.log(BST.findPreOrderPredecessorRec(bst1, 1000));
// console.log(BST.findPreOrderSuccessorRec(bst1, 1000));
// console.log(BST.findInOrderPredecessorRec(bst1, -50));
// console.log(BST.findInOrderSuccessorRec(bst1, 50));
// console.log(BST.findPostOrderPredecessor(bst1, 5));
console.log(BST.findPostOrderSuccessor(bst1, 1000));
