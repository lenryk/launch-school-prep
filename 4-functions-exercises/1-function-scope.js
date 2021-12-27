let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
// This will print 1 as the the variable in the function is a different one and not related to the global one at the start
