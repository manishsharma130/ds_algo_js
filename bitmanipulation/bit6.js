/**
 * Pair Sum XOR of an Array
 * Example:-1
 * 2,4,1
 * => (2+2)^(2+4)^(2+1)^
 *    (2+4)^(4^4)^(4+1)^
 *    (2+1)^(1+4)^(1+1)
 * => 14
 *
 * By Obervation we get one point ,
 * Only diagonal element will remain for
 * calculation becoz while doing XOR of
 * al elements will get cancelled
 * so we need to do XOR of diagonal only.
 *
 *  --- --- ---
 * | 4 | 6 | 3 |
 * | 6 | 8 | 5 |
 * | 3 | 5 | 2 |
 *  ___ ___ ___
 *
 * As per observation we have,
 * => 4 ^ 8 ^ 2
 * => 14
 */

const getAllPairSumXOR = (arr = []) =>
	arr.reduce((i1, i2, index) => i1 ^ (i2 * 2), 0);

console.log(getAllPairSumXOR([2, 4, 1]));
