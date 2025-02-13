// const areArraysEqual = (arr1, arr2) => {
//   console.log(JSON.stringify(arr1));
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// };

// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   arr1.sort();
//   arr2.sort();

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }

function areArraysEqual(arr1, arr2) {
  let newSet = new Set(arr1);
  //   console.log(newSet);
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (newSet.has(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(areArraysEqual([1, 2, 3, 2, 3, 4, 5], [1, 2, 3, 5])); // true
