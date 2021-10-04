/* BalancedBinaryTree
 * In this file we are gonna learn how to check binary tree balanced or not.
 */

function Node(data = null) {
	this.data = data;
	this.left = null;
	this.right = null;
}

Node.createNode = (data) => new Node(data);

function BST() {
	this.root = null;
}
function Height() {
	this.height = 0;
}

BST.insert = (bst, value) => {
	const insertIntoBST = (node, data) => {
		if (node === null)
			// This mean tree is empty
			return Node.createNode(data);
		else {
			if (data <= node.data)
				// left subtree will be called
				node.left = insertIntoBST(node.left, data);
			// right subtree will be called
			else node.right = insertIntoBST(node.right, data);
			return node;
		}
	};
	bst.root = insertIntoBST(bst.root, value);
	return;
};

BST.preOrder = (bst) => {
	let str = "";
	const preOrderPrint = (node) => {
		if (node === null) return;
		str += ` ${node.data}, `;
		preOrderPrint(node.left);
		preOrderPrint(node.right);
	};
	preOrderPrint(bst.root);
	console.log(str);
	return;
};

BST.checkHeightBalance = (bst, h) => {
	const checkBalanceHeight = (node, ht) => {
		if (node === null) {
			ht.height = 0;
			return true;
		}

		const leftHeighteight = new Height();
		const rightHeighteight = new Height();

		const l = checkBalanceHeight(node.left, leftHeighteight);
		const r = checkBalanceHeight(node.right, rightHeighteight);

		ht.height =
			(leftHeighteight.height > rightHeighteight.height
				? leftHeighteight.height
				: rightHeighteight.height) + 1;
		if (Math.abs(leftHeighteight.height - rightHeighteight.height) >= 2)
			return false;
		else return l && r;
	};
	return checkBalanceHeight(bst.root, h);
};

const height = new Height();
const bbt = new BST();
BST.insert(bbt, 1);
BST.insert(bbt, 2);
BST.insert(bbt, 3);
BST.insert(bbt, 4);
BST.insert(bbt, 5);
BST.preOrder(bbt);

if (BST.checkHeightBalance(bbt, height)) {
	console.log("Tree is balanced:- ", height.height);
} else {
	console.log("Tree is not balanced:- ", height.height);
}
