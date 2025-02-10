function armstrong(num) {
  num = num.toString().split("");
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i]);
    let power = Math.pow(n, num.length);
    // console.log(power);
    result = result + power;
  }
  console.log(parseInt(num.join("")));
  if (result === parseInt(num.join(""))) {
    return true;
  }
  return false;
}

console.log(armstrong(92727));
