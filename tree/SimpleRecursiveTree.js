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

// Creating Binary Search Tree Node
BSTRecursive.createNode = (data) => new TreeNode(data);

BSTRecursive.prototype.insert = function (data) {
	const nativeInsert = (root, d) => {
		if (root === null)
			// This mean tree is empty
			return BSTRecursive.createNode(d);
		else {
			if (d <= root.data)
				// left subtree will be called
				root.left = nativeInsert(root.left, d);
			// right subtree will be called
			else root.right = nativeInsert(root.right, d);
			return root;
		}
	};
	// starting of insertion
	this.root = nativeInsert(this.root, data);
};

/**
 * Traversal Binary Search Tree
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
	if (root) {
		console.log(`${root.data}`);
		BSTRecursive.preOrder(root.left);
		BSTRecursive.preOrder(root.right);
	}
};

/**
 * InOrder Traversal
 */
BSTRecursive.inOrder = (root) => {
	// L N R :--> this is the traversal order
	if (root) {
		BSTRecursive.inOrder(root.left);
		console.log(`${root.data}`);
		BSTRecursive.inOrder(root.right);
	}
};

/**
 * PostOrder Traversal
 */
BSTRecursive.postOrder = (root) => {
	// L R N :--> this is the traversal order
	if (root) {
		BSTRecursive.postOrder(root.left);
		BSTRecursive.postOrder(root.right);
		console.log(`${root.data}`);
	}
};

/**
 * Traversal level by level
 */

BSTRecursive.levelOrder = (root) => {
	let queue = [];
	let tempNode = root;
	while (tempNode) {
		console.log(`${tempNode.data}`);

		if (tempNode.left) queue.push(tempNode.left);
		if (tempNode.right) queue.push(tempNode.right);

		tempNode = queue.shift();
	}
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

BSTRecursive.preOrder(bst.root);
console.log("-----");
BSTRecursive.inOrder(bst.root);
console.log("-----");
BSTRecursive.postOrder(bst.root);
