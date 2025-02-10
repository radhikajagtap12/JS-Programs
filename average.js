function average(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  let average = sum / num.length;

  return average;
}

console.log(average([10, 20])); // NaN
