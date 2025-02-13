let str = "radhikardhi";

function nonRepeatingChar(str) {
  str = str.split("");
  let myObj = {};
  for (let i = 0; i < str.length; i++) {
    myObj[str[i]] ? myObj[str[i]]++ : (myObj[str[i]] = 1);
  }
  for (let char in myObj) {
    if (myObj[char] === 1) {
      return char;
    }
  }
  return false;
}

console.log(nonRepeatingChar(str));
