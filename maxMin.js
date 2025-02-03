let arr = [1,2,3,5,6,8,0];


// let max = Math.max(...arr);
// console.log(max);

let min = Math.min(...arr);
console.log(min);
let max = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);
let minNum = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < minNum){
        minNum = arr[i];
    }
}
console.log(minNum);


// let maxNum = (...arr.reduce((max, curr) => max = max > arr[curr], 0))
// console.log('Max Num' + maxNum);

// let minNum = ((...arr).reduce((min, curr) => min = min < curr, 0))
// console.log('Min Num' + maxNum);