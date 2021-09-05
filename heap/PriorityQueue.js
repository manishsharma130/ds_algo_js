// PriorityQueue
/**
 * For the Implementation we are using max-heap Data structure
 * PriorityQueue Operation
 * 1. maximum(arr):- "It returns maximum element from the arr"
 * 2. extractMaximum(arr):- "It removes and return the maximum element from the arr"
 * 3. increaseVal(arr,i,val):- "It increases the key of element stored at index i in Arr to new value val."
 * 4. insertVal(arr,val):- " It inserts the element with value val in arr."
 */
/* Basic Max-Heap Operation
1. maxHeapify
2. swap
3. getLeftChild
4. getRightChild
4. getParentChild
5. isLeafChild
6. buildMaxHeap
*/
function MaxHeap() {}

MaxHeap.getLeftChild = (location) => (location >= 0 ? location * 2 + 1 : -1);
MaxHeap.getRightChild = (location) => (location >= 0 ? location * 2 + 2 : -1);
MaxHeap.getParentChild = (location) =>
	location > 0 ? Math.floor(Math.abs((location - 1) / 2)) : -1;
MaxHeap.isLeafChild = (count, child) => {
	if (child >= 0 && count > child)
		return !(
			MaxHeap.getLeftChild(child) < count &&
			MaxHeap.getRightChild(child) < count
		);
	else return false;
};
MaxHeap.swap = (arr = [], i = 0, j = 0) => {
	if (arr.length > 0 && i >= 0 && (j >= 0) & (i !== j)) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
};

MaxHeap.maxHeapify = (arr, location) => {
	if (location >= 0) {
		const N = arr.length;
		const left = MaxHeap.getLeftChild(location);
		const right = MaxHeap.getRightChild(location);
		let max;
		if (left < N && arr[left] > arr[location]) max = left;
		else max = location;

		if (right < N && arr[right] > arr[max]) max = right;

		if (max !== location) {
			MaxHeap.swap(arr, max, location);
			// This check is just to reduce extra call in heapify process
			if (!MaxHeap.isLeafChild(arr.length, max)) MaxHeap.maxHeapify(arr, max);
		}
	}
};

MaxHeap.buildMaxHeap = (arr = []) => {
	for (let i = MaxHeap.getParentChild(arr.length - 1); i >= 0; i--) {
		// Calling maxHeapify process
		MaxHeap.maxHeapify(arr, i);
	}
	return arr;
};

/**
 * Priority Queue Implementation start
 */
function PriorityQueue() {}
PriorityQueue.getMaximum = (arr = []) => {
	if (arr.length > 0) return arr[0];
	else return -1;
};

PriorityQueue.getExtractMaximum = (arr = []) => {
	if (arr.length == 0) return -1;

	let max = arr[0];
	arr[0] = arr[arr.length - 1];
	arr.length = arr.length - 1;
	if (arr.length > 1) MaxHeap.maxHeapify(arr, 0);
	return max;
};

PriorityQueue.increaseValue = (arr = [], i, val) => {
	if (i !== 0 && val !== undefined)
		if (val < arr[i]) {
			console.log("New value is less than current value, can't be inserted");
			return;
		}
	arr[i] = val;
	while (i > 0 && arr[MaxHeap.getParentChild(i)] < arr[i]) {
		MaxHeap.swap(arr, i, MaxHeap.getParentChild(i));
		i = MaxHeap.getParentChild(i);
	}
};

PriorityQueue.insertValue = (arr, val) => {
	arr.length = arr.length + 1;
	arr[arr.length - 1] = -1; //assuming all the numbers greater than 0 are to be inserted in queue.;
	PriorityQueue.increaseValue(arr, arr.length - 1, val);
};

/**
 * [82, 32, 3, 1, 332]
 * [1, 2, 3, 7, 8]
 * [1, 4, 3, 7, 8]
 */
const heap = [1, 2, 3, 7, 8];
console.log(MaxHeap.buildMaxHeap(heap));

PriorityQueue.insertValue(heap, 10);

console.log(heap);
// PriorityQueue.getExtractMaximum(heap);
// console.log(heap);
// PriorityQueue.getExtractMaximum(heap);
// console.log(heap);

// PriorityQueue.getExtractMaximum(heap);
// console.log(heap);

// PriorityQueue.getExtractMaximum(heap);
// console.log(heap);

PriorityQueue.increaseValue(heap, 3, 33);
console.log(heap);

// PriorityQueue.getExtractMaximum(heap);
// console.log(heap);
