/**
 * Binary BitManipulation:-
 * XOR and its properties
 *
 * -----------------
 * | X  |  Y   | Q |
 * -----------------
 * | 0  | 0    | 0 |
 * | 1  | 0    | 1 |
 * | 0  | 1    | 1 |
 * | 0  | 0    | 0 |
 * -----------------
 * Basic fundamentals
 * 1. A ^ 0 = A;
 * 2. A ^ A = 0;
 */
// Basic  Operation
// const x = 10;
// console.log(x ^ 0);
// console.log(x ^ x);
/**
 * leetcode
 * Question:- Given the array arr of positive integers
 *  and the array queries where queries[i] = [L(i),R(i)],
 * for each query i compute the XOR of  elements from
 * L(i) to R(i) (that is, arr[L(i)] xor arr[L(i+1)] xor ... xor arr[R(i)]).
 * Return an array containing the result for the given queries.
 *
 * Example:-1
 * Input:-
 * arr = [1, 3, 4, 8], queries
 * [[0,1],[1,2],[0,3],[3,3]]
 * Output:-
 * [2,7,14,8]
 */

function xorQueries(ar = [], queries) {
	const prefix = new Array(ar.length).fill(0);
	prefix[0] = ar[0];
	const rst = [];

	// Calculating the prefix array
	for (let i = 1; i < ar.length; i++) prefix[i] = prefix[i - 1] ^ ar[i];

	// Calculating the xor queries
	for (let i = 0; i < queries.length; i++) {
		const L = queries[i][0];
		const R = queries[i][1];

		if (L === 0) rst.push(prefix[R]);
		else rst.push(prefix[R] ^ prefix[L - 1]);
	}
	return rst;
}

const r = xorQueries(
	[1, 3, 4, 8],
	[
		[0, 1],
		[1, 2],
		[0, 3],
		[3, 3],
	]
);
console.log(r);
