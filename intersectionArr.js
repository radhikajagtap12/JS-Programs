const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++) {
	for (let j = 0; j < arr2.length; j++) {
		if (arr1[i] === arr2[j]) {
			console.log(arr1[i]);
		}
	}
}
