function arrayIntersection(arr1, arr2) {
  let newSet = new Set(arr1);
  let newArr = [];

  arr2.forEach((num) => {
    if (newSet.has(num)) {
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 3, 4, 5])); // [2,3]
