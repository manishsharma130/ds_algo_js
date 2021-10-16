/**
 * How to check ith bit is set or not
 */

const checkIthBit = (n, i) => (n & (1 << i)) !== 0;

console.log(checkIthBit(8, 3));
