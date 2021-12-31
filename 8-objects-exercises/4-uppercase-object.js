let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);
arr = arr.map((ele) => ele.toUpperCase());

console.log(arr);
