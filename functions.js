// function statement

abc();


function abc(){
    console.log('abc called');
}

// Function expression

const a = function abc(){
    console.log('function expression called')
}
a();
console.log(typeof(abc))
console.log(typeof(a));

// Named function expression

const b = function xyz(){
    console.log('Named function expression called')
    console.log(xyz)
}

b();