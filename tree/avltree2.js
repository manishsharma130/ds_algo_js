/**
 * For Basic Inserion operation we use this ref:- https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
 * for Basic Deletion operation we use this ref:- https://www.geeksforgeeks.org/avl-tree-set-2-deletion/
 */

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

AVLTree.height = (node) => {
	/**
	 * Height can be calcuated on the base of two things
	 * 1. By counting the number of nodes.
	 * 2. By counting the numner of edges from the given node to leaf node.
	 * case:-1
	 * single node will has height one (1) and null will has zero
	 * case:-2
	 * single node will has height zero (0) and null will has -1
	 */
	// This is the implementation of case-1
	if (node === null) return 0;
	return node.height;
};

AVLTree.rightRotation = function (z) {
	if (z?.left && z?.left !== null) {
		const y = z?.left;
		const t2 = y?.right;

		// rotation
		y.right = z;
		z.left = t2;

		// Update height
		z.height = Math.max(AVLTree.height(z.left), AVLTree.height(z.right));
		y.height = Math.max(AVLTree.height(y.left), AVLTree.height(y.right));
		return y;
	}
	return null;
};

AVLTree.leftRotation = function (z) {
	if (z?.right && z?.right !== null) {
		const y = z.right;
		const t2 = y.left;

		//perform rotation
		y.left = z;
		z.right = t2;

		// Update Heights
		z.height = Math.max(AVLTree.height(z.left), AVLTree.height(z.right));
		y.height = Math.max(AVLTree.height(y.left), AVLTree.height(y.right));
		return y;
	}
	return null;
};

AVLTree.getBalance = (n) => {
	if (n === null) return 0;
	return AVLTree.height(n.left) - AVLTree.height(n.right);
};

AVLTree.insert = (avl, key) => {
	const avlInsert = (node, data) => {
		// 1. Perform the normal BST insertion
		if (node === null) return Node.createNode(data);

		if (data < node.data) node.left = avlInsert(node.left, data);
		else if (data > node.data) node.right = avlInsert(node.right, data);
		// Duplicate Keys not allowed
		else return node;

		// 2. Update height of this ancestor node
		node.height =
			1 + Math.max(AVLTree.height(node.left), AVLTree.height(node.right));

		// 3. Get the balance factor of this ancestor node to check whether this node became unbalanced
		const balance = AVLTree.getBalance(node);

		// If this node becomes unbalanced, then there are 4 cases Left Left case
		if (balance > 1 && data < node.left.data)
			return AVLTree.rightRotation(node);

		// Right right Case
		if (balance < -1 && data > node.right.data)
			return AVLTree.leftRotation(node);

		// Left Right Case
		if (balance < -1 && data < node.right.data) {
			node.left = AVLTree.leftRotation(node.left);
			return AVLTree.rightRotation(node);
		}

		// Right Left Case
		if (balance < -1 && data < node.right.data) {
			node.right = AVLTree.rightRotation(node.right);
			return AVLTree.leftRotation(node);
		}
		// return the (unchanged) node pointer
		return node;
	};
	avl.root = avlInsert(avl.root, key);
};

AVLTree.minValue = (avl) => {
	const minValueNode = (node) => {
		let current = node;
		/** loop down to find the leftmost leaf */
		while (current.left !== null) current = current.left;
		return current;
	};
	return minValueNode(avl.root);
};

AVLTree.delete = (avl, key) => {
	const deleteNode = (node, data) => {
		// STEP 1: PERFORM STANDARD BST DELETE
		if (node === null) return node;
		// If the key to be deleted is smaller than
		// the root's key, then it lies in left subtree
		if (data < node?.data) node?.left = deleteNode(node?.left, data);
		// If the key to be deleted is greater than the
		// root's key, then it lies in right subtree
		else if (data > node?.data) node?.right = deleteNode(node.right, data);
		// if key is same as root's key, then this is the node
		// to be deleted
		else {
			// node with only one child or no child
			if (node?.left === null || node?.right === null) {
				let temp = null;
				if (temp === node?.left) temp = node?.right;
				else temp = node?.left;

				// No Child case
				if (temp === null) {
					temp = node;
					node = null;
				} else {
					// One Child case
					// Copy the contents of the non-empty child
					node = temp;
				}
			} else {
				// node with two children: Get the inorder
				// successor (smallest in the right subtree)
				let temp = AVLTree.minValue(node.right);

				// Copy the inorder successor's data to this node
				node.data = temp?.data;

                // Delete the inorder successor
                root.right = deleteNode(node?.right, temp.data);

			}
		}

      // If the tree had only one node then return
	  if(node === null)
	  return node;

	// STEP 2: UPDATE HEIGHT OF THE CURRENT NODE
	node.height = Math.max(AVLTree.height(node.left), AVLTree.height(node.right)) + 1;

	 // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether
    // this node became unbalanced)
	let balance = getBalance(node);

	// If this node becomes unbalanced, then there are 4 cases
   // Left Left Case
   if (balance > 1 && AVLTree.getBalance(node.left) >= 0)
    return rightRotate(node);

	// Left Right Case
	if(balance > 1 && AVLTree.getBalance(node.left)<0){
node.left = AVLTree.leftRotation(node.left);
return (AVLTree.rightRotation(node));
	}

// Right Right Case
if(balance< -1 && AVLTree.getBalance(node.right)<=0)
	return AVLTree.leftRotation(node);

// Right Left Case
if(balance < -1 && AVLTree.getBalance(node.right)>0){
	node.right = AVLTree.rightRotation(root.right);
	return (AVLTree.leftRotation(node));
}
 
return node;

	};
	deleteNode(avl.root, key);
};

AVLTree.preOrder = (avl) => {
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
	// display(avl.root);
	console.log(display(avl.root));
};

const avl1 = new AVLTree();
const inputs = [10, 20, 30, 40, 50, 25];
inputs.map((value) => AVLTree.insert(avl1, value));
AVLTree.preOrder(avl1);
// console.log(avl1.root.data);
