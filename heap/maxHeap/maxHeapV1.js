const MAXSIZE = 10;

function MaxHeap(arg = []) {
	let capacity;
	if (typeof arg === "number") capacity = arg > 0 ? arg : MAXSIZE;

	this.count = 0;
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

MaxHeap.prototype.swap = function (i, j) {
	if (i !== undefined && j !== undefined) {
		console.log(i, j);
		let temp = this.array[i];
		this.array[i] = this.array[j];
		this.array[j] = temp;
	}
};

MaxHeap.HeapSort = function (arr = []) {
	/*
By passing array we can convert in to sort array using heap
*/
	let heap = MaxHeap.BuildHeap(arr);
	for (let i = heap.capacity - 1; i > 0; i--) {
		heap.swap(0, i);
		heap.count--;
		heap.precolateDown(0);
	}
	heap.count = arr.length;
	return heap;
};

MaxHeap.BuildHeap = (arr = []) => {
	if (arr.length > 0) {
		let n = arr.length;
		let heap = new MaxHeap(arr);
		for (let i = 0; i < n; i++) heap.array[i] = arr[i];
		heap.count = n;
		for (let i = heap.parent(n); i >= 0; i--) heap.precolateDown(i);
		return heap;
	}
	return null;
};

MaxHeap.prototype.parent = function (i) {
	if (i <= 0) return -1;
	else return Math.floor(Math.abs((i - 1) / 2));
};

MaxHeap.prototype.leftChild = function (i) {
	let left = 2 * i + 1;
	if (left >= this.count) return -1;
	else return left;
};
MaxHeap.prototype.rightChild = function (i) {
	let right = 2 * i + 2;
	if (right >= this.count) return -1;
	else return right;
};

MaxHeap.prototype.getMaximum = function () {
	if (this.count === 0) return -1;
	else return this.array[0];
};

// Heapifying the element at location
MaxHeap.prototype.precolateDown = function (location) {
	let l, r, max, temp;
	l = this.leftChild(location);
	r = this.rightChild(location);
	if (l !== -1 && this.array[l] && this.array[l] > this.array[location])
		max = l;
	else max = location;

	if (r !== -1 && this.array[r] && this.array[r] > this.array[max]) max = r;

	if (max !== location) {
		temp = this.array[location];
		this.array[location] = this.array[max];
		this.array[max] = temp;
		this.precolateDown(max);
	}
};

MaxHeap.prototype.deleteMax = function () {
	let data;
	if (this.count === 0) return -1;
	data = this.array[0];
	this.array[0] = this.array[this.count - 1];
	this.count--;
	this.precolateDown(0);
	return data;
};

MaxHeap.prototype.insert = function (data) {
	let i;
	if (this.count === this.capacity) {
		console.log("Heap is full");
		return;
	}
	this.count++;
	i = this.count - 1;
	while (i >= 0 && data > this.array[this.parent(i)]) {
		this.array[i] = this.array[this.parent(i)];
		i = this.parent(i);
	}
	this.array[i] = data;
};

MaxHeap.prototype.printMaxHeap = function () {
	let str = "";
	for (let i = 0; i < this.count; i++) str += ` ${this.array[i]}`;

	console.log(str.trim());
};

const mheap = new MaxHeap();

// mheap.insert(10);
// mheap.insert(20);
// mheap.insert(30);
// mheap.insert(40);
// mheap.insert(50);

// mheap.printMaxHeap();
// console.log(mheap.getMaximum());
// Deleting the mac and all coming in sorted way
// console.log(mheap.deleteMax());
// console.log(mheap.deleteMax());
// console.log(mheap.deleteMax());
// console.log(mheap.deleteMax());
// console.log(mheap.deleteMax());
mheap.printMaxHeap();

// Build Heap operation
console.log("Build Heap operation");
let h = MaxHeap.BuildHeap([10, 20, 30, 40, 80]);

h.printMaxHeap();

// console.log(mheap.getMaximum());

console.log("Heap Sort");

let hp = MaxHeap.HeapSort([2, 2, 3, 40, 4, 4]);
hp.printMaxHeap();
