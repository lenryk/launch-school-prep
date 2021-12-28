function toUppercase(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(toUppercase("goodbye"));
console.log(toUppercase("Hello World"));
