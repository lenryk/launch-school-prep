function getNumbers() {
  let readlineSync = require("readline-sync");
  numOne = readlineSync.question("Enter the first number: ");
  numTwo = readlineSync.question("Enter the second number: ");
  console.log(`${numOne} * ${numTwo} = ${multiply(numOne, numTwo)}`);
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

getNumbers();
