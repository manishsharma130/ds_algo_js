/**
 * Counting Number of Set Bits
 * References:- https://www.youtube.com/watch?v=_o7QBzM33J0&list=PL2q4fbVm1Ik7ip1VkWwe5U_CEb93vw6Iu&index=4
 */

// Basic Manipulation type:-1
function countSetBits(n) {
	// Time complexity is O(logn)
	let count = 0;
	// let loopCount = 0;
	while (n > 0) {
		// loopCount++;
		if ((n & 1) > 0) count++;
		n = n >> 1;
	}
	// console.log("loopCount:- ", loopCount);
	return count;
}
// Basic Manipulation type-2
function countSetBits1(n) {
	// Time complexity:- O(longn)
	// This one is much better than above one becoz it will not run more than number of nits it has
	let count = 0;
	// let loopCount = 0;
	while (n > 0) {
		// loopCount++;
		count++;
		n = n & (n - 1);
	}
	// console.log("loopCount:- ", loopCount);
	return count;
}

console.log(countSetBits1(10));
/**
 * Count number of set bit of non-integer n for 0 to n
 */
function getSetBitCounts(n) {
	const rst = [];
	for (i = 0; i <= n; i++) {
		rst.push(countSetBits1(i));
	}
	return rst;
}

console.log(getSetBitCounts(2));
