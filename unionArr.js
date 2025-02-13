function arrayUnion(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  let newSet = [...new Set(arr3)];
  return newSet;
}

console.log(arrayUnion([1, 2, 3, 5, 6], [2, 3, 4])); // [1,2,3,4]
