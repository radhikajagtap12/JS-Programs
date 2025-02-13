let arr = [1, 2, 3, 4, 1, 1, 3, 3, 9, 3, 4, 1, 8, 5, 6, 5, 6, 8, 9, 6, 4, 3, 2];

function elemCount(arr) {
  let count = {};
  arr.forEach((num) => (count[num] = (count[num] || 0) + 1));
  //   for (let i = 0; i < arr.length; i++) {
  //     count[arr[i]] ? count[arr[i]]++ : (count[arr[i]] = 1);
  //   }
  console.log(count);
}
elemCount(arr);
