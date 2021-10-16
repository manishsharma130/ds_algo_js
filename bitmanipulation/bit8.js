/**
 * Binary BitManiplation
 * Given a non empty array of integer, every element appears three times except for one, which
 * appears exactly once. Find that single one?.
 * Example:-1
 * I/P:- A = {5,8,2,2,8,5,8,3,5,2}
 * O/P:- 3
 */

const ARCH_INT = 32;
function getSingleNumber(arr = []) {
	let rst = "Not Found";
	const f = new Array(32).fill(0);
	arr.map((num, index) => {
		for (let i = 0; i < ARCH_INT; i++) {
			if ((num & (1 << i)) !== 0) f[i]++;
		}
	});
	for (let i = 0; i < ARCH_INT; i++) {
		if (typeof rst === "string") rst = 0;
		if (f[i] % 3 === 1) rst += 1 << i;
	}
	return rst;
}

console.log(getSingleNumber([2, 2, 2, 3, 5, 6, 5, 5, 6, 6]));
