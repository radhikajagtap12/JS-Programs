// "use strict";

// this in global scope
console.log(this);

// this inside a function
function x(){
    // value of this keyword depends on srict / non strict mode
    console.log(this);
}
x(); //undefined
window.x(); // windowObject

// this inside non strict mode - (this sunstitution)
// if the value of this keyword id undefined or the null
// this keyword will be replaced with the globalObject only in non strict mode

// this keyword value depends on how the function is called (windowObject)

// this inside an object method
const student = {
    sName: 'Radhika',
    x: function(){
        console.log(this.sName); // this refers object value
    }
}
student.x();

const student2 = {
    sName: 'Shekhar'
}
student.x.call(student2);

// This inside arrow function
const obj = {
    a: 20,
    y: () => {
        console.log(this); // window object
        // arrow functions dont provide their own this binding
        // it retains this value of the enclosing lexical context
    },
}
obj.y();

// Inside nested functions
let obj2 = {
    b: 20,
    p: function(){
        // enclosing lexical context
        const q = () => {
            console.log(this);
        }

        q();
    }
}
obj2.p();


