function findMissing(arr, num) {
  let count = arr.reduce((acc, curr) => {
    return (acc = acc + curr);
  }, 0);

  let result = (num * (num + 1)) / 2 - count;

  return result;
}
console.log(findMissing([1, 2, 3, 4, 5], 6)); // 3
