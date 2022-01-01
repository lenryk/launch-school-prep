function isNotANumber(num) {
  return num !== num;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(555));
console.log(isNotANumber("test"));
console.log(isNotANumber([1, 2, 3]));
console.log(isNotANumber({ test: "ok" }));
