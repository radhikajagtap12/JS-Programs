function charCount(str) {
  str = str.split(" ").join("").toLowerCase();
  str = str.split("");
  let myObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!myObj[str[i]]) {
      myObj[str[i]] = 0;
    }
    myObj[str[i]] = myObj[str[i]] + 1;
  }
  console.log(myObj[i]);
}
charCount("Radhika Dhumal");
