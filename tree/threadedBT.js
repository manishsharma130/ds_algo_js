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
	while (ptr && ptr !== null) {
		str += `${ptr?.data || ""} `;
		ptr = TBT.inorderSuccessor(ptr);
	}
	console.log(str);
};

TBT.inorderSuccessor = (node) => {
	if (node && node !== null) {
		// If rthread is set, we can qucikly find
		if (node.rthread === true) return node.right;
		// Else retrun leftmost child of right subtree
		node = node.right;
		while (node.lthread === false) {
			node = node.left;
		}
		return node;
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
		tmp.left = par.left;
		tmp.right = par;
		par.lthread = false;
		par.left = tmp;
	} else {
		// that's mean a node to be inserted, is right child of parent
		tmp.right = par.right;
		tmp.left = par;
		par.rthread = false;
		par.right = tmp;
	}
};

TBT.inSucc = (ptr) => {
	if (ptr.rthread === true) return ptr.right;
	ptr = ptr.right;
	while (ptr.lthread === false) ptr = ptr.left;
	return ptr;
};
TBT.inPred = (ptr) => {
	if (ptr.lthread === true) return ptr.left;
	ptr = ptr.left;
	while (ptr.rthread == false) ptr = ptr.right;
	return ptr;
};

TBT.case1 = (bst, par, ptr) => {
	if (par === null) {
		bst.root = null;
	}
	//If Node to be deleted is left of its parent
	else if (ptr === par.left) {
		par.lthread = true;
		par.left = ptr.left;
	} else {
		par.rthread = true;
		par.right = ptr.right;
	}
};

TBT.case2 = (bst, par, ptr) => {
	let child;

	// Initialize child Node to be deleted has left child
	if (ptr.lthread === false) child = ptr.left;
	else child = ptr.right;

	// Node is left  child of its parent
	if (par === null) bst.root = child;
	// Node is left child of its parent
	else if (ptr === par.left) par.left = child;
	else par.left = child;

	// Find Successor and Predecessor

	let s = TBT.inSucc(ptr);
	let p = TBT.inPred(ptr);

	// If ptr has left subtree
	if (ptr.lthread === false) p.right = s;
	else s.left = p;
};

TBT.case3 = (bst, par, ptr) => {
	let parsucc = ptr;
	let succ = ptr.right;

	// Find leftmost child of successor
	while (succ.lthread === false) {
		parsucc = succ;
		succ = succ.left;
	}
	ptr.data = succ.data;

	if (succ.lthread === true && succ.rthread === true) {
		TBT.case1(bst, parsucc, succ);
	} else {
		TBT.case2(bst, parsucc, succ);
	}
};

TBT.delete = (bst, target) => {
	// Initialize the parent as Null and Node as root
	let par = null;
	let ptr = bst.root;
	// Set true if key is found
	let found = false;

	// Search  key in BST : find Node and its parent
	// Parent.
	while (ptr && ptr !== null) {
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
	/**
	 *  Applying different cases here
	 */
	if (!found) {
		console.log("target not present in tree");
	} else if (ptr.lthread === false && ptr.rthread === false) {
		bst.root = TBT.case3(bst, par, ptr);
	} else if (ptr.lthread === false) {
		bst.root = TBT.case2(bst, par, ptr);
	} else if (ptr.rthread === false) {
		bst.root = TBT.case2(bst, par, ptr);
	} else {
		TBT.case1(bst, par, ptr);
	}
};

const tbt1 = new TBT();

TBT.insert(tbt1, 1);
TBT.insert(tbt1, 3);
TBT.insert(tbt1, 5);
TBT.insert(tbt1, 7);
TBT.insert(tbt1, 12);
TBT.insert(tbt1, 2);
TBT.insert(tbt1, 10);
TBT.insert(tbt1, 6);

TBT.inorder(tbt1);
TBT.delete(tbt1, 6);
TBT.inorder(tbt1);
TBT.insert(tbt1, 6);
TBT.inorder(tbt1);