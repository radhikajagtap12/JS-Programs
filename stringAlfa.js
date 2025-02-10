function stringAlfa(str) {
  str = str.toLowerCase().split("");
  console.log(str);
  let myObj = {};
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      console.log(str[i]);
      return false;
    }
  }
  return true;
}
console.log(stringAlfa("aebc"));
