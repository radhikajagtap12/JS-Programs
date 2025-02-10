function factors(num) {
  let factor = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}
console.log(factors(5));
