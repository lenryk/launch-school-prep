const number = 4936;
let temp_number = null;

let ones = number % 10;
temp_number = (number - ones) / 10;
console.log(`ones place is ${ones}`);

let tens = temp_number % 10;
temp_number = (temp_number - tens) / 10;
console.log(`tens place is ${tens}`);

let hundreds = temp_number % 10;
temp_number = (temp_number - hundreds) / 10;
console.log(`hundreds place is ${hundreds}`);

let thousands = temp_number % 10;
console.log(`thousands place is ${thousands}`);
