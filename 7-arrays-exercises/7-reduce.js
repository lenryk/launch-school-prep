let array = [3, 5, 7];

function sumOfSquares(n) {
  return n.reduce((accum, current) => accum + current * current, 0);
}

console.log(sumOfSquares(array)); // => 83
