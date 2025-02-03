function stringCharOccurence(str) {
	const obj = {};
	let char;
	for (let i = 0; i < str.length; i++) {
		char = str[i];
		if (obj[char]) {
			obj[char] += 1;
		} else {
			obj[char] = 1;
		}
	}
	return obj;
}
console.log(stringCharOccurence("radhikadhumal")); // { r: 1, a: 3, d: 2, h: 2, i: 1, k: 1, u: 1, m: 1, l: 1 }
