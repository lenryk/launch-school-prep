let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  return arr.reduce((accum, current) => {
    if (current.length % 2 !== 0) {
      accum.push(current.length);
    }
    return accum;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
