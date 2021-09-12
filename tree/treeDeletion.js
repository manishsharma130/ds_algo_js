/**
 * In this section we are going to perform deletion operation in recusrive and non-recursive way
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

BST.minDeleteIterativeV1 = (bst) => {
	let root = bst.root.right;
	let prev = bst.root;
	while (root.left !== null) {
		prev = root;
		root = root.left;
	}
	if (prev !== root) {
		prev.right = null;
	}
	return root.data || null;
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
	let root = bst.root;
	let prev = null;
	let iterator = [];
	let maxValue;
	iterator.unshift(root);
	while (root !== null || iterator.length !== 0) {
		root = iterator.shift() || null;
		// console.log(root !== null && root.data, data);
		if (root !== null && root.data === data) {
			// Perform deletion action

			if (root.left === null) {
				console.log("left null");
				console.log(prev, root);
				if (prev !== null) {
					if (prev.left === root) {
						prev.left = root.left;
					}
					if (prev.right === root) {
						prev.right = root.right;
					}
				} else bst.root = null;
				return;
			}
			if (root.right === null) {
				console.log("right null");
				if (prev !== null) {
					if (prev.left === root) {
						prev.left = root.left;
					}
					if (prev.right === root) {
						prev.right = root.right;
					}
				} else {
					bst.root = null;
				}
				return;
			}

			// maxValue = BST.minValueIterativeV1({ root: root.right });
			maxValue = BST.minDeleteIterativeV1({ root: root });
			console.log(maxValue);
			root.data = maxValue;
			return;
		} else {
			if (root !== null) {
				if (root.right !== null) iterator.unshift(root.right);
				if (root.left !== null) iterator.unshift(root.left);

				// Need to check parent
				// if (prev === null) {
				// 	prev = root;
				// } else if (prev.left !== root && prev.right === root) {
				// 	prev = root;
				// } else if (prev.left === root && prev.right !== root) {
				// 	// prev = root;
				// }
			}
		}
	}
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
BST.deletionItrativeV1(bst, 6);
BST.preOrderIterative(bst);
// console.log(BST.minValueIterativeV1(bst));
// console.log(BST.maxValueIterativeV1(bst));
