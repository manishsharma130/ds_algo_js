// SimpleRecursiveTree
/**
 * This is Simple Binary Search tree implemented using recursion
 * Implementation understood from this blog https://www.hackerearth.com/practice/notes/trees/
 */

function TreeNode(data) {
	this.data = data;
	this.left = this.right = null;
}

function BSTRecursive() {
	this.root = null;
}

// This methos is implemented for testing purposes
BSTRecursive.insertionByArray = (bst, arr = []) => {
	arr.map((data) => {
		bst.insert(data);
	});
};

BSTRecursive.printByTraversalOrders = (bst) => {
	if (bst && bst instanceof BSTRecursive) {
		console.log("Preorder:- " + BSTRecursive.preOrder(bst.root));
		console.log("Inorder:- " + BSTRecursive.inOrder(bst.root));
		console.log("Postorder:- " + BSTRecursive.postOrder(bst.root));
		console.log("Leveorder:- " + BSTRecursive.levelOrder(bst.root));
	}
};

// Creating Binary Search Tree Node
BSTRecursive.createNode = (data) => new TreeNode(data);

BSTRecursive.nativeInsert = (root, d) => {
	if (root === null)
		// This mean tree is empty
		return BSTRecursive.createNode(d);
	else {
		if (d <= root.data)
			// left subtree will be called
			root.left = BSTRecursive.nativeInsert(root.left, d);
		// right subtree will be called
		else root.right = BSTRecursive.nativeInsert(root.right, d);
		return root;
	}
};

BSTRecursive.prototype.insert = function (data) {
	// starting of insertion
	this.root = BSTRecursive.nativeInsert(this.root, data);
};

/**
 * The idea is to do a postorder traversal and maintaining two variables to store left depth and right depth and return max of left and right depth.
 * Time Complexity:- O(n);
 * This is also used to find height.
 */

BSTRecursive.findMaxDepth = (root) => {
	if (root === null) return 0;
	else {
		//Compute the depth of each subtree
		let lDepth = BSTRecursive.findMaxDepth(root.left);
		let rDepth = BSTRecursive.findMaxDepth(root.right);

		// compare and return max one
		return Math.max(lDepth, rDepth) + 1;
	}
};

BSTRecursive.prototype.maxDepth = function () {
	return BSTRecursive.findMaxDepth(this.root);
};

/**
 * The idea is to traverse the tree in postorder and after calling left and right subtree swap the pointers of the node.
 */

BSTRecursive.doMirror = (node) => {
	if (node) {
		let temp;
		doMirror(node.left);
		doMirror(node.right);
		temp = node.left;
		node.left = node.right;
		node.right = temp;
	}
};
BSTRecursive.prototype.mirror = function () {
	BSTRecursive.doMirror(this.root);
};
BSTRecursive.findDiameter = (node) => {
	if (node === null) return 0;
	else {
		// get the  height of left and right sub-trees
		const lHeight = BSTRecursive.findMaxDepth(node.left);
		const rHeight = BSTRecursive.findMaxDepth(node.right);

		// get the diameter of left and right sub-trees
		const ldiameter = BSTRecursive.findDiameter(node.left);
		const rdiameter = BSTRecursive.findDiameter(node.right);
		/*
		   Return max of following three
             1) Diameter of left subtree
             2) Diameter of right subtree
             3) Height of left subtree + height of right subtree + 1 
		   */
		return Math.max(lHeight + rHeight + 1, Math.max(ldiameter, rdiameter));
	}
};

/**
 * The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two leaves in the tree
 */

BSTRecursive.prototype.diameter = function () {
	return BSTRecursive.findDiameter(this.root);
};

BSTRecursive.getMaxWidth = (root) => {
	/**
	 * A function that fills count array with count of nodes at every
	 * level of given binary tree
	 **/
	const getMaxWidthRecur = (node, count, level) => {
		if (node) {
			count[level]++;
			getMaxWidthRecur(node.left, count, level + 1);
			getMaxWidthRecur(node.right, count, level + 1);
		}
	};

	let h = BSTRecursive.findMaxDepth(root);
	let count = new Array(h).fill(0);
	let level = 0;
	let maxWidth;
	getMaxWidthRecur(root, count, level);
	maxWidth = count[0];
	count.map((item) => (item > maxWidth ? (maxWidth = item) : undefined));
	return maxWidth;
};

