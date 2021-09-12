/**
 * In this section we are going to perform deletion operation in recusrive and non-recursive way
 * References:- https://www.geeksforgeeks.org/binary-search-tree-set-3-iterative-delete/
 * References:- https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
 */

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
// non - recursive
BST.insertIterativeV1 = (bst, data) => {
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
		if (root.data < data) {
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

BST.preOrderIterative = (bst) => {
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
	console.log(str);
};

BST.minValueIterativeV1 = (bst) => {
	let root = bst.root;
	while (root.left !== null) root = root.left;
	return root.data || null;
};

BST.maxValueIterativeV1 = (bst) => {
	let root = bst.root;
	while (root.right !== null) root = root.right;
	return root.data || null;
};

// Deletion in binary search tree (BST)

BST.deletionItrativeV1 = (bst, data = 0) => {
	/**
	 * Basic Steps to perform deletion algo.
	 * step:-1 first need to find required data
	 * step:-2 if data has not been found then we can simply stop the procedure
	 * step:-3 if data data has been found then we can perform following steps
	 *      1. we check if node has single and no child
	 *      2. we check if node has two child
	 */

	let root = bst.root;
	let prev = null;
	let tempNode, p;

	/**
	 * * Step:-1
	 */
	while (root !== null && root.data !== data) {
		prev = root;
		if (data < root.data) root = root.left;
		else root = root.right;
	}
	/**
	 * * Step:-2
	 */
	if (root === null) {
		console.log(`Key ${data} not found in the provided BST`);
		return;
	}
	/**
	 * * Step:-3
	 */
	if (root.left === null || root.right === null) {
		/**
		 * * Step:-3
		 * *   1.
		 */

		if (root.left === null) tempNode = root.right;
		else tempNode = root.left;

		if (prev === null) {
			this.root = tempNode;
			return;
		}

		if (prev.left === root) {
			prev.left = tempNode;
		} else {
			prev.right = tempNode;
		}
	} else {
		/**
		 * * Step:-3
		 * *   2.
		 */
		p = null;
		tempNode = root.right;
		while (tempNode.left !== null) {
			p = tempNode;
			tempNode = tempNode.left;
		}

		if (p !== null) p.left = tempNode.right;
		else root.right = tempNode.right;
		root.data = tempNode.data;
	}
};

BST.deletionRecursiveV1 = (bst, data) => {
	const deletionRec = (node, value) => {
		/**
		 ** Base Case: If the tree is empty
		 */
		// console.log("Data:- ", data);
		if (node === null) return node;
		/**
		 ** Going down the tree recursively
		 */
		if (value < node.data) {
			node.left = deletionRec(node.left, value);
		} else if (value > node.data) {
			node.right = deletionRec(node.right, value);
		} else {
			// node with only one child or no child
			if (node.left === null) return node.right;
			else if (node.right === null) return node.left;

			//finding the minimum from right subtree
			node.data = BST.minValueIterativeV1({ root: node.right });

			// console.log(node.data);
			//delete the inorder successor (That's mean minimum node that we found in right subtree)
			node.right = deletionRec(node.right, node.data);
		}
		return node;
	};

	bst.root = deletionRec(bst.root, data);

	return bst;
};

const bst = new BST();
BST.insertIterativeV1(bst, 10);
BST.insertIterativeV1(bst, 5);
BST.insertIterativeV1(bst, 2);
BST.insertIterativeV1(bst, 40);
BST.insertIterativeV1(bst, 15);
BST.insertIterativeV1(bst, 50);
BST.insertIterativeV1(bst, 6);

BST.preOrderIterative(bst);
// BST.deletionItrativeV1(bst, 40);
BST.deletionRecursiveV1(bst, 40);
BST.preOrderIterative(bst);
// console.log(BST.minValueIterativeV1(bst));
// console.log(BST.maxValueIterativeV1(bst));
