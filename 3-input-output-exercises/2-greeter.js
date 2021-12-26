let rlSync = require("readline-sync");
let firstName = rlSync.question("What is your first name? ");
let secondName = rlSync.question("What is your second name? ");
console.log(`Hello, ${firstName}, ${secondName}!`);
