let arr = [1,2,3,4,5];
let sum = 0;
// for(let i = 0; i <= arr.length; i++){
//     sum = sum + i;    
// }
const result = arr.reduce((acc, cur) => acc = acc + cur, 0);
console.log(result);