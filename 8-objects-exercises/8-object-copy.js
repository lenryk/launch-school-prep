function copyObj(objToCopy, keys = Object.keys(objToCopy)) {
  let newObj = {};
  keys.forEach((ele) => {
    newObj[ele] = objToCopy[ele];
  });
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

console.log(objToCopy);
