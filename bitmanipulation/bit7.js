/**
 * Binary BitManipulation
 * Minimum Flips to make A OR B equal C
 */

function minFlipBits(a, b, c) {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		let x = (y = z = false);
		if (a & (1 << i)) x = true;
		if (b & (1 << i)) y = true;
		if (c & (1 << i)) z = true;

		if (z === false) {
			if ((x === true) & (y === true)) res += 2;
			else if (x === true || y === true) res++;
		} else {
			if (x === false && y === false) res++;
			else if (x === true && y === true) res++;
		}
	}
	return res;
}

console.log(minFlipBits(5, 2, 3));
