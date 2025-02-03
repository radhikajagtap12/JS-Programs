


let myArray = [1, 3, 5, 6, 8, 1];
myArray.push(5); // Add element at the end of the array
console.log(myArray)

myArray.pop()
console.log(myArray); // Remove last element of the array

myArray.unshift(0); // Add element at the start of the array
console.log(myArray);

myArray.shift(); // Removes first element of the array
console.log(myArray);

let myArray2 = [9, 10, 11, 22];
let mergedArray = myArray.concat(myArray2); // Merges 2 or more arrays and returns a new array
console.log(mergedArray);

let sliceArray = myArray.slice(2,5); // returns a shallow copy of a portion of an array into a new array
console.log(sliceArray);

// let spliceArray = myArray.splice(1,2, 'a', 'b'); //Adds or removes elements from an array
console.log(myArray);

let indexOfElem = myArray.indexOf(1) // Returns the first index of the specifies element.
let indexOfElem1 = myArray.indexOf(5) // returns -1 if the element is not available
let indexOfElem2 = myArray.indexOf('a')
console.log(indexOfElem, indexOfElem1, indexOfElem2);

let lastIndexElem = myArray.lastIndexOf(1); // returns the last index of the specified element
let lastIndexElem1 = myArray.lastIndexOf("c"); // Returns -1 if element is not present
console.log(lastIndexElem, lastIndexElem1);

let checkIncludes = myArray.includes(1) // Checks if array includes a certain element
let checkIncludes1 = myArray.includes('a')
let checkIncludes2 = myArray.includes(9)
console.log(checkIncludes, checkIncludes1, checkIncludes2);

let forEachArray = myArray.forEach((elem) => console.log(elem))  // Axecutes a provided function for each array elements

let mapedElemts = myArray.map(elem => elem + 1 ); // Creates a new array by applying a function to each element
console.log(mapedElemts);

let reduceElem = myArray.reduce((acc, num) => acc + num, 0)
console.log('reduceElem: ' + reduceElem);

let filtredElem = myArray.filter((num) => num % 2 === 0)
console.log(filtredElem);

let reduceRight = myArray.reduceRight((acc, num) => acc + num, 0);
console.log(reduceRight);

let findElem = myArray.find((num) => num > 5); // returns the first element that satisfies test.
console.log(findElem);

let findIndexElem = myArray.findIndex( num => num > 2)
console.log(findIndexElem);

let everyElem = myArray.every( num => num > 0); // checks if all elements satisfy a test
console.log(everyElem);

let someElem = myArray.some((num) => num > 2);
console.log(someElem)

let sortElem = myArray.sort( (a, b) => a - b)
let sortElem1 = myArray2.sort( (a, b) => b - a)
console.log(sortElem);
console.log(sortElem1);

let reverseElem = myArray2.reverse();
console.log(reverseElem);

let joinElem = myArray.join("-")
let joinElem1 = myArray.join(",")
let joinElem2 = myArray.join("_")
console.log(joinElem);
console.log(joinElem1);
console.log(joinElem2);

let toStringElem = myArray.toString();
console.log(toStringElem);

let nestedArray = [ 0, 1, 2, [3, 4 , [6, 8, 9], [1, 5, 4]], 9];
let flatArray = nestedArray.flat(2);
console.log(flatArray);
let minNumber = Math.min(...flatArray)
console.log(minNumber)

let flatMapElement = myArray.flatMap((num) => [num * 2]);
console.log(flatMapElement);

let fillElem = myArray.fill(99, 3, 6);
console.log(fillElem);

let copyWithinElem = myArray.copyWithin(3, 1, 3);
console.log(copyWithinElem);