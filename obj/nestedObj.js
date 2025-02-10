const myObj = {
  name: "Radhika",
  age: 20,
  address: {
    city: "Pune",
    contry: "India",
    state: {
      myState: "Maharashtra",
    },
  },
};

// console.log(myObj.address.city);
// console.log(myObj["address"]["contry"]);
// console.log(myObj["name"]);

function FlattenObj(obj, prefix = "") {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === "object") {
        Object.assign(result, FlattenObj(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

console.log(FlattenObj(myObj));

// function flattenObject(obj, prefix = "") {
//   let result = {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       let newKey = prefix ? `${prefix}.${key}` : key;

//       if (
//         typeof obj[key] === "object" &&
//         obj[key] !== null &&
//         !Array.isArray(obj[key])
//       ) {
//         Object.assign(result, flattenObject(obj[key], newKey));
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }

//   return result;
// }

// console.log(flattenObject(myObj));
