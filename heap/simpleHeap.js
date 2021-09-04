/**
 * SimpleHeap is simple heap implementation with using hap data structure
 * Reference blog link:- https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/
 */

/**
 * Max-Heap Data Structure
 */
const MAXSIZE = 10;

function MaxHeap(arg) {
	this.count = 0;
	if (arg instanceof Array) {
		this.array = arg;
		this.count = arg.length;
		this.capacity = arg.length;
	} else if (arg instanceof Number) {
		this.capacity = arg || MAXSIZE;
		this.array = new Array(this.capacity);
	}
}
MaxHeap.prototype.printMaxHeap = function () {
	let str = "";
	for (let i = 0; i < this.count; i++) str += ` ${this.array[i]}`;
	console.log(str);
};
MaxHeap.prototype.buildMaxHeap = function () {
	console.log("count:- " + this.count);
	for (let i = MaxHeap.getParent(this.count); i >= 0; i--) {
		// Calling maxHeapify process
		console.log(i);
		this.maxHeapifyHeap(i);
	}
};
MaxHeap.getLeftChild = (i) => (i >= 0 ? 2 * i + 1 : -1);
MaxHeap.getRightChild = (i) => (i >= 0 ? 2 * i + 2 : -1);
MaxHeap.getParent = (i) => {
	if (i <= 0) return -1;
	else return Math.floor(Math.abs(i / 2));
};
MaxHeap.swap = (arr = [], i = 0, j = 0) => {
	if (arr.length > 0) {
		let temp = arr[i];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
};

MaxHeap.prototype.maxHeapifyHeap = function (location) {
	if (location) {
		let left = MaxHeap.getLeftChild(location);
		let right = MaxHeap.getRightChild(location);
		console.log(
			`location:- ${location}, left:- ${left} - Riht:- ${right} - count:- ${this.count} `
		);
		let max;

		// Comparing with left child and if it is compared to be greater then it will get replaced
		if (left < this.count && this.array[left] > this.array[location])
			max = left;
		else max = location;

		// Comparing wth right child and if it is compared to be greater then iy will replaced.
		if (right < this.count && this.array[right] > this.array[max]) max = right;

		console.log("Max:- ", max);

		if (max !== location) {
			// performing the swap operation
			MaxHeap.swap(this.array, max, location);
			// performing the max_heapify operation
			this.maxHeapifyHeap(max);
		}
	}
};

MaxHeap.prototype.insertMaxHeap = function (data) {
	let i;
	if (this.capacity === this.count) {
		console.log("Max-Heap is full");
	}
	this.count++;
	i = this.count - 1;
	// this.array[i] = data;
	while (
		i >= 0 &&
		MaxHeap.getParent(i) !== -1 &&
		data > this.array[MaxHeap.getParent(i)]
	) {
		this.array[i] = this.array[MaxHeap.getParent(i)];
		i = MaxHeap.getParent(i);
	}
	this.array[i] = data;
};

MaxHeap.prototype.deleteMax = function () {
	let data;
	if (this.count === 0) return -1;
	data = this.array[0];
	this.array[0] = this.array[this.count - 1];
	this.count--;
	// Keep  tree in Heap data structure nature
	this.maxHeapifyHeap(0);
};

const maxHeap = new MaxHeap(10);

maxHeap.insertMaxHeap(9);
// maxHeap.insertMaxHeap(99);
// maxHeap.insertMaxHeap(2);
// maxHeap.insertMaxHeap(90);
// maxHeap.insertMaxHeap(10);
// maxHeap.insertMaxHeap(8);
maxHeap.printMaxHeap();

// const maxHeap = new MaxHeap([9, 99, 2, 90, 10, 8]);
// maxHeap.printMaxHeap();
// maxHeap.buildMaxHeap();
// maxHeap.printMaxHeap();
