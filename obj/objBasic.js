let obj = {
  name: "Radhika",
  age: 20,
  job: true,
};
obj.address = "Bhosari";

// delete obj.age;
// console.log(obj);
// console.log("age" in obj);
// console.log(obj.hasOwnProperty("name"));

// for (key in obj) {
//   console.log(key, obj[key]);
// }
// const obj2 = { ...obj };
// console.log(obj2);

let myObj = {
  name: "radhika",
  phone: 2345,
  age: 32,
};
let myObj2 = {
  address: "pune",
  job: true,
};

let myObj3 = { ...myObj, ...myObj2 };
console.log(myObj3);

let objArr = Object.entries(myObj3);
// console.log(objArr[0].name);

for (let [key, value] of objArr) {
  console.log("Key:" + key + " Value:" + value);
}
