function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
	this.height = 1;
}
Node.createNode = (data) => new Node(data);

function AVLTree() {
	this.root = null;
}

// Right Rotation case
AVLTree.rightRotation = (c) => {
	if (c?.left !== null) {
		let b = c?.left;
		let T3 = b?.right || null;
		// console.log("T3 :- ", b, T3);
		// Rotate
		b.right = c;
		c.left = T3;

		// ht update
		c.height = Math.max(AVLTree.height(c.left), AVLTree.height(c.right)) + 1;
		b.height = Math.max(AVLTree.height(b.left), AVLTree.height(b.right)) + 1;
		return b;
	}
	return c;
};

// Left Rotation case

AVLTree.leftRotation = (c) => {
	if (c?.right !== null) {
		let b = c?.right;
		let T2 = b?.left;

		// Rotate
		b.left = c;
		c.right = T2;

		// ht update
		c.height = Math.max(AVLTree.height(c.left), AVLTree.height(c.right)) + 1;
		b.height = Math.max(AVLTree.height(b.left), AVLTree.height(b.right)) + 1;
		return b;
	}
	return c;
};

AVLTree.bf = (node) => {
	if (node === null) return 0;
	return AVLTree.height(node.left) - AVLTree.height(node.right);
};

AVLTree.height = (node) => {
	if (node === null) return 0;
	return node.height;
};

AVLTree.prototype.insert = function (elem) {
	// That's a private function for inserting the data into AVL
	const insertInAVL = (node, data) => {
		if (node === null) return Node.createNode(data);
		if (data > node.data) {
			node.right = insertInAVL(node.right, data);
		} else if (data < node.data) {
			node.left = insertInAVL(node.left, data);
		}

		// updating the node height
		node.height =
			Math.max(AVLTree.height(node.left), AVLTree.height(node.right)) + 1;
		const bf = AVLTree.bf(node);

		// LL case
		if (bf > 1 && data < node?.left?.data) {
			return AVLTree.rightRotation(node);
		}
		// RR case
		if (bf < -1 && data > node?.right?.data) {
			return AVLTree.leftRotation(node);
		}
		// LR case
		if (bf > 1 && data > node?.left?.data) {
			node.left = AVLTree.leftRotation(node.left);
			return AVLTree.rightRotation(node.right);
		}
		// RL case
		if (bf < -1 && data < node?.right?.data) {
			node.right = AVLTree.rightRotation(node.right);
			return AVLTree.leftRotation(ndoe);
		}

		return node;
	};
	this.root = insertInAVL(this.root, elem);
};

AVLTree.prototype.preOrder = function () {
	const display = function (root) {
		// N L R :--> this is the traversal order
		let str = "";
		if (root) {
			const lstr = display(root.left);
			const rstr = display(root.right);
			str = `${root.data}${lstr ? ", " + lstr : ""}${rstr ? ", " + rstr : ""}`;
		}
		return str;
	};
	console.log(display(this.root));
};

AVLTree.prototype.display = function () {
	const printAVLTraveral = (node) => {
		if (node === null) return;
		// self work
		let str = "";
		if (node.left === null) str += ".";
		else str += node.left.data;

		str += " => " + node?.data + " <= ";
		if (node.right === null) str += ".";
		else str += node?.right?.data;

		console.log(str);
		printAVLTraveral(node.left);
		printAVLTraveral(node.right);
	};
	printAVLTraveral(this.root);
};

const avl1 = new AVLTree();
const inputArray = [20, 25, 30, 10, 5, 15, 27, 19, 16];
inputArray.map((item) => {
	avl1.insert(item);
});
avl1.display();
// avl1.preOrder();
// console.log(avl1);
