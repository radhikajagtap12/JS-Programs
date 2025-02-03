const obj1 = {
    fname: 'Radhika',
    lname: 'Dhumal',
}

const fullName = function(city,state){
    console.log(this.fname + ' ' + this.lname + ' ' + city + ' ' + state);
}

const obj2 = {
    fname: 'shekar',
    lname: 'Dhumal'
}

fullName.call(obj1, 'pune', 'maharashtra') // we can pass multiple arguments in a list
fullName.apply(obj2, ['mumbai','MP']) // we need pass multiple arguments in a array

const myName = fullName.bind(obj2, 'pune', 'maharashtra');
console.log(myName);
myName();