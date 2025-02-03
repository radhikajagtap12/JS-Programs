function wordCapital(str) {
	str = str.split(" ");
	let newStr = "";
	let newArr = [];
	for (let i = 0; i < str.length; i++) {
		newStr = str[i];
		newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
		newArr.push(newStr);
	}

	return newArr.join(" ");
}

console.log(wordCapital("hey hi radhika dhumal"));
console.log("radhika dhuml");
