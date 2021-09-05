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
	} else if (typeof arg === "number") {
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
	for (let i = MaxHeap.getParent(this.count - 1); i >= 0; i--) {
		// Calling maxHeapify process
		this.maxHeapifyHeap(i);
	}
};
MaxHeap.getLeftChild = (i) => (i >= 0 ? 2 * i + 1 : -1);
MaxHeap.getRightChild = (i) => (i >= 0 ? 2 * i + 2 : -1);
MaxHeap.getParent = (i) => {
	if (i <= 0) return -1;
	else return Math.floor(Math.abs((i - 1) / 2));
};
MaxHeap.swap = (arr = [], i = 0, j = 0) => {
	if (arr.length > 0) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

MaxHeap.prototype.isLeaf = function (node) {
	if (node >= 0) {
		return !(
			MaxHeap.getLeftChild(node) < this.count &&
			MaxHeap.getRightChild(node) < this.count
		);
	} else return false;
};

MaxHeap.prototype.maxHeapifyHeap = function (location) {
	if (location >= 0) {
		let left = MaxHeap.getLeftChild(location);
		let right = MaxHeap.getRightChild(location);
		let max;

		// Comparing with left child and if it is compared to be greater then it will get replaced
		if (left < this.count && this.array[left] > this.array[location])
			max = left;
		else max = location;
		// Comparing wth right child and if it is compared to be greater then iy will replaced.
		if (right < this.count && this.array[right] > this.array[max]) {
			max = right;
		}

		if (max !== location) {
			// performing the swap operation
			MaxHeap.swap(this.array, max, location);
			// performing the max_heapify operation
			if (!this.isLeaf(max)) this.maxHeapifyHeap(max);
		}
	}
};

MaxHeap.prototype.insertMaxHeap = function (data) {
	let i;
	if (this.capacity === this.count) 
		console.log("Max-Heap is full");
	
	this.count++;
	i = this.count - 1;
	// console.log(`New Insertion:- ${data} at index ${i} and its parent:- ${MaxHeap.getParent(i)}`);
	while (i >= 0 && data > this.array[MaxHeap.getParent(i)]) {
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

MaxHeap.HeapSort = (arr=[])=>{
	const heap = new MaxHeap(arr);
heap.buildMaxHeap();
for(let i =heap.count-1;i>=0;i--){
	MaxHeap.swap(heap.array,0,i);
	heap.count = heap.count-1;
    heap.maxHeapifyHeap(0);
}
heap.count = arr.length;
heap.printMaxHeap();
return heap.array;
};


// const maxHeap = new MaxHeap(10);

// maxHeap.insertMaxHeap(1);
// maxHeap.insertMaxHeap(4);
// maxHeap.insertMaxHeap(3);
// maxHeap.insertMaxHeap(7);
// maxHeap.insertMaxHeap(8);
// maxHeap.insertMaxHeap(9);
// maxHeap.insertMaxHeap(10);
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();
// maxHeap.deleteMax();
// maxHeap.printMaxHeap();


MaxHeap.HeapSort([99,23,233,2,34,100,3,4,554,2,2,2])



// console.log("Next Arr");
// const maxHeap1 = new MaxHeap([1, 4, 3, 7, 8, 9, 10]);
// maxHeap1.printMaxHeap();
// maxHeap1.buildMaxHeap();
// maxHeap1.printMaxHeap();



// const maxHeap = new MaxHeap([9, 99, 2, 90, 10, 8]);
// maxHeap.printMaxHeap();
// maxHeap.buildMaxHeap();
// maxHeap.printMaxHeap();
