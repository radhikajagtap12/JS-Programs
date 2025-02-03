// console.log(1);

// setTimeout(function () {
// 	console.log(2);
// }, 1000);

// setTimeout(function () {
// 	console.log(3);
// }, 0);

// console.log(4);

// function x(){
//     setTimeout(function(){
//         console.log(i)
//     }, 10000);
//     var i = 1;
// }
// x();

// var text = 'Outside';
// function printme(){
//     console.log(text);
//     var text = 'inside';
// }
// printme();

function sum( a = 11, b = 6){
    return a + b;
}

console.log(sum(null, 20))
console.log(sum(undefined, 30))
