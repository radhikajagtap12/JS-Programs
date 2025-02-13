let arr = [111, 3, 2, 97, 10, 22, 1, 999];
function maxElem(myArr) {
  let minVal = 1;

  for (let i = 0; i < myArr.length; i++) {
    if (minVal > myArr[i]) {
      minVal = myArr[i];
    }
  }
  console.log(minVal);
}
maxElem(arr);
