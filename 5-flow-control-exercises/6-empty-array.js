function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);
// This will return "Not Empty" as an empty array is not falsy
// Falsey statements are: false, undefined, null, NaN, 0, empty string ""