/**
 ** Print nodes at k distance from root
 *  Idea is to modify @preorder traversal
 *  with maintaining a variable k, and with
 *  every iteration check it k is equal to
 *  zero if so then print that element, if
 *  not the decrement k by one.
 */

BSTRecursive.printKDistant = (root, k) => {
	if (root === null) return;
	if (k === 0) console.log(`${root.data}`);
	else {
		BSTRecursive.printKDistant(root.left, k - 1);
		BSTRecursive.printKDistant(root.right, k - 1);
	}
};

/**
 ** Traversal Binary Search Tree
 *  Pre - in - post (shortcut)
 * 1. Preorder Traversal (N L R):--> (Node,Left,Right),
 * 2. Inorder Traversal (L N R):--> (Left,Node,Right),
 * 3. Postorder Traversal (L R N):--> (Left,Right,Node)
 */

/**
 * PreOrder Traversal
 */

BSTRecursive.preOrder = function (root) {
	// N L R :--> this is the traversal order
	let str = "";
	if (root) {
		const lstr = BSTRecursive.preOrder(root.left);
		const rstr = BSTRecursive.preOrder(root.right);
		str = `${root.data}${lstr ? ", " + lstr : ""}${rstr ? ", " + rstr : ""}`;
	}
	return str;
};

/**
 * InOrder Traversal
 */
BSTRecursive.inOrder = (root) => {
	// L N R :--> this is the traversal order
	let str = "";
	if (root) {
		const lstr = BSTRecursive.inOrder(root.left);
		const rstr = BSTRecursive.inOrder(root.right);
		str = `${lstr ? lstr : ""}${
			(lstr ? ", " : "") + root.data + (rstr ? ", " : "")
		}${rstr ? rstr : ""}`;
	}
	return str;
};

/**
 * PostOrder Traversal
 */
BSTRecursive.postOrder = (root) => {
	// L R N :--> this is the traversal order
	let str = "";
	if (root) {
		const lstr = BSTRecursive.postOrder(root.left);
		const rstr = BSTRecursive.postOrder(root.right);
		str = `${lstr || ""}${rstr ? (lstr ? ", " : "") + rstr : ""}${
			root.data ? (rstr || lstr ? ", " : "") + root.data : ""
		}`;
	}
	return str;
};

/**
 * Traversal level by level
 */

BSTRecursive.levelOrder = (root) => {
	let queue = [];
	let tempNode = root;
	let str = "";
	while (tempNode) {
		// console.log(`${tempNode.data}`);
		str += `${tempNode.data}${" "}`;

		if (tempNode.left) queue.push(tempNode.left);
		if (tempNode.right) queue.push(tempNode.right);

		tempNode = queue.shift();
	}
	return str.trim();
};

const bst = new BSTRecursive();

/**
 * 1. [10,40,50,5,2,15],
 * 2. [10,40,40,50,5,5,2,15]
 * 3. [10,40,2,5,99,40,11,11,2]
 * 4. [1,2,3,4,5]
 */
BSTRecursive.insertionByArray(bst, [10, 40, 50, 5, 2, 15]);
// BSTRecursive.insertionByArray(bst, [10, 40, 40, 50, 5, 5, 2, 15]);
// BSTRecursive.insertionByArray(bst, [10, 40, 2, 5, 99, 40, 11, 11, 2]);
// BSTRecursive.insertionByArray(bst, [1, 2, 3, 4, 5]);

console.log(BSTRecursive.preOrder(bst.root));

// console.log(BSTRecursive.inOrder(bst.root));

// console.log(BSTRecursive.postOrder(bst.root));

// BSTRecursive.levelOrder(bst.root);
// BSTRecursive.printByTraversalOrders(bst);
// console.log("Max Depth of the tree");
// console.log(bst.maxDepth());
// console.log("BST mirroring");
// bst.mirror();
// console.log(BSTRecursive.postOrder(bst.root));
// console.log(BSTRecursive.inOrder(bst.root));
// console.log(BSTRecursive.preOrder(bst.root));

// console.log(bst.diameter());
// console.log(bst.maxDepth());

console.log(BSTRecursive.getMaxWidth(bst.root));

BSTRecursive.printKDistant(bst.root, 2);
