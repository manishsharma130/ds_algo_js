const MAXSIZE = 10;

function MinHeap(arg = []) {
	let capacity;
	if (typeof arg === "number") capacity = arg > 0 ? arg : MAXSIZE;
	else capacity = MAXSIZE;

	this.count = Array.isArray(arg) && arg.length > 0 ? arg.length : 0;
	this.capacity = capacity ? capacity : arg.length;
	try {
		this.array = Array.isArray(arg)
			? arg
			: new Array(this.capacity).fill(undefined);
	} catch (e) {
		this.array = null;
		console.log("Memory Error: ", e);
	}
}

MinHeap.prototype.swap = function (i, j) {
	if (i !== undefined && j !== undefined) {
		let temp = this.array[i];
		this.array[i] = this.array[j];
		this.array[j] = temp;
	}
};

MinHeap.MinHeapSort = function (arr = []) {
	let heap = MinHeap.BuildMinHeap(arr);
	heap.printMinHeap();
	let n = heap.count - 1;
	for (let i = n; i > 0; i--) {
		heap.swap(0, i);
		heap.count--;
		heap.precolateDown(0);
	}
	heap.count = arr.length;
	return heap;
};

MinHeap.BuildMinHeap = function (arr = []) {
	if (arr.length > 0) {
		let n = arr.length;
		let heap = new MinHeap(arr);
		for (let i = 0; i < n; i++) heap.array[i] = arr[i];
		heap.count = n;
		for (let i = heap.parent(n - 1); i >= 0; i--) heap.precolateDown(i);
		return heap;
	}
	return null;
};

MinHeap.prototype.precolateDown = function (location) {
	let l, r, min;
	l = this.leftChild(location);
	r = this.rightChild(location);
	if (l !== -1 && this.array[l] && this.array[l] < this.array[location])
		min = l;
	if (r !== -1 && this.array[r] && this.array[r] < this.array[min]) min = r;
	if (min !== location) {
		this.swap(min, location);
		this.precolateDown(min);
	}
};

MinHeap.prototype.parent = function (i) {
	if (i <= 0) return -1;
	else return Math.floor(Math.abs((i - 1) / 2));
};

MinHeap.prototype.leftChild = function (i) {
	let left = 2 * i + 1;
	if (left >= this.count) return -1;
	else return left;
};
MinHeap.prototype.rightChild = function (i) {
	let right = 2 * i + 2;
	if (right >= this.count) return -1;
	else return right;
};

MinHeap.prototype.getMinimum = function () {
	if (this.count === 0) return -1;
	else return this.array[0];
};

MinHeap.prototype.deleteMin = function () {
	let data;
	if (this.count === -1) return -1;
	data = this.array[0];
	this.array[0] = this.array[this.count - 1];
	this.count--;
	this.precolateDown(0);
};

MinHeap.prototype.insert = function (data) {
	let i;
	if (this.count === this.capacity) {
		return;
	}
	this.count++;
	this.array[this.count - 1] = data;
	i = this.count - 1;
	while (i >= 0 && data < this.array[this.parent(i)]) {
		this.array[i] = this.array[this.parent(i)];
		i = this.parent(i);
	}
	this.array[i] = data;
};

MinHeap.prototype.printMinHeap = function () {
	let str = "";
	for (let i = 0; i < this.array.length; i++) str += ` ${this.array[i]}`;
	console.log(str);
};

const minH1 = new MinHeap();

// minH1.insert(10);
// minH1.insert(20);
// minH1.insert(30);
// minH1.insert(40);
// minH1.insert(50);

// minH1.printMinHeap();

console.log("Min Heap Sort");
MinHeap.BuildMinHeap([50, 20, 10, 40, 10]).printMinHeap();

MinHeap.MinHeapSort([50, 20, 10, 40, 10]).printMinHeap();
