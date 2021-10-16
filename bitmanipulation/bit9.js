/**
 * Reference:-https://www.youtube.com/watch?v=shKgCtEAVWQ&list=PL2q4fbVm1Ik7ip1VkWwe5U_CEb93vw6Iu&index=14
 * Question:-
 * Consider two non-negative long integers,a and b, where a <= b. The bitwise AND of all long integers in the
 * inclusive range between 'a' and 'b' can be expressed as  "a+(a+1)& ... &(b-1)&b", where '&' is the bitwise AND
 * operator.
 * Given n pairs of long integers a[i] and b[i], compute and print the bitwise AND all natural numbers in the inclusive range
 * between a[i] and b[i].
 *
 * In order to understand the concept we need to understand the video correctly.
 */

function getAndingOfSequences(a, b) {
	const diff = b - a;
	let res = 0;
	const f = 1;
	for (let i = 0; i < 32; i++) {
		if (diff > f << i) continue;
		else {
			if (a & (f << i) && b & (f << i)) res += f << i;
		}
	}
	return res;
}

console.log(getAndingOfSequences(7, 12));
