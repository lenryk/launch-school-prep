let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  return arr
    .map((ele) => {
      return ele.length;
    })
    .filter((ele) => {
      return ele % 2 !== 0;
    });
}

console.log(oddLengths(arr)); // => [1, 5, 3]
