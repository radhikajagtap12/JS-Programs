function numPyr(num) {
  for (let i = 1; i <= num; i++) {
    let allSpace = "";
    for (let space = 1; space <= num - i; space++) {
      allSpace = allSpace + " ";
    }
    for (let j = 1; j <= i; j++) {
      allSpace = allSpace + j;
    }
    for (let reverseNum = i - 1; reverseNum >= 1; reverseNum--) {
      allSpace = allSpace + reverseNum;
    }
    console.log(allSpace);
  }
}
numPyr(5);
