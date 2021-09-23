/*
threadedBT:- Threaded Binary tree
References:-           
(For introduction)     1.https://iq.opengenus.org/threaded-binary-tree/
(for operation in TBT) 2.https://iq.opengenus.org/operations-in-threaded-binary-tree/
*/
function NodeTBT(data) {
	this.data = data;
	this.lthread = true; // default value is true becoz it indicate that there is thread(inorder predecessor of current node) ,not a child node.
	this.rthread = true; // default value is true becoz it indicate that there is thread(inorder successor of current node) ,not a child node.
	this.left = null;
	this.right = null;
}
NodeTBT.create = (data) => new NodeTBT(data);

function TBT() {
	this.root = null;
}
TBT.inorder = (tbt) => {
	let root = tbt.root;
	let ptr = root;
	let str = "";
	if (root === null) {
		console.log("Tree is empty");
		return;
	}
	// reach leftmost node
	while (ptr.lthread === false) ptr == ptr.left;

	// One by one print successors
	while (ptr !== null) {
		str += ptr.data;
		ptr = TBT.inorderSuccessor(ptr);
	}
};

TBT.inorderSuccessor = (node) => {
	if (node && node !== null) {
		// If rthread is set, we can qucikly find
		if (node.rthread === true) return ptr.right;
		// Else retrun leftmost child of right subtree
		ptr = ptr.right;
		while (ptr.lthread === false) {
			ptr = ptr.left;
			return ptr;
		}
	} else return null;
};
TBT.insert = (bst, key) => {
	// Searching for a Node with given value
	let ptr = bst.root;
	let par = null; // parent of key to be inserted
	while (ptr !== null) {
		// if key already exist, return
		if (key === ptr.data) {
			console.log("Duplicate key !\n");
			return root;
		}
		// updating the parent pointer
		par = ptr;

		// Moving on the left subtree.
		if (key < ptr.data) {
			if (ptr.lthread === false) ptr = ptr.left;
			else break;
		}
		// Moving on right subtree.
		else {
			if (ptr.rthread === false) ptr = ptr.right;
			else break;
		}
	}

	/**
	 * Creating new node.
	 * NodeTBT.create this methos will create node by setting all required default value
	 */
	const tmp = NodeTBT.create(key);

	if (par === null) bst.root = tmp;
	else if (key < par.data) {
		// that's mean a node to be inserted, is left child of parent
		temp.left = par.left;
		temp.right = par;
		par.lthread = false;
		par.left = temp;
	} else {
		// that's mean a node to be inserted, is right child of parent
		temp.right = par.right;
		temp.left = par;
		par.rthread = false;
		par.right = temp;
	}
};

TBT.delete = (bst, target) => {
	// Initialize the parent as Null and Node as root
	let par = null,
		ptr = bst.root;
	// Set true if key is found
	let found = false;

	// Search  key  is BST : find Node  and its  parent
	while (ptr !== null) {
		if (target === ptr.data) {
			found = true;
			break;
		}
		par = ptr;
		if (target < ptr.data) {
			if (ptr.lthread === false) ptr = ptr.left;
			else break;
		} else {
			if (ptr.rthread === false) ptr = ptr.right;
			else break;
		}
	}

	// if(!found)
};
