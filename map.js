// Map
const arr = [5, 18, 4, 6, 7, 8, 10, 12];

const result = arr.map((x) => {
    return x * 2;
});

console.log(result);

// reduce

const sum = arr.reduce((acc, curr) => {
    return acc = acc + curr;
    return console.log('acc ' + acc);
    return console.log('curr ' + curr);
}, 0);

console.log(sum);

const max = arr.reduce((max, curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
})

console.log(max)

// Filter

const maxVal = arr.filter((x) => {
    return x > 10;
})

console.log(maxVal);

