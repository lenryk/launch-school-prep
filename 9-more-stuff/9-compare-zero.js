function compareZero(num) {
  return 1 / num === -Infinity;
}

console.log(compareZero(0));
console.log(compareZero(-0));
console.log(compareZero(50));
console.log(compareZero(-50));
