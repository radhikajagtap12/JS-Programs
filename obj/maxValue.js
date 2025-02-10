const myObj = {
  a: 1,
  b: 20,
  c: 40,
  d: 90,
  e: 30,
  f: 40,
  g: 60,
};
let maxVal = 0;
let maxKey = null;
for (let [key, val] of Object.entries(myObj)) {
  if (val > maxVal) {
    maxVal = val;
    maxKey = key;
  }
}
console.log(maxKey, maxVal);
